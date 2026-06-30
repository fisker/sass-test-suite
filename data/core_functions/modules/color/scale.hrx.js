// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/scale.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.scale(#abcdef, $red: 10%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(179.4, 205, 239);\n}\n',
  },
]
