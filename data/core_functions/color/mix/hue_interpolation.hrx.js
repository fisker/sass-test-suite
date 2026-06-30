export default [
  {
    name: 'default/acute/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 190), $method: oklch)}\n',
  },
  {
    name: 'default/acute/output.css',
    data: 'a {\n  b: oklch(50% 0.1 110deg);\n}\n',
  },
  {
    name: 'default/obtuse/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 230), $method: oklch)}\n',
  },
  {
    name: 'default/obtuse/output.css',
    data: 'a {\n  b: oklch(50% 0.1 310deg);\n}\n',
  },
  {
    name: 'shorter/acute/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 190), $method: oklch shorter hue)}\n',
  },
  {
    name: 'shorter/acute/output.css',
    data: 'a {\n  b: oklch(50% 0.1 110deg);\n}\n',
  },
  {
    name: 'shorter/obtuse/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 230), $method: oklch shorter hue)}\n',
  },
  {
    name: 'shorter/obtuse/output.css',
    data: 'a {\n  b: oklch(50% 0.1 310deg);\n}\n',
  },
  {
    name: 'longer/obtuse/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 230), $method: oklch longer hue)}\n',
  },
  {
    name: 'longer/obtuse/output.css',
    data: 'a {\n  b: oklch(50% 0.1 130deg);\n}\n',
  },
  {
    name: 'increasing/acute/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 190), $method: oklch increasing hue)}\n',
  },
  {
    name: 'increasing/acute/output.css',
    data: 'a {\n  b: oklch(50% 0.1 110deg);\n}\n',
  },
  {
    name: 'increasing/obtuse/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 230), $method: oklch increasing hue)}\n',
  },
  {
    name: 'increasing/obtuse/output.css',
    data: 'a {\n  b: oklch(50% 0.1 130deg);\n}\n',
  },
  {
    name: 'decreasing/acute/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 190), $method: oklch decreasing hue)}\n',
  },
  {
    name: 'decreasing/acute/output.css',
    data: 'a {\n  b: oklch(50% 0.1 290deg);\n}\n',
  },
  {
    name: 'decreasing/obtuse/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 230), $method: oklch decreasing hue)}\n',
  },
  {
    name: 'decreasing/obtuse/output.css',
    data: 'a {\n  b: oklch(50% 0.1 310deg);\n}\n',
  },
  {
    name: 'weighted/input.scss',
    data: '@use "sass:color";\na {b: color.mix(red, green, 20%, lch longer hue)}\n',
  },
  {
    name: 'weighted/output.css',
    data: 'a {\n  b: rgb(201.9125152451, 62.5456438786, 25.0531427989);\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: '@use "sass:color";\na {b: color.mix(oklch(0.5 0.1 30), oklch(0.5 0.1 190), $method: oKlCh LONger HUE)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: oklch(50% 0.1 290deg);\n}\n',
  },
]
