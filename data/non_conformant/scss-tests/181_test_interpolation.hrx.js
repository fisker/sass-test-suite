export default [
  {
    name: 'input.scss',
    data: '$bar : "#foo";\nul li#{$bar} a span.label { foo: bar; }\n',
  },
  {
    name: 'output.css',
    data: 'ul li#foo a span.label {\n  foo: bar;\n}\n',
  },
]
