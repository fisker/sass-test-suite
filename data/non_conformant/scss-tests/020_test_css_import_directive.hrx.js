// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/020_test_css_import_directive.hrx

export default [
  {
    name: 'input.scss',
    data: "@import 'foo.css';",
  },
  {
    name: 'output.css',
    data: "@import 'foo.css';\n",
  },
]
