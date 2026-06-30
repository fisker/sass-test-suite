// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/guard_assign.hrx

export default [
  {
    name: 'input.scss',
    data: '$var: 2 !default;\n\nfoo {a: $var}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 2;\n}\n',
  },
]
