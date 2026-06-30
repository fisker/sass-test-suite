export default [
  {
    name: 'README.md',
    data: "These tests verify that, if one selector is a superselector of the other, the\nsubselector is returned (since it's more specific).\n",
  },
  {
    name: 'whole_selector/selector1/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "d c.e")}\n',
  },
  {
    name: 'whole_selector/selector1/output.css',
    data: 'a {\n  b: d c.e;\n}\n',
  },
  {
    name: 'whole_selector/selector2/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("d c.e", "c")}\n',
  },
  {
    name: 'whole_selector/selector2/output.css',
    data: 'a {\n  b: d c.e;\n}\n',
  },
  {
    name: 'parent/selector1/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c d", "c.e .f")}\n',
  },
  {
    name: 'parent/selector1/output.css',
    data: 'a {\n  b: c.e d.f;\n}\n',
  },
  {
    name: 'parent/selector2/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c.e .f", "c d")}\n',
  },
  {
    name: 'parent/selector2/output.css',
    data: 'a {\n  b: c.e d.f;\n}\n',
  },
]
