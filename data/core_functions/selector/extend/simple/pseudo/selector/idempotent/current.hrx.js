// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/simple/pseudo/selector/idempotent/current.hrx

export default [
  {
    name: 'simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":current(.c)", ".c", ".d")}\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b: :current(.c, .d);\n}\n',
  },
  {
    name: 'list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":current(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'list/output.css',
    data: 'a {\n  b: :current(.c, .d, .e);\n}\n',
  },
  {
    name: 'current_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":current(.c)", ".c", ":current(.d, .e)")}\n',
  },
  {
    name: 'current_in_extender/output.css',
    data: 'a {\n  b: :current(.c, .d, .e);\n}\n',
  },
]
