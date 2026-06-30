// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/named.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut($color: pink, $space: rgb, $method: local-minde)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: pink;\n}\n',
  },
]
