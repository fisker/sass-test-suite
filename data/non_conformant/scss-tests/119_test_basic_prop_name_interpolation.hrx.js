// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/119_test_basic_prop_name_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {bar#{"baz" + "bang"}: blip}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  barbazbang: blip;\n}\n',
  },
]
