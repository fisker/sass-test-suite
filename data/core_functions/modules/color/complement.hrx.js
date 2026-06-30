// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/complement.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.complement(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #efcdab;\n}\n',
  },
]
