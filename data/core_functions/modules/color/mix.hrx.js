// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/mix.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.mix(#abcdef, #daddee)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(194.5, 213, 238.5);\n}\n',
  },
]
