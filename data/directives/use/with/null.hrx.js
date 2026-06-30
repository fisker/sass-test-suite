// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/with/null.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a: null);\n',
  },
  {
    name: '_other.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: original;\n}\n',
  },
]
