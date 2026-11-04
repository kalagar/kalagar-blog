// Fails when a post breaks the rules the kalagar.net reader applies (README, "Rules that make the check turn red").
// Mirror of parsePost/isSlug in kalagar.net src/lib/blog/post.ts; change both together.
import { readdirSync, readFileSync } from "node:fs";

const NAME = /^([a-z0-9]+(-[a-z0-9]+)*)\.(fa|en|de)\.md$/;

const isRealDate = (value) => {
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().startsWith(value)
  );
};

const unquote = (value) => {
  const quote = value[0];
  return (quote === '"' || quote === "'") && value.length > 1 && value.endsWith(quote)
    ? value.slice(1, -1)
    : value;
};

// Returns the first offending field, or undefined when the post is fine.
const badField = (source) => {
  const match = source
    .replace(/^﻿/, "")
    .match(/^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n([\s\S]*))?$/);
  if (!match) return "frontmatter";

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(":");
    if (colon > 0) fields[line.slice(0, colon).trim()] = unquote(line.slice(colon + 1).trim());
  }

  for (const field of ["title", "description", "date"]) {
    if (!fields[field]) return field;
  }
  if (!isRealDate(fields.date)) return "date";
  if (fields.youtubeId && !/^[A-Za-z0-9_-]{11}$/.test(fields.youtubeId)) return "youtubeId";
};

const dir = process.argv[2] ?? "posts";
let failed = false;
for (const file of readdirSync(dir).sort()) {
  const field = !NAME.test(file) ? "file name (want <slug>.<fa|en|de>.md)" : badField(readFileSync(`${dir}/${file}`, "utf8"));
  if (field) {
    failed = true;
    // ::error makes GitHub annotate the file in the check.
    console.log(`::error file=${dir}/${file}::${dir}/${file}: invalid ${field}`);
  }
}
process.exit(failed ? 1 : 0);
