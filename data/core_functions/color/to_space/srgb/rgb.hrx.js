export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0 0 0), rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 1 1 1), rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.5 0.5 0.5), rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: rgb(127.5, 127.5, 127.5);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.2 0.4 0.8), rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: #3366cc;\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -1 0.4 2), rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(212, 300%, 50%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -999999 0 0), rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(0, 100%, -49999950%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.4), rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: rgba(25.5, 51, 76.5, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.0), rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: rgba(25.5, 51, 76.5, 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb none 0.2 0.3), rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: rgb(0, 51, 76.5);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 none 0.3), rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: rgb(25.5, 0, 76.5);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 none), rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: rgb(25.5, 51, 0);\n}\n',
  },
]
