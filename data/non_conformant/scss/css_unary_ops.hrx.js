export default [
  {
    name: 'input.scss',
    data: 'foo {\n  a: -0.5em;\n  b: 0.5em;\n  c: -foo(12px);\n  d: +foo(12px); }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: -0.5em;\n  b: 0.5em;\n  c: -foo(12px);\n  d: +foo(12px);\n}\n',
  },
]
