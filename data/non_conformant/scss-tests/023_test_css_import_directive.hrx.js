// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/023_test_css_import_directive.hrx

export default [
  {
    name: 'input.scss',
    data: '@import url(foo.css);',
  },
  {
    name: 'output.css',
    data: '@import url(foo.css);\n',
  },
]
