// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/with/used_in_input.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a: configured);\nb {c: other.$a}\n',
  },
  {
    name: '_other.scss',
    data: '$a: original !default;\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
