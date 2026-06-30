export default [
  {
    name: 'and_descendant/distinct/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c > .d", ".e .f")}\n',
  },
  {
    name: 'and_descendant/distinct/output.css',
    data: 'a {\n  b: .e .c > .d.f;\n}\n',
  },
  {
    name: 'and_descendant/identical/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c > .s1", ".c .s2")}\n',
  },
  {
    name: 'and_descendant/identical/output.css',
    data: 'a {\n  b: .c > .s1.s2;\n}\n',
  },
  {
    name: 'and_descendant/superselector/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.s1-1 > .s1-2", ".c .s2")}\n',
  },
  {
    name: 'and_descendant/superselector/output.css',
    data: 'a {\n  b: .c.s1-1 > .s1-2.s2;\n}\n',
  },
  {
    name: 'and_descendant/overlap/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.s1-1 > .s1-2", ".c.s2-1 .s2-2")}\n',
  },
  {
    name: 'and_descendant/overlap/output.css',
    data: 'a {\n  b: .c.s2-1 .c.s1-1 > .s1-2.s2-2;\n}\n',
  },
  {
    name: 'and_child/distinct/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c > .d", ".e > .f")}\n',
  },
  {
    name: 'and_child/distinct/output.css',
    data: 'a {\n  b: .c.e > .d.f;\n}\n',
  },
  {
    name: 'and_child/superselector/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.s1-1 > .s1-2", ".c > .s2")}\n',
  },
  {
    name: 'and_child/superselector/output.css',
    data: 'a {\n  b: .c.s1-1 > .s1-2.s2;\n}\n',
  },
  {
    name: 'and_child/overlap/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.s1-1 > .s1-2", ".c.s2-1 > .s2-2")}\n',
  },
  {
    name: 'and_child/overlap/output.css',
    data: 'a {\n  b: .c.s1-1.s2-1 > .s1-2.s2-2;\n}\n',
  },
  {
    name: 'and_child/conflict/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("#s1-1 > .s1-2", "#s2-1 > .s2-2"))}\n',
  },
  {
    name: 'and_child/conflict/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c > .s1", ".c ~ .s2")}\n',
  },
  {
    name: 'and_sibling/output.css',
    data: 'a {\n  b: .c > .c ~ .s1.s2;\n}\n',
  },
  {
    name: 'and_next_sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c > .s1", ".c + .s2")}\n',
  },
  {
    name: 'and_next_sibling/output.css',
    data: 'a {\n  b: .c > .c + .s1.s2;\n}\n',
  },
]
