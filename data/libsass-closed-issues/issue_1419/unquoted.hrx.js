export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\nfoo {\n  foo: string.to-upper-case(ab\\63 d);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: ABCD;\n}\n',
  },
]
