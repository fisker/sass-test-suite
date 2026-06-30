// https://github.com/sass/sass-spec/blob/HEAD/spec/values/identifiers/if.hrx

export default [
  {
    name: 'input.scss',
    data: '// Regression test for sass/dart-sass#1405.\na {b: if}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: if;\n}\n',
  },
]
