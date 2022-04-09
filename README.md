# Rollup CommonJS Circular xmlbuilder bug

This issue reproduces a bug in rollup when trying to build the [xmlbuilder](https://www.npmjs.com/package/xmlbuilder) package.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-z4ueyp)

## Instructions

To replicate:

- Run `node index.js` to validate the correct response from the code
- Run `npm run build` to compile index.js with rollup
- Run `node dist/index.js` to run the rollup compiled version of index.js

## Error

```
❯ node dist/index.js
Error: Class extends value #<Object> is not a constructor or null
    at async ESMLoader.import (https://node-z4ueyp.w.staticblitz.com/blitz.31afbfcfe1b0985e8cbdb27d44e16766166a118e.js:6:1054368)
    at async i.loadESM (https://node-z4ueyp.w.staticblitz.com/blitz.31afbfcfe1b0985e8cbdb27d44e16766166a118e.js:6:268172)
    at async handleMainPromise (https://node-z4ueyp.w.staticblitz.com/blitz.31afbfcfe1b0985e8cbdb27d44e16766166a118e.js:6:989191)
```

## Notes

This appears to be a circular dependency issue the error happens when XMLElement attempts to extend XMLNode which happends to be undefined. XMLNode.js attempts to avoid this by deferring require calls to delay the circular dependency untill after all modules have run. But rollup seems to ignore that and place XMLElement's code before XMLNode.
