// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/extend/placeholder/simple.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo {color: blue}\r\n%bar {color: red}\r\n.baz {\r\n  @extend %foo;\r\n  color: green;\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: '.baz {\n  color: blue;\n}\n\n.baz {\n  color: green;\n}\n',
  },
]
