export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\nfoo {\n  quoted: string.slice("abcd", 1, 0);\n  unquoted: string.slice(abcd, 1, 0);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  quoted: "";\n}\n',
  },
]
