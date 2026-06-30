// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/extend/placeholder/optional.hrx

export default [
  {
    name: 'input.scss',
    data: '.baz {\r\n  @extend %foo !optional;\r\n  color: green;\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: '.baz {\n  color: green;\n}\n',
  },
]
