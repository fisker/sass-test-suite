// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/change.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.change(#abcdef, $red: 10)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #0acdef;\n}\n',
  },
]
