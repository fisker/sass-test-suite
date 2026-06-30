// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/171_test_loud_comment_in_compressed_mode.hrx

export default [
  {
    name: 'input.scss',
    data: '/*! foo */\n',
  },
  {
    name: 'output.css',
    data: '/*! foo */\n',
  },
]
