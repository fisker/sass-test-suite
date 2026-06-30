// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/quotes-in-interpolated-strings.hrx

export default [
  {
    name: 'input.scss',
    data: '$bar: "bar";\n$foobar: "foo#{$bar}";\n#{$bar} {\n  #{$bar}: #{$bar};\n  #{$bar}: $bar;\n}\nfoobar {\n  #{$foobar}: #{$foobar};\n  #{$foobar}: $foobar;\n}',
  },
  {
    name: 'output.css',
    data: 'bar {\n  bar: bar;\n  bar: "bar";\n}\n\nfoobar {\n  foobar: foobar;\n  foobar: "foobar";\n}\n',
  },
]
