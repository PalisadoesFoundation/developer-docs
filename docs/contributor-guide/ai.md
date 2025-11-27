---
id: ai
title: AI Use Policy
sidebar_position: 15
---

Our goal in our projects is to develop an excellent software system. This requires careful attention to detail in every change we integrate. Maintainer time and attention is very limited, so it's important that changes you ask us to review represent your _best_ work.

## AI-Assisted Contributions

You are encouraged to use tools that help you write good code, including AI tools. Keep the following points in mind:

1. The PR author should understand the core ideas behind the implementation end-to-end, and be able to justify the design and code during review whether or not you used an LLM as part of your process to produce them. The answer to "Why did you make change X?" should never be "I'm not sure. The AI did it."

2. **Calls out unknowns and assumptions.** It’s okay to not fully understand some bits of AI generated code. You should comment on these cases and point them out to reviewers so that they can use their knowledge of the codebase to clear up any concerns. For example, you might comment "calling this function here seems to work but I’m not familiar with how it works internally, I wonder if there’s a race condition if it is called concurrently".

## Why fully AI-generated PRs without understanding are not helpful

Today, AI tools cannot reliably make complex changes to our code on their own, which is why we rely on pull requests and code review.

The purposes of code review are to:

1. Finish the intended task.

1. Share knowledge between authors and reviewers, as a long-term investment in the project. For this reason, even if someone familiar with the codebase can finish a task quickly, we’re still happy to help a new contributor work on it even if it takes longer.

An AI dump for an issue doesn’t meet these purposes. Maintainers could finish the task faster by using AI directly, and the submitters gain little knowledge if they act only as a pass through AI proxy without understanding.

Please understand the reviewing capacity is very limited for our projects therefore:

1. PRs which appear to not have the requisite understanding, or violate these guidelines might not get reviewed, and may eventually closed or redirected.

2. Repeated violations of this policy will be handled by our [Code of Conduct](./code-of-conduct.md) policy.

## Using AI as a coding assistant

1. Don't skip **becoming familiar with the part of the codebase** you're working on. This will let you write better prompts and validate their output if you use an LLM. Code assistants can be a useful search engine/discovery tool in this process, but don't trust claims they make about how our projects work. LLMs are often wrong, even about details that are clearly answered in our documentation.

2. Split up your changes into **[coherent commits]**, even if an LLM generates them all in one go.

3. Don't simply ask an LLM to add **code comments**, as it will likely produce a bunch of text that unnecessarily explains what's already clear from the code. If using an LLM to generate comments, be really specific in your request, demand succinctness, and carefully edit the result.

## Using AI for communication

As noted above, our contributors are expected to communicate with intention, to avoid wasting maintainer time with long, sloppy writing. We strongly prefer clear and concise communication about points that actually require discussion over long AI-generated comments.

When you use an LLM to write a message for you, it remains **your responsibility** to read through the whole thing and make sure that it makes sense to you and represents your ideas concisely. A good rule of thumb is that if you can't make yourself carefully read some LLM output that you generated, nobody else wants to read it either.

Here are some concrete guidelines for using LLMs as part of your communication
workflows.

1. When writing a pull request description, **do not include anything that's obvious** from looking at your changes directly (e.g., files changed, functions updated, etc.). Instead, focus on the _why_ behind your changes. Don't ask an LLM to generate a PR description on your behalf based on your code changes, as it will simply regurgitate the information that's already there.

1. Similarly, when responding to a pull request comment, **explain your reasoning**. Don't prompt an LLM to re-describe what can already be seen from the code.

1. Verify that **everything you write is accurate**, whether or not an LLM generated any part of it. Our maintainers will be unable to review your contributions if you misrepresent your work (e.g., misdescribing your code changes, their effect, or your testing process).

1. Complete all parts of the **PR template**, including screenshots and the self-review checklist. Don't simply overwrite the template with LLM output.

1. **Clarity and succinctness** are much more important than perfect grammar, so you shouldn't feel obliged to pass your writing through an LLM. If you do ask an LLM to clean up your writing style, be sure it does _not_ make it longer in the process. Demand succinctness in your prompt.

1. Quoting an LLM answer is usually less helpful than linking to **relevant primary sources**, like source code, reference documentation, or web standards. If you do need to quote an LLM answer in a conversation, put the answer in a **quote block** to distinguish LLM output from your own thoughts.

1. It’s recommended to write a high-quality issue with a clear problem statement and a minimal, reproducible example. This can make it easier for others to contribute.

## Unwelcome Repository Contributions

We do not welcome the following activities that are often the result of AI automations:

1. Using automation to blindly submit and update pull requests.
2. Frequent closing of pull requests for the same issue.
3. Repeatedly ignoring PR requested changes from reviewers and automated systems.
   1. This includes resolving requested changes without modifying code.
4. Repeatedly ignoring answering any questions from reviewers.
5. Using AI to generate generic plans of action without an in-depth knowledge of the code base. This is not helpful for us.
6. Deleting all comments in the submitted edited files.
7. Repeatedly submitting irrelevant files for PR review after being made aware of the practice.
8. Repeatedly dismissing or resolving reviewer suggestions without modifying code.

Persons who violate our expectations listed above will be referred to our [Code of Conduct process](./code-of-conduct.md).
