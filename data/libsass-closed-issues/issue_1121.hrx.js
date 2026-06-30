// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1121.hrx

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
