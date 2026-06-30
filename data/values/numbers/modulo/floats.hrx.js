// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/modulo/floats.hrx

export default [
  {
    name: 'positive_positive/input.scss',
    data: 'a {\n  b: 1.2 % 4.7;\n}\n',
  },
  {
    name: 'positive_positive/output.css',
    data: 'a {\n  b: 1.2;\n}\n',
  },
  {
    name: 'positive_negative/input.scss',
    data: 'a {\n  b: 1.2 % -4.7;\n}\n',
  },
  {
    name: 'positive_negative/output.css',
    data: 'a {\n  b: -3.5;\n}\n',
  },
  {
    name: 'negative_positive/input.scss',
    data: 'a {\n  b: -1.2 % 4.7;\n}\n',
  },
  {
    name: 'negative_positive/output.css',
    data: 'a {\n  b: 3.5;\n}\n',
  },
  {
    name: 'negative_negative/input.scss',
    data: 'a {\n  b: -1.2 % -4.7;\n}\n',
  },
  {
    name: 'negative_negative/output.css',
    data: 'a {\n  b: -1.2;\n}\n',
  },
  {
    name: 'larger/positive_positive/input.scss',
    data: 'a {\n  b: 6.3 % 2.4;\n}\n',
  },
  {
    name: 'larger/positive_positive/output.css',
    data: 'a {\n  b: 1.5;\n}\n',
  },
  {
    name: 'larger/positive_negative/input.scss',
    data: 'a {\n  b: 6.3 % -2.4;\n}',
  },
  {
    name: 'larger/positive_negative/output.css',
    data: 'a {\n  b: -0.9;\n}\n',
  },
  {
    name: 'larger/negative_positive/input.scss',
    data: 'a {\n  b: -6.3 % 2.4;\n}\n',
  },
  {
    name: 'larger/negative_positive/output.css',
    data: 'a {\n  b: 0.9;\n}\n',
  },
  {
    name: 'larger/negative_negative/input.scss',
    data: 'a {\n  b: -6.3 % -2.4;\n}\n',
  },
  {
    name: 'larger/negative_negative/output.css',
    data: 'a {\n  b: -1.5;\n}\n',
  },
]
