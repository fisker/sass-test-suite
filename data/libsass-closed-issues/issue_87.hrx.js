export default [
  {
    name: 'input.scss',
    data: '$bar: "bar";\r\n$foobar: "foo#{$bar}";\r\n#{$bar} {\r\n  #{$bar}: #{$bar};\r\n  #{$bar}: $bar;\r\n}\r\n#{$foobar} {\r\n  #{$foobar}: #{$foobar};\r\n  #{$foobar}: $foobar;\r\n}',
  },
  {
    name: 'output.css',
    data: 'bar {\n  bar: bar;\n  bar: "bar";\n}\n\nfoobar {\n  foobar: foobar;\n  foobar: "foobar";\n}\n',
  },
]
