// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/10_classes_and_ids.hrx

export default [
  {
    name: 'input.scss',
    data: 'a + b, .class {\n  blah: blah;\n  bleh: bleh;\n  d #id, f ~ g.other + h, > i#grar {\n    bloo: bloo;\n    blee: blee;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'a + b, .class {\n  blah: blah;\n  bleh: bleh;\n}\na + b d #id, a + b f ~ g.other + h, a + b > i#grar, .class d #id, .class f ~ g.other + h, .class > i#grar {\n  bloo: bloo;\n  blee: blee;\n}\n',
  },
]
