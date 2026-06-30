// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/172_test_parsing_decimals_followed_by_comments_doesnt_take_forever.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  padding: 4.21052631578947% 4.21052631578947% 5.631578947368421% /**/\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  padding: 4.2105263158% 4.2105263158% 5.6315789474%;\n}\n',
  },
]
