// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/nested-compound-unification.hrx

export default [
  {
    name: 'input.scss',
    data: '// Make sure compound unification properly handles weaving together parent\n// selectors.\n.a .b {@extend .e}\n.c .d {@extend .f}\n.e.f {x: y}\n',
  },
  {
    name: 'output.css',
    data: '.e.f, .a .f.b, .c .e.d, .a .c .b.d, .c .a .b.d {\n  x: y;\n}\n',
  },
]
