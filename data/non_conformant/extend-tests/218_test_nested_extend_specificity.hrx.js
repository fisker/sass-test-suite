// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/218_test_nested_extend_specificity.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo {a: b}\n\na {\n:b {@extend %foo}\n:b:c {@extend %foo}\n}\n',
  },
  {
    name: 'output.css',
    data: 'a :b:c, a :b {\n  a: b;\n}\n',
  },
]
