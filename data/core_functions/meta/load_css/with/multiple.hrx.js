export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (\n  a: configured a,\n  b: configured b,\n  c: configured c\n));\n',
  },
  {
    name: '_other.scss',
    data: '$a: original a !default;\n$b: original b !default;\n$c: original c !default;\n\nd {\n  a: $a;\n  b: $b;\n  c: $c;\n}\n',
  },
  {
    name: 'output.css',
    data: 'd {\n  a: configured a;\n  b: configured b;\n  c: configured c;\n}\n',
  },
]
