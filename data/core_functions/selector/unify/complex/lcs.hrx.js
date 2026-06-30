export default [
  {
    name: 'README.md',
    data: 'Test the logic for determining the longest common subsequence of parent\nselectors that should be unified. "Common" in this case includes superselectors,\nwhere the most specific selector will be chosen as the canonical selector.\n',
  },
  {
    name: 'two_versus_one/input.scss',
    data: '@use "sass:selector";\n// The longest common subsequence is `.c .d`, which is longer than `.e`, so `.c\n// .d` gets unified while `.e` gets duplicated.\na {b: selector.unify(".c .d .e .s1", ".e .c .d .s2")}\n',
  },
  {
    name: 'two_versus_one/output.css',
    data: 'a {\n  b: .e .c .d .e .s1.s2;\n}\n',
  },
  {
    name: 'three_versus_two/input.scss',
    data: '@use "sass:selector";\n// The longest common subsequence is `.c .d .e`, which is longer than `.f g`, so\n// `.c .d .e` gets unified while `.f .g` gets duplicated.\na {b: selector.unify(".c .d .e .f .g .s1", ".f .g .c .d .e .s2")}\n',
  },
  {
    name: 'three_versus_two/output.css',
    data: 'a {\n  b: .f .g .c .d .e .f .g .s1.s2;\n}\n',
  },
  {
    name: 'non_contiguous/same_positions/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".s1-1 .c .d .s1-2 .e .s1-3", ".s2-1 .c .d .s2-2 .e .s2-3")}\n',
  },
  {
    name: 'non_contiguous/same_positions/output.css',
    data: 'a {\n  b: .s1-1 .s2-1 .c .d .s1-2 .s2-2 .e .s1-3.s2-3, .s2-1 .s1-1 .c .d .s1-2 .s2-2 .e .s1-3.s2-3, .s1-1 .s2-1 .c .d .s2-2 .s1-2 .e .s1-3.s2-3, .s2-1 .s1-1 .c .d .s2-2 .s1-2 .e .s1-3.s2-3;\n}\n',
  },
  {
    name: 'non_contiguous/different_positions/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".s1-1 .c .d .s1-2 .e .s1-3", ".c .s2-1 .d .e .s2-2 .s2-3")}\n',
  },
  {
    name: 'non_contiguous/different_positions/output.css',
    data: 'a {\n  b: .s1-1 .c .s2-1 .d .s1-2 .e .s2-2 .s1-3.s2-3;\n}\n',
  },
]
