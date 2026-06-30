export default [
  {
    name: 'input.scss',
    data: '$parent: &;\n\n@if $parent {\n  foo {\n    foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '',
  },
]
