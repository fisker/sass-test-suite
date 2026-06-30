// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/prop_name_interpolation_after_hyphen.hrx

export default [
  {
    name: 'input.scss',
    data: 'a { -#{"foo"}-bar: b; }\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  -foo-bar: b;\n}\n',
  },
]
