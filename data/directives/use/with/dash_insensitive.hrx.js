// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/with/dash_insensitive.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a_b: configured);\n',
  },
  {
    name: '_other.scss',
    data: '$a-b: original !default;\nb {c: $a-b}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
