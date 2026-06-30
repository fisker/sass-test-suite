// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/028_test_import_with_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n$family: string.unquote("Droid+Sans");\n@import url("http://fonts.googleapis.com/css?family=#{$family}");\n',
  },
  {
    name: 'output.css',
    data: '@import url("http://fonts.googleapis.com/css?family=Droid+Sans");\n',
  },
]
