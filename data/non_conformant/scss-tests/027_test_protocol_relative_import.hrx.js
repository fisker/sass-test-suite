// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/027_test_protocol_relative_import.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "//fonts.googleapis.com/css?family=Droid+Sans";',
  },
  {
    name: 'output.css',
    data: '@import "//fonts.googleapis.com/css?family=Droid+Sans";\n',
  },
]
