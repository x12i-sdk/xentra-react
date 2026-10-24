# @x12i/xentra-react usage example

React components and hooks for Xentra.

This consuming application demonstrates **render an account-scoped permission gate with a pending fallback** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Embed Xentra components in a React host.
- Use the published hooks to connect a host interface to Xentra data.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/xentra-react)
- [Implementation monorepo](https://github.com/x12i/xentra)
- [Reviewed package source](https://github.com/x12i/xentra/tree/004372e6695509bf2e95d2e4e53d4534e81dd312/packages/react)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Rendered fixture

Run the example, then open its generated `preview.html` or `workflow.svg`. The checks establish static rendering or SVG export for the authored fixture. Browser effects, interactions, responsive layout and deployed service behavior are not covered by this check. The host fixture contains no real customer data.
