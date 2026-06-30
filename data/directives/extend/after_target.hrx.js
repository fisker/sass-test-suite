// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/extend/after_target.hrx

export default [
  {
    name: 'multiple_recursive/input.scss',
    data: '// Regression test for sass/dart-sass#1109.\n.a .b {\n  c: d;\n}\n\n.a.mod1, .a.mod2 {\n  @extend .a, .b;\n}\n.a.mod3, .a.mod4 {\n  @extend .a, .b;\n}\n.a.mod5, .a.mod6 {\n  @extend .a, .b;\n}\n',
  },
  {
    name: 'multiple_recursive/output.css',
    data: '.a .b, .a .a.mod5, .a .a.mod6, .a .a.mod3, .a .a.mod4, .a .a.mod1, .a .a.mod2 {\n  c: d;\n}\n',
  },
]
