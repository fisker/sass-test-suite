// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/rgb/three_args/unitless.hrx

export default [
  {
    name: 'README.md',
    data: 'Channels may be specified as unitless numbers between 0 and 255.\n',
  },
  {
    name: 'numbers/input.scss',
    data: 'a {b: rgb(18, 52, 86)}\n',
  },
  {
    name: 'numbers/output.css',
    data: 'a {\n  b: rgb(18, 52, 86);\n}\n',
  },
  {
    name: 'beaded/input.scss',
    data: 'a {b: rgb(190, 173, 237)}\n',
  },
  {
    name: 'beaded/output.css',
    data: 'a {\n  b: rgb(190, 173, 237);\n}\n',
  },
  {
    name: 'springgreen/input.scss',
    data: 'a {b: rgb(0, 255, 127)}\n',
  },
  {
    name: 'springgreen/output.css',
    data: 'a {\n  b: rgb(0, 255, 127);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: 'a {b: rgb($red: 0, $green: 255, $blue: 127)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb(0, 255, 127);\n}\n',
  },
  {
    name: 'clamped/README.md',
    data: 'Channels that are out of bounds are clamped within bounds.\n',
  },
  {
    name: 'clamped/red/input.scss',
    data: 'a {b: rgb(256, 0, 0)}\n',
  },
  {
    name: 'clamped/red/output.css',
    data: 'a {\n  b: rgb(255, 0, 0);\n}\n',
  },
  {
    name: 'clamped/green/input.scss',
    data: 'a {b: rgb(0, -1, 0)}\n',
  },
  {
    name: 'clamped/green/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'clamped/blue/input.scss',
    data: 'a {b: rgb(0, 0, 9999)}\n',
  },
  {
    name: 'clamped/blue/output.css',
    data: 'a {\n  b: rgb(0, 0, 255);\n}\n',
  },
]
