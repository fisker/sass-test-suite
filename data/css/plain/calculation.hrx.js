// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/calculation.hrx

export default [
  {
    name: 'simplified/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'simplified/plain.css',
    data: 'a {b: calc(1px)}\n',
  },
  {
    name: 'simplified/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'operation/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'operation/plain.css',
    data: 'a {b: calc(1px + 1%)}\n',
  },
  {
    name: 'operation/output.css',
    data: 'a {\n  b: calc(1px + 1%);\n}\n',
  },
  {
    name: 'parentheses/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'parentheses/plain.css',
    data: 'a {b: calc(2 * (1px + 1%))}\n',
  },
  {
    name: 'parentheses/output.css',
    data: 'a {\n  b: calc(2 * (1px + 1%));\n}\n',
  },
  {
    name: 'function/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'function/plain.css',
    data: 'a {b: calc(c())}\n',
  },
  {
    name: 'function/output.css',
    data: 'a {\n  b: calc(c());\n}\n',
  },
]
