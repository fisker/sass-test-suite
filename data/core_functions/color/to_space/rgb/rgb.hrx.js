export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(#28d, rgb)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: #28d;\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(rgb(0, 100, 0), $red: -50, $blue: 400), rgb)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: hsl(220, 281.25%, 68.6274509804%);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(none 20 30), rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: rgb(none 20 30);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 none 30), rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: rgb(10 none 30);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(rgb(10 20 none), rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: rgb(10 20 none);\n}\n',
  },
]
