export default [
  {
    name: 'even/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgba(#91e16f, 0.3), rgba(#0144bf, 0.3))}\n',
  },
  {
    name: 'even/output.css',
    data: 'a {\n  b: rgba(73, 146.5, 151, 0.3);\n}\n',
  },
  {
    name: 'first/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, transparent)}\n',
  },
  {
    name: 'first/output.css',
    data: 'a {\n  b: rgba(145, 225, 111, 0.5);\n}\n',
  },
  {
    name: 'last/input.scss',
    data: '@use "sass:color";\na {b: color.mix(transparent, #0144bf)}\n',
  },
  {
    name: 'last/output.css',
    data: 'a {\n  b: rgba(1, 68, 191, 0.5);\n}\n',
  },
  {
    name: 'firstwards/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgba(#91e16f, 0.8), rgba(#0144bf, 0.3))}\n',
  },
  {
    name: 'firstwards/output.css',
    data: 'a {\n  b: rgba(109, 185.75, 131, 0.55);\n}\n',
  },
  {
    name: 'lastwards/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgba(#91e16f, 0.4), rgba(#0144bf, 0.9))}\n',
  },
  {
    name: 'lastwards/output.css',
    data: 'a {\n  b: rgba(37, 107.25, 171, 0.65);\n}\n',
  },
]
