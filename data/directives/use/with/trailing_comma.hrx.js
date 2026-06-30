export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a: configured,);\n',
  },
  {
    name: '_other.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
