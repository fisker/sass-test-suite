// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/05_empty_levels.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  span {\n    color: red;\n    background: blue;\n  }\n}\n\ndiv {\n  color: gray;\n  empty {\n    span {\n      color: red;\n      background: blue;\n    }\n  }\n}\n\nempty1 {\n  empty2 {\n    div {\n      blah: blah;\n    }\n  }\n}\n\nempty1 {\n  empty2 {\n    div {\n      bloo: blee;\n      empty3 {\n        span {\n          blah: blah;\n          blah: blah;\n        }\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'div span {\n  color: red;\n  background: blue;\n}\n\ndiv {\n  color: gray;\n}\ndiv empty span {\n  color: red;\n  background: blue;\n}\n\nempty1 empty2 div {\n  blah: blah;\n}\n\nempty1 empty2 div {\n  bloo: blee;\n}\nempty1 empty2 div empty3 span {\n  blah: blah;\n  blah: blah;\n}\n',
  },
]
