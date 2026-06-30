// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/185_test_keyword_args_in_functions.hrx

export default [
  {
    name: 'input.scss',
    data: '.keyed { color: rgba($color: #a7c, $alpha: 0.4) }\n',
  },
  {
    name: 'output.css',
    data: '.keyed {\n  color: rgba(170, 119, 204, 0.4);\n}\n',
  },
]
