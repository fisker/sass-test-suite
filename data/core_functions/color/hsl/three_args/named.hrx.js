// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/three_args/named.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: hsl($hue: 0, $saturation: 100%, $lightness: 50%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
]
