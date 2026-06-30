// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/invert/named.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.invert($color: turquoise, $weight: 10%, $space: oklch)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(72.3071483527, 202.5503969316, 158.9647817173);\n}\n',
  },
]
