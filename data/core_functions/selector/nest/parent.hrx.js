// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/nest/parent.hrx

export default [
  {
    name: 'alone/first/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("&")}\n',
  },
  {
    name: 'alone/first/output.css',
    data: 'a {\n  b: &;\n}\n',
  },
  {
    name: 'alone/second/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "&")}\n',
  },
  {
    name: 'alone/second/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "&.d")}\n',
  },
  {
    name: 'compound/output.css',
    data: 'a {\n  b: c.d;\n}\n',
  },
  {
    name: 'suffix/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "&d")}\n',
  },
  {
    name: 'suffix/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'complex/simple_parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "d &.e")}\n',
  },
  {
    name: 'complex/simple_parent/output.css',
    data: 'a {\n  b: d c.e;\n}\n',
  },
  {
    name: 'complex/complex_parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c d", "e &.f")}\n',
  },
  {
    name: 'complex/complex_parent/output.css',
    data: 'a {\n  b: e c d.f;\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/is/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", ":is(&)")}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/is/output.css',
    data: 'a {\n  b: :is(c);\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/where/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", ":where(&)")}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/where/output.css',
    data: 'a {\n  b: :where(c);\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/matches/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", ":matches(&)")}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/matches/output.css',
    data: 'a {\n  b: :matches(c);\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/is/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c d", ":is(&)")}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/is/output.css',
    data: 'a {\n  b: :is(c d);\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/where/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c d", ":where(&)")}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/where/output.css',
    data: 'a {\n  b: :where(c d);\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/matches/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c d", ":matches(&)")}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/matches/output.css',
    data: 'a {\n  b: :matches(c d);\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "&.d &.e")}\n',
  },
  {
    name: 'multiple/output.css',
    data: 'a {\n  b: c.d c.e;\n}\n',
  },
  {
    name: 'in_one_complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "&.d, e")}\n',
  },
  {
    name: 'in_one_complex/output.css',
    data: 'a {\n  b: c.d, c e;\n}\n',
  },
]
