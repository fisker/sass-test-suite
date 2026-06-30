// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/hyphen-interpolated.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  foo: -hux-#{2+3};\n  bar: hux-#{2+3};\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  foo: -hux-5;\n  bar: hux-5;\n}\n',
  },
]
