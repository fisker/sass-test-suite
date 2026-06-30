// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/wrapped-selector-whitespace.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\r\n  :-moz-any(a , b) {\r\n    foo: foo;\r\n  }\r\n  :foo(a , b) {\r\n    bar: bar;\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'div :-moz-any(a, b) {\n  foo: foo;\n}\ndiv :foo(a , b) {\n  bar: bar;\n}\n',
  },
]
