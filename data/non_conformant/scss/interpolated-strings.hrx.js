export default [
  {
    name: 'input.scss',
    data: '$x: ecks;\n$y: why;\n\ndiv {\n  blah: "hey #{$x} ho";\n  blee: hey#{$y}ho;\n  bluh: "foo #{$x}";\n  bleg: foo#{"hey"}bar;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: "hey ecks ho";\n  blee: heywhyho;\n  bluh: "foo ecks";\n  bleg: fooheybar;\n}\n',
  },
]
