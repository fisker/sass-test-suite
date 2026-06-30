export default [
  {
    name: 'and_descendant/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c + .s1", ".c .s2")}\n',
  },
  {
    name: 'and_descendant/output.css',
    data: 'a {\n  b: .c .c + .s1.s2;\n}\n',
  },
  {
    name: 'and_child/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c + .s1", ".c > .s2")}\n',
  },
  {
    name: 'and_child/output.css',
    data: 'a {\n  b: .c > .c + .s1.s2;\n}\n',
  },
  {
    name: 'and_sibling/distinct/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c + .d", ".e ~ .f")}\n',
  },
  {
    name: 'and_sibling/distinct/output.css',
    data: 'a {\n  b: .e ~ .c + .d.f, .e.c + .d.f;\n}\n',
  },
  {
    name: 'and_sibling/identical/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c + .s1", ".c ~ .s2")}\n',
  },
  {
    name: 'and_sibling/identical/output.css',
    data: 'a {\n  b: .c + .s1.s2;\n}\n',
  },
  {
    name: 'and_sibling/superselector/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.s1-1 + .s1-2", ".c ~ .s2")}\n',
  },
  {
    name: 'and_sibling/superselector/output.css',
    data: 'a {\n  b: .c.s1-1 + .s1-2.s2;\n}\n',
  },
  {
    name: 'and_sibling/overlap/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.s1-1 + .s1-2", ".c.s2-1 ~ .s2-2")}\n',
  },
  {
    name: 'and_sibling/overlap/output.css',
    data: 'a {\n  b: .c.s2-1 ~ .c.s1-1 + .s1-2.s2-2, .c.s2-1.s1-1 + .s1-2.s2-2;\n}\n',
  },
  {
    name: 'and_sibling/conflict/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("#s1-1 + .s1-2", "#s2-1 ~ .s2-2")}\n',
  },
  {
    name: 'and_sibling/conflict/output.css',
    data: 'a {\n  b: #s2-1 ~ #s1-1 + .s1-2.s2-2;\n}\n',
  },
  {
    name: 'and_next_sibling/distinct/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c + .d", ".e + .f")}\n',
  },
  {
    name: 'and_next_sibling/distinct/output.css',
    data: 'a {\n  b: .c.e + .d.f;\n}\n',
  },
  {
    name: 'and_next_sibling/superselector/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.s1-1 + .s1-2", ".c + .s2")}\n',
  },
  {
    name: 'and_next_sibling/superselector/output.css',
    data: 'a {\n  b: .c.s1-1 + .s1-2.s2;\n}\n',
  },
  {
    name: 'and_next_sibling/overlap/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.s1-1 + .s1-2", ".c.s2-1 + .s2-2")}\n',
  },
  {
    name: 'and_next_sibling/overlap/output.css',
    data: 'a {\n  b: .c.s1-1.s2-1 + .s1-2.s2-2;\n}\n',
  },
  {
    name: 'and_next_sibling/conflict/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("#s1-1 + .s1-2", "#s2-1 + .s2-2"))}\n',
  },
  {
    name: 'and_next_sibling/conflict/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
]
