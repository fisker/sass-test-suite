// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/weird_added_space.hrx

export default [
  {
    name: 'input.scss',
    data: '$value : bip;\n\nfoo {\n  bar: -moz-#{$value};\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: -moz-bip;\n}\n',
  },
]
