export default [
  {
    name: 'input.scss',
    data: '$foo: bar;\na {\n  foo: url($foo);\n  foo: url(#{$foo});\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  foo: url(bar);\n  foo: url(bar);\n}\n',
  },
]
