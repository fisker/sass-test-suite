export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\ndiv {\n  hey: a, b, c, d;\n  ho: a b c d;\n  ha: string.unquote("a, b, c, d");\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  hey: a, b, c, d;\n  ho: a b c d;\n  ha: a, b, c, d;\n}\n',
  },
]
