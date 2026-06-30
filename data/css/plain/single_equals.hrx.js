// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/single_equals.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: 'a {\n  single-equals: alpha(opacity=65);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  single-equals: alpha(opacity=65);\n}\n',
  },
]
