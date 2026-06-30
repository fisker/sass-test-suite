export default [
  {
    name: 'simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":is(.c)", ".c", ".d")}\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b: :is(.c, .d);\n}\n',
  },
  {
    name: 'list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":is(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'list/output.css',
    data: 'a {\n  b: :is(.c, .d, .e);\n}\n',
  },
  {
    name: 'is_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":is(.c)", ".c", ":is(.d, .e)")}\n',
  },
  {
    name: 'is_in_extender/output.css',
    data: 'a {\n  b: :is(.c, .d, .e);\n}\n',
  },
]
