export default [
  {
    name: 'simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":matches(.c)", ".c", ".d")}\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b: :matches(.c, .d);\n}\n',
  },
  {
    name: 'list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":matches(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'list/output.css',
    data: 'a {\n  b: :matches(.c, .d, .e);\n}\n',
  },
  {
    name: 'matches_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":matches(.c)", ".c", ":matches(.d, .e)")}\n',
  },
  {
    name: 'matches_in_extender/output.css',
    data: 'a {\n  b: :matches(.c, .d, .e);\n}\n',
  },
]
