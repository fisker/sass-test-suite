// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/rgb/four_args/in_gamut.hrx

export default [
  {
    name: 'transparent/input.scss',
    data: 'a {b: rgb(0, 255, 127, 0)}\n',
  },
  {
    name: 'transparent/output.css',
    data: 'a {\n  b: rgba(0, 255, 127, 0);\n}\n',
  },
  {
    name: 'opaque/input.scss',
    data: 'a {b: rgb(190, 173, 237, 1)}\n',
  },
  {
    name: 'opaque/output.css',
    data: 'a {\n  b: rgb(190, 173, 237);\n}\n',
  },
  {
    name: 'partial/input.scss',
    data: 'a {b: rgb(18, 52, 86, 0.5)}\n',
  },
  {
    name: 'partial/output.css',
    data: 'a {\n  b: rgba(18, 52, 86, 0.5);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: 'a {b: rgb($red: 0, $green: 255, $blue: 127, $alpha: 0.3)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgba(0, 255, 127, 0.3);\n}\n',
  },
]
