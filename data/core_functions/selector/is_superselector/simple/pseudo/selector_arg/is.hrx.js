export default [
  {
    name: 'README.md',
    data: "Because `:is()` is extremely flexible, there are more cases where it is\ntechnically a superselector or subselector than those represented here. However,\nuniversally supporting these would require the equivalent of fully resolving the\n`:is()` declaration in the same manner as `@extend` which would add way too\nmuch implementation complexity for such a marginal edge case.\n\nIn particular, we don't require that superselectors be detected when the\nsubselector contains `:is()` and the superselector does not (even though\n`c` is semantically a superselector of `:is(c)`).\n\nMost changes here should also be reflected in `where.hrx` and `matches.hrx`.\n",
  },
  {
    name: 'simple/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c)", "c")}\n',
  },
  {
    name: 'simple/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'simple/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c)", "d")}\n',
  },
  {
    name: 'simple/unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'compound/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c.e)", "c.d.e")}\n',
  },
  {
    name: 'compound/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'compound/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c.d.e)", "c e")}\n',
  },
  {
    name: 'compound/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'complex/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c e)", "c d e")}\n',
  },
  {
    name: 'complex/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'complex/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c d e)", "c e")}\n',
  },
  {
    name: 'complex/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'list/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c d, e f, g h)", "c d, e f")}\n',
  },
  {
    name: 'list/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'list/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c d, e f)", "c d, e f, g h")}\n',
  },
  {
    name: 'list/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'both/README.md',
    data: 'We do *allow* `:is()` in the subselector, we just require there to be a\ncorresponding `:is()` in the superselector. Then we do a superselector\ncheck on those two selectors in isolation.\n',
  },
  {
    name: 'both/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c d, e f, g h)", ":is(c d.i, e j f)")}\n',
  },
  {
    name: 'both/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'both/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c d.i, e j f)", ":is(c d, e f, g h)")}\n',
  },
  {
    name: 'both/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-is(c d, e f, g h)", "c d.i, e j f")}\n',
  },
  {
    name: 'prefix/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'prefix/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-is(c d.i, e j f)", "c d, e f, g h")}\n',
  },
  {
    name: 'prefix/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'not_superselector_of/README.md',
    data: "`:is()` isn't considered a superselector of other selectors with the same\nsemantics, because in practice they match different browsers.\n",
  },
  {
    name: 'not_superselector_of/any/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c, d)", ":any(c, d)")}\n',
  },
  {
    name: 'not_superselector_of/any/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'not_superselector_of/prefixed/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":is(c, d)", ":-pfx-is(c, d)")}\n',
  },
  {
    name: 'not_superselector_of/prefixed/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
