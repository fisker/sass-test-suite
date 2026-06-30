export default [
  {
    name: 'positive_positive/input.scss',
    data: 'a {\n  b: 1 % 4;\n}\n',
  },
  {
    name: 'positive_positive/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'positive_negative/input.scss',
    data: 'a {\n  b: 1 % -4;\n}',
  },
  {
    name: 'positive_negative/output.css',
    data: 'a {\n  b: -3;\n}\n',
  },
  {
    name: 'negative_positive/input.scss',
    data: 'a {\n  b: -1 % 4;\n}\n',
  },
  {
    name: 'negative_positive/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'negative_negative/input.scss',
    data: 'a {\n  b: -1 % -4;\n}\n',
  },
  {
    name: 'negative_negative/output.css',
    data: 'a {\n  b: -1;\n}\n',
  },
  {
    name: 'larger/positive_positive/input.scss',
    data: 'a {\n  b: 6 % 5;\n}\n',
  },
  {
    name: 'larger/positive_positive/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'larger/positive_negative/input.scss',
    data: 'a {\n  b: 6 % -5;\n}',
  },
  {
    name: 'larger/positive_negative/output.css',
    data: 'a {\n  b: -4;\n}\n',
  },
  {
    name: 'larger/negative_positive/input.scss',
    data: 'a {\n  b: -7 % 5;\n}\n',
  },
  {
    name: 'larger/negative_positive/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'larger/negative_negative/input.scss',
    data: 'a {\n  b: -7 % -5;\n}\n',
  },
  {
    name: 'larger/negative_negative/output.css',
    data: 'a {\n  b: -2;\n}\n',
  },
]
