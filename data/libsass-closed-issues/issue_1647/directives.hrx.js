export default [
  {
    name: 'input.scss',
    data: '@foo #{"directive"} {\n  .#{"foo"} { #{"foo-prop"}: #{"foo-val"}; }\n}\n',
  },
  {
    name: 'output.css',
    data: '@foo directive {\n  .foo {\n    foo-prop: foo-val;\n  }\n}\n',
  },
]
