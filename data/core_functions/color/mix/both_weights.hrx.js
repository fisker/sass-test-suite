export default [
  {
    name: 'transparent/first/input.scss',
    data: '@use "sass:color";\na {b: color.mix(transparent, #0144bf, 70%)}\n',
  },
  {
    name: 'transparent/first/output.css',
    data: 'a {\n  b: rgba(1, 68, 191, 0.3);\n}\n',
  },
  {
    name: 'transparent/last/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, transparent, 70%)}\n',
  },
  {
    name: 'transparent/last/output.css',
    data: 'a {\n  b: rgba(145, 225, 111, 0.7);\n}\n',
  },
  {
    name: 'weighted/first/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgba(#91e16f, 0.2), rgba(#0144bf, 0.7), 100%)}\n',
  },
  {
    name: 'weighted/first/output.css',
    data: 'a {\n  b: rgba(145, 225, 111, 0.2);\n}\n',
  },
  {
    name: 'weighted/last/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgba(#91e16f, 0.2), rgba(#0144bf, 0.7), 0%)}\n',
  },
  {
    name: 'weighted/last/output.css',
    data: 'a {\n  b: rgba(1, 68, 191, 0.7);\n}\n',
  },
  {
    name: 'mixed/firstwards/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgba(#91e16f, 0.8), rgba(#0144bf, 0.3), 63%)}\n',
  },
  {
    name: 'mixed/firstwards/output.css',
    data: 'a {\n  b: rgba(121.4247787611, 199.296460177, 124.0973451327, 0.615);\n}\n',
  },
  {
    name: 'mixed/lastwards/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgba(#91e16f, 0.2), rgba(#0144bf, 0.7), 42%)}\n',
  },
  {
    name: 'mixed/lastwards/output.css',
    data: 'a {\n  b: rgba(29, 98.5277777778, 175.4444444444, 0.49);\n}\n',
  },
  {
    name: 'contradiction/input.scss',
    data: '@use "sass:color";\n// When we weight entirely towards a transparent color, the formula for\n// computing the combined alpha would divide by zero, so we just return\n// transparent as a special case.\na {b: color.mix(transparent, #0144bf, 100%)}\n',
  },
  {
    name: 'contradiction/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
]
