export default [
  {
    name: 'input.scss',
    data: 'foo {\n    bar: "x\\79";\n    baz: "#{x}\\79";\n    bar: "x\\a";\n    baz: "#{x}\\a";\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: "xy";\n  baz: "xy";\n  bar: "x\\a";\n  baz: "x\\a";\n}\n',
  },
]
