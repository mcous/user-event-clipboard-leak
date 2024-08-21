# `@testing-library/user-event` clipboard state leak

In Vitest - or any test runner that does not expose global `afterEach` and `afterAll` functions - clipboard stub state is not reset between tests.

```shell
gh repo clone mcous/user-event-clipboard-leak
cd user-event-clipboard-leak
npm install
npm run test:globals # pass
npm run test:no-globals # fail
```
