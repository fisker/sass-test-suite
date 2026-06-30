export default [
  {
    name: 'input.scss',
    data: "@use \"sass:string\";\n.a-#{string.quote('' + b)} {\n  c: d;\n}\n\n.a-#{'' + b} {\n  c: d;\n}",
  },
  {
    name: 'output.css',
    data: '.a-b {\n  c: d;\n}\n\n.a-b {\n  c: d;\n}\n',
  },
]
