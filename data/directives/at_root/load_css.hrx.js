export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n\na {\n  @include meta.load-css("other");\n}\n',
  },
  {
    name: 'other.scss',
    data: '@at-root {\n  b {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a b {\n  c: d;\n}\n',
  },
]
