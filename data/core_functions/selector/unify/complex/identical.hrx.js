// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/unify/complex/identical.hrx

export default [
  {
    name: 'two_level/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c .s1", ".c .s2")}\n',
  },
  {
    name: 'two_level/output.css',
    data: 'a {\n  b: .c .s1.s2;\n}\n',
  },
  {
    name: 'three_level/outer/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c .s1-1 .s1-2", ".c .s2-1 .s2-2")}\n',
  },
  {
    name: 'three_level/outer/output.css',
    data: 'a {\n  b: .c .s1-1 .s2-1 .s1-2.s2-2, .c .s2-1 .s1-1 .s1-2.s2-2;\n}\n',
  },
  {
    name: 'three_level/inner/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".s1-1 .d .s1-2", ".s2-1 .d .s2-2")}\n',
  },
  {
    name: 'three_level/inner/output.css',
    data: 'a {\n  b: .s1-1 .s2-1 .d .s1-2.s2-2, .s2-1 .s1-1 .d .s1-2.s2-2;\n}\n',
  },
]
