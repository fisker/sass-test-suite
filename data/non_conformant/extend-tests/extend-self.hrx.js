// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/extend-self.hrx

export default [
  {
    name: 'input.scss',
    data: "// This shouldn't change the selector.\n.c, .a .b .c, .a .c .b {x: y; @extend .c}\n",
  },
  {
    name: 'output.css',
    data: '.c, .a .b .c, .a .c .b {\n  x: y;\n}\n',
  },
]
