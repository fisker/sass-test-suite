export default [
  {
    name: 'README.md',
    data: "Given two compound selectors Q and R without pseudo-elements such that Q's\nsimple selectors are a subset of R's, Q is always a superselector of R. This is\nbecause additional simple selectors can only ever eliminate possible matches,\nnot add new ones.\n\nThe only exception is pseudo-ELEMENTS, which change the target of the selector.\nA Q and R's pseudo-elements must match in order for either to be a superselector\nof the other.\n",
  },
  {
    name: 'same_order/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "c.d")}\n',
  },
  {
    name: 'same_order/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'different_order/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c.e", "c:d.e")}\n',
  },
  {
    name: 'different_order/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c.d", "c")}\n',
  },
  {
    name: 'superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/present/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::d", "c::d")}\n',
  },
  {
    name: 'pseudo_element/present/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'pseudo_element/absent/in_1/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "c::d")}\n',
  },
  {
    name: 'pseudo_element/absent/in_1/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/absent/in_2/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c::d", "c")}\n',
  },
  {
    name: 'pseudo_element/absent/in_2/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/subset/before/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(".c::d", ".c.e::d")}\n',
  },
  {
    name: 'pseudo_element/subset/before/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'pseudo_element/subset/after/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::d:c", "::d:c:e")}\n',
  },
  {
    name: 'pseudo_element/subset/after/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'pseudo_element/superset/before/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(".c.e::d", ".c::d")}\n',
  },
  {
    name: 'pseudo_element/superset/before/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/superset/after/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::d:c:e", "::d:c")}\n',
  },
  {
    name: 'pseudo_element/superset/after/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/same_order/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::d:e", "::d:e")}\n',
  },
  {
    name: 'pseudo_element/same_order/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'pseudo_element/different_order/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":e::d", "::d:e")}\n',
  },
  {
    name: 'pseudo_element/different_order/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/class_syntax/before/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "c:before")}\n',
  },
  {
    name: 'pseudo_element/class_syntax/before/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/class_syntax/after/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "c:after")}\n',
  },
  {
    name: 'pseudo_element/class_syntax/after/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/class_syntax/first_line/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "c:first-line")}\n',
  },
  {
    name: 'pseudo_element/class_syntax/first_line/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'pseudo_element/class_syntax/first_letter/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "c:first-letter")}\n',
  },
  {
    name: 'pseudo_element/class_syntax/first_letter/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
