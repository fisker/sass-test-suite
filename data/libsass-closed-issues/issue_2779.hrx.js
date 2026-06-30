export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\n@debug(selector.extend(".a .b", "&b", ndll));\n',
  },
  {
    name: 'error',
    data: 'Error: $extendee: Parent selectors aren\'t allowed here.\n  ,\n1 | &b\n  | ^^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | @debug(selector.extend(".a .b", "&b", ndll));\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:8  root stylesheet\n',
  },
]
