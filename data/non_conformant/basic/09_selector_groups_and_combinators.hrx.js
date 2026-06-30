// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/09_selector_groups_and_combinators.hrx

export default [
  {
    name: 'input.scss',
    data: 'a + b, c {\n  blah: blah;\n  bleh: bleh;\n  d e, f ~ g + h, > i {\n    bloo: bloo;\n    blee: blee;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'a + b, c {\n  blah: blah;\n  bleh: bleh;\n}\na + b d e, a + b f ~ g + h, a + b > i, c d e, c f ~ g + h, c > i {\n  bloo: bloo;\n  blee: blee;\n}\n',
  },
]
