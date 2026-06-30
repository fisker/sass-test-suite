export default [
  {
    name: 'identical/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklch(50% 0.2 0deg), $space: lab)}\n',
  },
  {
    name: 'identical/output.css',
    data: 'a {\n  b: oklch(50% 0.2 0deg);\n}\n',
  },
  {
    name: 'powerless/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklch(50% 0 0deg), $space: lab)}\n',
  },
  {
    name: 'powerless/output.css',
    data: 'a {\n  b: oklch(50% 0 none);\n}\n',
  },
  {
    name: 'missing/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgb(none none none))}\n',
  },
  {
    name: 'missing/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
]
