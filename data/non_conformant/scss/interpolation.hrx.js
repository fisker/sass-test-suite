// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '$bar : "#foo";\n\n\n\nul li#{$bar} a span.label { foo: bar; }\n',
  },
  {
    name: 'output.css',
    data: 'ul li#foo a span.label {\n  foo: bar;\n}\n',
  },
]
