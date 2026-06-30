// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/208_test_optional_extend_succeeds_when_extension_fails.hrx

export default [
  {
    name: 'input.scss',
    data: 'a.bar {a: b}\nb.foo {@extend .bar !optional}\n',
  },
  {
    name: 'output.css',
    data: 'a.bar {\n  a: b;\n}\n',
  },
]
