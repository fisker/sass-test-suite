// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass/imported.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "imported.sass";\n',
  },
  {
    name: 'imported.sass',
    data: 'div\n\ta\n\t\tcolor: red\n\tli\n\t\tcolor: green',
  },
  {
    name: 'output.css',
    data: 'div a {\n  color: red;\n}\ndiv li {\n  color: green;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported.sass";\n  |         ^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
]
