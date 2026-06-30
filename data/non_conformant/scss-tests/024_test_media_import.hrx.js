// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/024_test_media_import.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "./fonts.sass" all;',
  },
  {
    name: 'output.css',
    data: '@import "./fonts.sass" all;\n',
  },
]
