// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/nest/list.hrx

export default [
  {
    name: 'list/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", "e")}\n',
  },
  {
    name: 'list/initial/output.css',
    data: 'a {\n  b: c e, d e;\n}\n',
  },
  {
    name: 'list/final/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "d, e")}\n',
  },
  {
    name: 'list/final/output.css',
    data: 'a {\n  b: c d, c e;\n}\n',
  },
  {
    name: 'list/many/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", "e, f", "g, h")}\n',
  },
  {
    name: 'list/many/output.css',
    data: 'a {\n  b: c e g, c e h, c f g, c f h, d e g, d e h, d f g, d f h;\n}\n',
  },
  {
    name: 'list/parent/alone/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", "&")}\n',
  },
  {
    name: 'list/parent/alone/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'list/parent/compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", "&.e")}\n',
  },
  {
    name: 'list/parent/compound/output.css',
    data: 'a {\n  b: c.e, d.e;\n}\n',
  },
  {
    name: 'list/parent/suffix/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", "&e")}\n',
  },
  {
    name: 'list/parent/suffix/output.css',
    data: 'a {\n  b: ce, de;\n}\n',
  },
  {
    name: 'list/parent/complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", "e &.f")}\n',
  },
  {
    name: 'list/parent/complex/output.css',
    data: 'a {\n  b: e c.f, e d.f;\n}\n',
  },
  {
    name: 'list/parent/selector_pseudo/is/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", ":is(&)")}\n',
  },
  {
    name: 'list/parent/selector_pseudo/is/output.css',
    data: 'a {\n  b: :is(c, d);\n}\n',
  },
  {
    name: 'list/parent/selector_pseudo/where/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", ":where(&)")}\n',
  },
  {
    name: 'list/parent/selector_pseudo/where/output.css',
    data: 'a {\n  b: :where(c, d);\n}\n',
  },
  {
    name: 'list/parent/selector_pseudo/matches/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", ":matches(&)")}\n',
  },
  {
    name: 'list/parent/selector_pseudo/matches/output.css',
    data: 'a {\n  b: :matches(c, d);\n}\n',
  },
  {
    name: 'list/parent/multiple/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", "&.e &.f")}\n',
  },
  {
    name: 'list/parent/multiple/output.css',
    data: 'a {\n  b: c.e c.f, c.e d.f, d.e c.f, d.e d.f;\n}\n',
  },
  {
    name: 'list/parent/in_one_complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c, d", "&.e, f")}\n',
  },
  {
    name: 'list/parent/in_one_complex/output.css',
    data: 'a {\n  b: c.e, c f, d.e, d f;\n}\n',
  },
]
