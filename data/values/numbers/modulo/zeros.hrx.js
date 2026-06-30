export default [
  {
    name: 'positive_positive/input.scss',
    data: 'a {\n  b: +0 % +1;\n}\n',
  },
  {
    name: 'positive_positive/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'positive_negative/input.scss',
    data: 'a {\n  b: +0 % -1;\n}',
  },
  {
    name: 'positive_negative/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'negative_positive/input.scss',
    data: 'a {\n  b: -0 % 1;\n}\n',
  },
  {
    name: 'negative_positive/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'negative_negative/input.scss',
    data: 'a {\n  b: -0 % -1;\n}\n',
  },
  {
    name: 'negative_negative/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'zero_divider/input.scss',
    data: '@use "sass:meta";\n\na {\n  b: meta.inspect(1 % 0);\n}\n',
  },
  {
    name: 'zero_divider/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
]
