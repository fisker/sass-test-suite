export default [
  {
    name: 'simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":any(.c)", ".c", ".d")}\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b: :any(.c, .d);\n}\n',
  },
  {
    name: 'list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":any(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'list/output.css',
    data: 'a {\n  b: :any(.c, .d, .e);\n}\n',
  },
  {
    name: 'any_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":any(.c)", ".c", ":any(.d, .e)")}\n',
  },
  {
    name: 'any_in_extender/output.css',
    data: 'a {\n  b: :any(.c, .d, .e);\n}\n',
  },
]
