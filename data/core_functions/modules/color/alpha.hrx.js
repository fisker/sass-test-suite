// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/alpha.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.alpha(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
]
