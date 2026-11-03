# kalagar-blog

Blog posts for [kalagar.net](https://kalagar.net). One post per YouTube video. A post goes live when its file lands on the `main` branch. There is nothing to deploy and no admin page.

Everything you need is in this file. If you only read one section, read **Checklist**.

## Folder layout

```text
posts/
  my-first-video.fa.md      Persian version
  my-first-video.en.md      English version
  my-first-video.de.md      German version
images/
  my-first-video/
    cover.jpg
    diagram.png
```

- Every post file is named `<slug>.<language>.md`.
- **Slug:** lowercase English letters, digits and hyphens only (`my-first-video`). It becomes the web address: `kalagar.net/fa/blog/my-first-video`. Never change a slug after publishing; the old link would break.
- **Language:** `fa`, `en` or `de`.
- Write the post in as many languages as you like. Use the **same slug** for each language of the same video. A language without a file simply has no post.

## The file

Every post starts with a header between two `---` lines, then the text.

```md
---
youtubeId: dQw4w9WgXcQ
title: How I prepare for a system design interview
description: The four steps I follow before every system design interview, from the video.
date: 2026-11-03
---

Your text starts here, written in Markdown.
```

| Field         | Required | What to write                                                                          |
| ------------- | -------- | -------------------------------------------------------------------------------------- |
| `title`       | yes      | The post title. Shown as the page heading and in Google.                               |
| `description` | yes      | One or two sentences, about 150 characters. Shown in the list and in Google results.   |
| `date`        | yes      | Publish date as `YYYY-MM-DD`. The newest date is listed first.                         |
| `youtubeId`   | no       | The part after `v=` in the video link. `youtube.com/watch?v=dQw4w9WgXcQ` → `dQw4w9WgXcQ`. Leave it out for a post without a video. |
| `draft`       | no       | `true` hides the post everywhere. Remove the line, or write `false`, to publish.       |

Rules that make the check turn red: a required field is missing or empty, `date` is not a real date in `YYYY-MM-DD`, the file name is not `<slug>.<fa|en|de>.md`, or `youtubeId` is not 11 letters, digits, `-` or `_`. A red post is left out of the site until you fix it. The other posts are not affected.

If the text of a field contains a colon, put it in quotes: `title: "Interview prep: the four steps"`.

## Writing the text

Use plain Markdown. Do not start the text with a `#` heading of the title; the site shows `title` already. Start sections with `##`.

````md
## A section heading

A paragraph with **bold**, *italic* and a [link](https://example.com).

- a bullet
- another bullet

1. a numbered step
2. another step

> A quote.

```js
const code = "goes in a fenced block";
```
````

- Tables, strikethrough and task lists (GitHub style) work too.
- **HTML is not shown.** Anything like `<div>` or `<script>` is ignored. Use Markdown.
- **Persian posts** are laid out right to left automatically. Write them in Persian as usual. Put English words, code and links inside the text normally.
- Do not paste the video link into the text. `youtubeId` already puts the video at the top of the post; it plays after the visitor clicks it.

## Images

1. Put the file in `images/<slug>/`, for example `images/my-first-video/diagram.png`.
2. Use it in the post with a path that starts with `../images/`:

   ```md
   ![The four steps drawn as a diagram](../images/my-first-video/diagram.png)
   ```

3. The text in the brackets is **required**. It describes the image for screen readers and Google.
4. Keep each image under about 500 KB (JPG or WebP for photos, PNG for diagrams). The site resizes images, but a huge file slows the upload.
5. Use only images you own or are allowed to publish. This repo is public.

## Publishing a post

You can do everything in the browser on github.com.

1. Open the `posts` folder → **Add file** → **Upload files** (images go in `images/<slug>/` the same way).
2. Write a short note for the change, for example `Add post: my-first-video (fa, en)`.
3. Choose **Create a new branch** while you are still writing or waiting for review. Choose **Commit directly to main** when the post is ready; it goes live within a minute.
4. Look for the green check next to the commit. A red cross means the file broke a rule above; click it to see which file and field.

## Drafts

This repo is **public**: everything on `main` can be read by anyone, even with `draft: true`. Keep unfinished posts on a branch (step 3 above) and merge them into `main` only when you are happy. Use `draft: true` only as a safety switch for something that is already on `main`.

## Changing or removing a post

- **Fix a typo or update the text:** edit the file on github.com (pencil icon) and commit. The site updates within a minute.
- **Take a post down:** set `draft: true`, or delete the file. Both remove it from the site.

## Checklist

- [ ] File is `posts/<slug>.<fa|en|de>.md`, slug in lowercase English with hyphens.
- [ ] Header has `title`, `description`, `date` (`YYYY-MM-DD`).
- [ ] `youtubeId` is only the 11-character id, not the full link.
- [ ] Text has no `#` title heading and no HTML.
- [ ] Every image is in `images/<slug>/`, used with `../images/...`, and has a description.
- [ ] Not a draft, or it is on a branch.
- [ ] After the commit, the check is green.
