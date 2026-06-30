// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/mix/mixed_spaces.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.mix(hsl(0 100% 50%), green, $method: lch)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: hsl(50.9351301875, 199.2813015981%, 19.0269267557%);\n}\n',
  },
]
