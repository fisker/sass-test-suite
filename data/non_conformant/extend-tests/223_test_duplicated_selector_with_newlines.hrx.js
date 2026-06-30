// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/223_test_duplicated_selector_with_newlines.hrx

export default [
  {
    name: 'input.scss',
    data: '.example-1-1,\n.example-1-2,\n.example-1-3 {\na: b;\n}\n\n.my-page-1 .my-module-1-1 {@extend .example-1-2}\n',
  },
  {
    name: 'output.css',
    data: '.example-1-1,\n.example-1-2,\n.my-page-1 .my-module-1-1,\n.example-1-3 {\n  a: b;\n}\n',
  },
]
