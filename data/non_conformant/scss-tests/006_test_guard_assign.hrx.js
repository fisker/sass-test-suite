// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/006_test_guard_assign.hrx

export default [
  {
    name: 'input.scss',
    data: '$var: 1;\n$var: 2 !default;\n\nfoo {a: $var}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 1;\n}\n',
  },
]
