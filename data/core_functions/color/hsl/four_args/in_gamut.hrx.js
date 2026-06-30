// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/four_args/in_gamut.hrx

export default [
  {
    name: 'transparent/input.scss',
    data: 'a {b: hsl(180, 60%, 50%, 0)}\n',
  },
  {
    name: 'transparent/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0);\n}\n',
  },
  {
    name: 'opaque/input.scss',
    data: 'a {b: hsl(180, 60%, 50%, 1)}\n',
  },
  {
    name: 'opaque/output.css',
    data: 'a {\n  b: hsl(180, 60%, 50%);\n}\n',
  },
  {
    name: 'partial/input.scss',
    data: 'a {b: hsl(180, 60%, 50%, 0.5)}\n',
  },
  {
    name: 'partial/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0.5);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: 'a {b: hsl($hue: 180, $saturation: 60%, $lightness: 50%, $alpha: 0.4)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0.4);\n}\n',
  },
]
