// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/selector_interpolation_at_class_begininng.hrx

export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\n.#{$zzz} { a: b; }\n',
  },
  {
    name: 'output.css',
    data: '.zzz {\n  a: b;\n}\n',
  },
]
