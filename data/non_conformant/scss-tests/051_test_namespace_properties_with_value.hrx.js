export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: baz {\n    bip: bop;\n    bing: bop; }}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n  bar-bip: bop;\n  bar-bing: bop;\n}\n',
  },
]
