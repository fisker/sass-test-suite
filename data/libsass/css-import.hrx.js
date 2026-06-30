// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/css-import.hrx

export default [
  {
    name: 'input.scss',
    data: '@import \'foo.css\', "bar.css";\n\ndiv {\n  color: red;\n}',
  },
  {
    name: 'output.css',
    data: '@import \'foo.css\';\n@import "bar.css";\ndiv {\n  color: red;\n}\n',
  },
]
