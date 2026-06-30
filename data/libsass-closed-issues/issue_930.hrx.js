export default [
  {
    name: 'input.scss',
    data: ".foo {\n  &.bar {\n    color: #F00;\n  }\n}\n\n$class: 'baz';\n.foo {\n  &.#{$class} {\n    color: #F00;\n  }\n}\n\n$n: 1;\n.foo {\n  &:nth-child(#{$n}) {\n    color: #F00;\n  }\n}\n",
  },
  {
    name: 'output.css',
    data: '.foo.bar {\n  color: #F00;\n}\n\n.foo.baz {\n  color: #F00;\n}\n\n.foo:nth-child(1) {\n  color: #F00;\n}\n',
  },
]
