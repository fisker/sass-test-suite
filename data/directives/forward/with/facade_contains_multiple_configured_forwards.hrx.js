export default [
  {
    name: 'input.scss',
    data: '// Regression test for sass/dart-sass/#1343.\n@use "midstream" with (\n  $a: twice-configured a,\n  $b: twice-configured b,\n  $c: configured c,\n);\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "left" with ($a: configured a !default);\n@forward "right" with ($b: configured b !default);\n\n$c: original c !default;\nc {c: $c}\n',
  },
  {
    name: '_left.scss',
    data: '$a: original a !default;\na {a: $a}\n',
  },
  {
    name: '_right.scss',
    data: '$b: original b !default;\nb {b: $b}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  a: twice-configured a;\n}\n\nb {\n  b: twice-configured b;\n}\n\nc {\n  c: configured c;\n}\n',
  },
]
