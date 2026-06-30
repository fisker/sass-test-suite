// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/unify/complex/distinct.hrx

export default [
  {
    name: 'two_level/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c .d", ".e .f")}\n',
  },
  {
    name: 'two_level/output.css',
    data: 'a {\n  b: .c .e .d.f, .e .c .d.f;\n}\n',
  },
  {
    name: 'three_level/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c .d .e", ".f .g .h")}\n',
  },
  {
    name: 'three_level/output.css',
    data: 'a {\n  b: .c .d .f .g .e.h, .f .g .c .d .e.h;\n}\n',
  },
]
