// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/pseudo/selector_arg/nth_child.hrx

export default [
  {
    name: 'superset/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.is-superselector(\n    ":nth-child(n+1 of c d, e f, g h)",\n    ":nth-child(n+1 of c d.i, e j f)");\n}\n',
  },
  {
    name: 'superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'subset/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.is-superselector(\n      ":nth-child(n+1 of c d.i, e j f)",\n      ":nth-child(n+1 of c d, e f, g h)");\n}\n',
  },
  {
    name: 'subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'different_arg/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":nth-child(n+1 of c)", ":nth-child(n+2 of c)")}\n',
  },
  {
    name: 'different_arg/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'bare_super/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", ":nth-child(n+1 of c)")}\n',
  },
  {
    name: 'bare_super/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'bare_sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":nth-child(n+1 of c d, e f, g h)", "c d, e f, g h")}\n',
  },
  {
    name: 'bare_sub/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/superset/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.is-superselector(\n      ":-pfx-nth-child(n+1 of c d, e f, g h)",\n      ":-pfx-nth-child(n+1 of c d.i, e j f)");\n}\n',
  },
  {
    name: 'prefix/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'prefix/subset/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.is-superselector(\n      ":-pfx-nth-child(n+1 of c d.i, e j f)",\n      ":-pfx-nth-child(n+1 of c d, e f, g h)");\n}\n',
  },
  {
    name: 'prefix/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
