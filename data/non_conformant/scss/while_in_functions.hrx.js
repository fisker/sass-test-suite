export default [
  {
    name: 'input.scss',
    data: '@function test-while() {\n  $x : true;\n  @while $x {\n    @return $x\n  }\n}\n\ndiv {\n  y: test-while();\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  y: true;\n}\n',
  },
]
