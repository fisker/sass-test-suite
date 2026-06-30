export default [
  {
    name: 'positional/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red)}\n',
  },
  {
    name: 'positional/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.scale($color: red)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgba(red, 0.5), $alpha: 100%)}\n',
  },
  {
    name: 'alpha/max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgba(red, 0.5), $alpha: 0%)}\n',
  },
  {
    name: 'alpha/zero/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'alpha/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgba(red, 0.5), $alpha: -100%)}\n',
  },
  {
    name: 'alpha/min/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgba(red, 0.5), $alpha: 14%)}\n',
  },
  {
    name: 'alpha/high/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.57);\n}\n',
  },
  {
    name: 'alpha/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgba(red, 0.3), $alpha: -36%)}\n',
  },
  {
    name: 'alpha/low/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.192);\n}\n',
  },
]
