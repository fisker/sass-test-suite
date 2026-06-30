export default [
  {
    name: 'options.yml',
    data: '---\n:precision: 4\n',
  },
  {
    name: 'input.scss',
    data: '@use "sass:math";\ntest {\r\n  foo: 0.4999 math.round(0.4999);\r\n  bar: 0.49999 math.round(0.49999);\r\n  baz: 0.499999 math.round(0.499999);\r\n}',
  },
  {
    name: 'output.css',
    data: 'test {\n  foo: 0.4999 0;\n  bar: 0.49999 0;\n  baz: 0.499999 0;\n}\n',
  },
]
