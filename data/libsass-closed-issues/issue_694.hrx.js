// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_694.hrx

export default [
  {
    name: 'input.scss',
    data: '// test for libsass 694:\n// parser should be smarter about handling quoted quotes\n\n$str: \'{\' + \'"foo": "bar"\' + \'}\';\n$str2: \'"hello world"\';\n$str3: "hello world";\n.interpolation-test {\n  test: "#{$str}";\n  test: "#{$str2}";\n  test: "#{$str3}";\n}\n',
  },
  {
    name: 'output.css',
    data: '.interpolation-test {\n  test: \'{"foo": "bar"}\';\n  test: \'"hello world"\';\n  test: "hello world";\n}\n',
  },
]
