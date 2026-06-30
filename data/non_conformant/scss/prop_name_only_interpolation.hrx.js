// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/prop_name_only_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {#{"baz" + "bang"}: blip}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bazbang: blip;\n}\n',
  },
]
