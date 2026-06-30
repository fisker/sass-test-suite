export default [
  {
    name: '1/input.scss',
    data: 'a {b: if(else: c)}\n',
  },
  {
    name: '1/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: '2/input.scss',
    data: 'a {b: if(else: c; else: d)}\n',
  },
  {
    name: '2/output.css',
    data: 'a {\n  b: c;\n}\n\n',
  },
]
