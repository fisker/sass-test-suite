// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/13_back_references.hrx

export default [
  {
    name: 'input.scss',
    data: 'hey, ho {\n  & > boo, foo &.goo {\n    bloo: bloo;\n  }\n  blah: blah;\n}',
  },
  {
    name: 'output.css',
    data: 'hey > boo, foo hey.goo, ho > boo, foo ho.goo {\n  bloo: bloo;\n}\nhey, ho {\n  blah: blah;\n}\n',
  },
]
