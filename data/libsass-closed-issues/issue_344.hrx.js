export default [
  {
    name: 'input.scss',
    data: '$variable: 1;\n\n$foo: #{$variable}px;\n$bar: #{1}px;\n$baz: "1px";\n\ndiv {\n  top: -$foo;\n  top: -$bar;\n  top: -$baz;\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  top: -1px;\n  top: -1px;\n  top: -"1px";\n}\n',
  },
]
