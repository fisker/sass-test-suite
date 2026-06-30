export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\n// The full set of possible input formats is tested with `selector-parse()`;\n// this spec just verifies one example for `is-superselector()`.\na {b: selector.is-superselector((c, d e), (c, d e))}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
