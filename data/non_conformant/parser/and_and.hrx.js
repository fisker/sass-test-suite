// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/and_and.hrx

export default [
  {
    name: 'input.scss',
    data: '.and-and {\n  value: true && false;\n}\n',
  },
  {
    name: 'output.css',
    data: '.and-and {\n  value: true .and-and .and-and false;\n}\n',
  },
  {
    name: 'warning',
    data: 'WARNING: In Sass, "&&" means two copies of the parent selector. You probably want to use "and" instead.\n\n  ,\n2 |   value: true && false;\n  |               ^^\n  \'\n    input.scss 2:15  root stylesheet\n',
  },
]
