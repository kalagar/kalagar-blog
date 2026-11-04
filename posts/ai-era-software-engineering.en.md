---
title: "Is Coding Enough in the AI Era? The Skills Software Engineers Need"
description: "AI can write code, but software engineering requires judgment, ownership and verification. Explore five skills to build in the AI era."
date: 2026-11-04
youtubeId: U1UngPhqdrk
---

AI can generate a working-looking feature in minutes. That raises a question for every developer: if producing code becomes easier, where does an engineer create value? Coding remains essential, but delivering useful, reliable software also means understanding the problem, making trade-offs and taking responsibility for the result.

This article expands on the questions in my video about software engineering in the AI era. One starting point is [Beyond Coding's interview with Sajal Rustagi, a Staff Engineer at Meta](https://www.youtube.com/watch?v=brNpAU5JmUY). His discussion of ownership, wider influence and working with agents helps frame the question; the research and practical recommendations below are my own synthesis, not claims attributed to him.

## From writing code to owning outcomes

Imagine an alert wakes the team at night. A narrow response fixes the immediate error and closes the ticket. Ownership also asks why the failure happened, whether customers are still affected, and how monitoring or design could prevent a repeat. The right scope depends on the situation: an urgent incident may require a quick mitigation before a deeper investigation.

A senior engineer often drives complex work within a team; a staff engineer may influence decisions across teams and work through greater ambiguity. Titles and expectations vary by company, and neither role is defined simply by the number of lines written. The useful lesson at any level is to connect technical decisions to the people and systems they affect.

## Does AI make developers more productive?

The evidence depends on the work and the way productivity is measured. In [three field experiments involving 4,867 developers](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/), researchers found a 26.08% increase in completed tasks when results were combined. The study also reported greater gains among less experienced developers; completed tasks are one measure, not the whole value of software.

In contrast, [METR's early-2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19% longer on their own mature projects when allowed to use the tools studied. This small, specific experiment does not establish that AI slows all developers. In its [February 2026 update](https://metr.org/blog/2026-02-24-uplift-update/), METR explained that selection effects made its newer data an unreliable estimate of current productivity and said it was likely developers were faster with newer tools, while the size of the change remained uncertain.

These results can coexist: tasks, experience, tools and measures differ. For your own team, compare similar work over time and consider review effort, defects and user outcomes alongside speed. The [2025 DORA report](https://dora.dev/research/2025/dora-report/) describes AI as an amplifier of existing organizational strengths and weaknesses—another reason to improve the surrounding workflow, not just adopt a tool.

## When AI writes both code and tests

A passing generated test is evidence, not proof. Code and tests produced from the same misunderstood requirement can agree with each other and still be wrong. Start by stating expected behavior independently: what should happen, for whom, and under which constraints? Then check edge cases, failure paths, security and the behavior of the integrated system. Review generated changes as you would a colleague's, with scrutiny proportional to risk.

For example, for a payment retry feature, specify that a repeated request must not charge a customer twice. Test duplicate requests and failures against that requirement; do not infer correctness merely from a green test suite. Protect sensitive information when providing context to external tools, according to your organization's rules.

## Five skills to develop

1. **Problem framing:** clarify the user need, constraints and success criteria before choosing a solution.
2. **Systems thinking:** trace dependencies, failure modes and operational consequences beyond the changed file.
3. **Engineering judgment:** compare options and make trade-offs in complexity, cost, security and maintainability.
4. **Ownership and communication:** follow an issue through to an outcome, explain decisions and involve the people affected.
5. **AI collaboration and verification:** give agents relevant context and bounded tasks, inspect their work, and validate results against independent requirements.

You can practice these skills without a staff title. On your next task, write down the desired outcome, list one plausible failure, and explain your proposed trade-off in the pull request. Ask an AI assistant for alternatives, then check its suggestions against the actual system.

## Keep coding—and keep learning

Foundations matter because they help you recognize a plausible but incorrect answer, debug unfamiliar behavior and build a mental model of the system. For newer developers, using AI to explain a solution can be useful; so can implementing a small part yourself and comparing the approaches. Neither coding unaided nor delegating everything is a universal rule.

The question is not whether engineers will ever write code again. It is how to combine technical skill with judgment and responsibility as the tools change. If an AI assistant could produce the implementation tomorrow, what problem would you choose to solve—and how would you know the result helped?
