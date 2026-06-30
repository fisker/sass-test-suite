export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a: configured));\n',
  },
  {
    name: '_other.scss',
    data: '@use "sass:meta";\n$before-declaration: meta.variable-exists(a);\n$a: original !default;\nb {\n  before-declaration: $before-declaration;\n  after-declaration: meta.variable-exists(a);\n}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  before-declaration: false;\n  after-declaration: true;\n}\n',
  },
]
