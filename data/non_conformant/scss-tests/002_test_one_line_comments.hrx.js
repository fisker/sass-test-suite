// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/002_test_one_line_comments.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo bar[val="//"] {\n  baz: bang; //}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo bar[val="//"] {\n  baz: bang;\n}\n',
  },
]
