export default [
  {
    name: 'polar_space/input.scss',
    data: '@use "sass:color";\na {b: color.mix($color1: #91e16f, $color2: #0144bf, $weight: 92%, $method: hsl decreasing hue)}\n',
  },
  {
    name: 'polar_space/output.css',
    data: 'a {\n  b: rgb(177.749777646, 225.4953896552, 98.9846103448);\n}\n',
  },
  {
    name: 'rectangular_space/input.scss',
    data: '@use "sass:color";\na {b: color.mix($color1: #91e16f, $color2: #0144bf, $weight: 92%, $method: lab)}\n',
  },
  {
    name: 'rectangular_space/output.css',
    data: 'a {\n  b: rgb(141.3483384924, 211.5499489073, 120.4340844852);\n}\n',
  },
]
