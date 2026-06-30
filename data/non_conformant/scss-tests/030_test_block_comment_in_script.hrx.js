// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/030_test_block_comment_in_script.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {a: 1 + /* flang */ bar}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 1bar;\n}\n',
  },
]
