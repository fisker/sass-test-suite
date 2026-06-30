export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a: configured a);\n',
  },
  {
    name: '_other.scss',
    data: '$a: original a !default;\n$b: original b !default;\n\nc {\n  a: $a;\n  b: $b;\n}\n',
  },
  {
    name: 'output.css',
    data: 'c {\n  a: configured a;\n  b: original b;\n}\n',
  },
]
