export default [
  {
    name: 'input.scss',
    data: '$foo: "foo";\n$bar: "bar";\n$baz: "baz";\n/*\n * <div class="foo #{$foo}" bar="#{$bar}" baz="#{$baz}">\n */\n',
  },
  {
    name: 'output.css',
    data: '/*\n * <div class="foo foo" bar="bar" baz="baz">\n */\n',
  },
]
