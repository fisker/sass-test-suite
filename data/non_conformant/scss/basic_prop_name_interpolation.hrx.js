// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/basic_prop_name_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {bar#{1 + 2}: blip}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar3: blip;\n}\n',
  },
]
