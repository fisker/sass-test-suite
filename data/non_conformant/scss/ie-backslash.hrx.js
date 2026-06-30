// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/ie-backslash.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\ndiv {\n  background-color: color.adjust(red, $lightness: -10%) \\9;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  background-color: #cc0000 \\9 ;\n}\n',
  },
]
