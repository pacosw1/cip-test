// cip pipeline — synthed by bun inside the sandbox.
// (Plain TS until @cip/cdk is published.)
const spec = {
  version: "0",
  name: "cip-test",
  jobs: [
    { name: "lint", steps: [{ run: "echo linting..." }] },
    { name: "test", steps: [{ run: "echo testing on $(uname -a)" }], limits: { timeoutSec: 300 } },
    { name: "build", steps: [{ run: "echo building..." }, { run: "echo done" }], needs: ["lint", "test"] },
  ],
};
console.log(JSON.stringify(spec, null, 2));
