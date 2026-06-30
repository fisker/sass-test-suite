export default [
  {
    name: 'input.scss',
    data: '$a: configured;\n@use "other" with ($a: $a);\n',
  },
  {
    name: '_other.scss',
    data: '$a: original a !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
