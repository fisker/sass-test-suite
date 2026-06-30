// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/simple/pseudo/selector/idempotent/prefixed.hrx

export default [
  {
    name: 'simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":-ms-matches(.c)", ".c", ".d")}\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b: :-ms-matches(.c, .d);\n}\n',
  },
  {
    name: 'list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":-ms-matches(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'list/output.css',
    data: 'a {\n  b: :-ms-matches(.c, .d, .e);\n}\n',
  },
  {
    name: 'same_prefix_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":-ms-matches(.c)", ".c", ":-ms-matches(.d, .e)")}\n',
  },
  {
    name: 'same_prefix_in_extender/output.css',
    data: 'a {\n  b: :-ms-matches(.c, .d, .e);\n}\n',
  },
  {
    name: 'different_prefix_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":-ms-matches(.c)", ".c", ":-moz-matches(.d, .e)")}\n',
  },
  {
    name: 'different_prefix_in_extender/output.css',
    data: 'a {\n  b: :-ms-matches(.c);\n}\n',
  },
]
