# Working in this repository (agents)

## Lean delivery (first priority)

We are a lean team. The user's time costs 500 USD per hour, so waiting,
idling and overhead are waste. Value is working changes delivered per
hour, not checks run.

- Time targets: a small task takes 2 minutes to implement, a medium task
  10, a large task 20. A pull request goes from open to deployed in
  1 minute 30 seconds. When you are over a target, say so and cut scope
  or ask; never drift.
- Never idle. While a queue, build or deploy runs, start the next task.
  Do not wait for what the pipeline finishes.
- Batch related work into one pull request. Each pull request pays a
  fixed cost (queue, CI, deploy), so a tiny one is waste.
- Run only the affected tests, once. The pipeline runs the rest.
- An independent review is rare, about 1 in 100 changes. Ask first:
  "Can this change cause damage that the pipeline and a rollback cannot
  catch?" Only a yes (data loss, a security hole, an irreversible
  migration) justifies one. Never set an execution policy on a task.
- No status chatter. Report when work is finished, failed, or needs the
  user's decision.

### Tests

- Few tests that cover a lot: a small number of end-to-end tests over
  full flows, plus fast in-memory integration tests (a real database in
  memory or in a temp file, a real HTTP server in the process). No unit
  tests by default; they are usually waste.
- Before you add a test, check that no existing test, and no end-to-end
  test, already covers the behavior. Never duplicate coverage. Delete a
  duplicate or trivial test when you touch it.
- A bug fix ships its regression test in the same commit, in the
  cheapest test that already exercises that flow.
- Never skip, delete or weaken a failing check to get green.
