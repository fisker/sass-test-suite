export default [
  {
    name: 'README.md',
    data: 'Specs for which selectors with argument lists count as "the same" when\ndetermining which simple selectors to extend. `selector-extend` doesn\'t care\nabout the semantics of particular pseudo selectors. All it looks at is whether\nthey\'re structurally equal.\n',
  },
  {
    name: 'unprefixed/is/class/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":is(c d.e, f g)", ":is(c d.e, f g)", "h")}\n',
  },
  {
    name: 'unprefixed/is/class/equal/output.css',
    data: 'a {\n  b: :is(c d.e, f g), h;\n}\n',
  },
  {
    name: 'unprefixed/is/class/unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":is(c d.e, f g)", ":-pfx-is(c d.e, f g)", "h")}\n',
  },
  {
    name: 'unprefixed/is/class/unequal/name/output.css',
    data: 'a {\n  b: :is(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/is/class/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":is(c d.e, f g)", ":is(d, g)", "h")}\n',
  },
  {
    name: 'unprefixed/is/class/unequal/argument/output.css',
    data: 'a {\n  b: :is(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/is/class/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":is(c d.e, f g)", ":is", "h")}\n',
  },
  {
    name: 'unprefixed/is/class/unequal/has_argument/output.css',
    data: 'a {\n  b: :is(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/where/class/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":where(c d.e, f g)", ":where(c d.e, f g)", "h")}\n',
  },
  {
    name: 'unprefixed/where/class/equal/output.css',
    data: 'a {\n  b: :where(c d.e, f g), h;\n}\n',
  },
  {
    name: 'unprefixed/where/class/unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":where(c d.e, f g)", ":-pfx-where(c d.e, f g)", "h")}\n',
  },
  {
    name: 'unprefixed/where/class/unequal/name/output.css',
    data: 'a {\n  b: :where(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/where/class/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":where(c d.e, f g)", ":where(d, g)", "h")}\n',
  },
  {
    name: 'unprefixed/where/class/unequal/argument/output.css',
    data: 'a {\n  b: :where(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/where/class/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":where(c d.e, f g)", ":where", "h")}\n',
  },
  {
    name: 'unprefixed/where/class/unequal/has_argument/output.css',
    data: 'a {\n  b: :where(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/matches/class/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":matches(c d.e, f g)", ":matches(c d.e, f g)", "h")}\n',
  },
  {
    name: 'unprefixed/matches/class/equal/output.css',
    data: 'a {\n  b: :matches(c d.e, f g), h;\n}\n',
  },
  {
    name: 'unprefixed/matches/class/unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":matches(c d.e, f g)", ":-pfx-matches(c d.e, f g)", "h")}\n',
  },
  {
    name: 'unprefixed/matches/class/unequal/name/output.css',
    data: 'a {\n  b: :matches(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/matches/class/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":matches(c d.e, f g)", ":matches(d, g)", "h")}\n',
  },
  {
    name: 'unprefixed/matches/class/unequal/argument/output.css',
    data: 'a {\n  b: :matches(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/matches/class/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":matches(c d.e, f g)", ":matches", "h")}\n',
  },
  {
    name: 'unprefixed/matches/class/unequal/has_argument/output.css',
    data: 'a {\n  b: :matches(c d.e, f g);\n}\n',
  },
  {
    name: 'unprefixed/element/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::slotted(c.d, e.f)", "::slotted(c.d, e.f)", "g")}\n',
  },
  {
    name: 'unprefixed/element/equal/output.css',
    data: 'a {\n  b: ::slotted(c.d, e.f), g;\n}\n',
  },
  {
    name: 'unprefixed/element/unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::slotted(c.d, e.f)", "::-pfx-slotted(c.d, e.f)", "g")}\n',
  },
  {
    name: 'unprefixed/element/unequal/name/output.css',
    data: 'a {\n  b: ::slotted(c.d, e.f);\n}\n',
  },
  {
    name: 'unprefixed/element/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::slotted(c.d, e.f)", "::slotted(d, g)", "g")}\n',
  },
  {
    name: 'unprefixed/element/unequal/argument/output.css',
    data: 'a {\n  b: ::slotted(c.d, e.f);\n}\n',
  },
  {
    name: 'unprefixed/element/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::slotted(c.d, e.f)", "::slotted", "g")}\n',
  },
  {
    name: 'unprefixed/element/unequal/has_argument/output.css',
    data: 'a {\n  b: ::slotted(c.d, e.f);\n}\n',
  },
  {
    name: 'prefixed/equal/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.extend(\n      ":nth-child(2n + 1 of c d.e, f g)",\n      ":nth-child(2n + 1 of c d.e, f g)",\n      "h");\n}\n',
  },
  {
    name: 'prefixed/equal/output.css',
    data: 'a {\n  b: :nth-child(2n+1 of c d.e, f g), h;\n}\n',
  },
  {
    name: 'prefixed/unequal/name/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.extend(\n      ":nth-child(2n + 1 of c d.e, f g)",\n      ":nth-last-child(2n + 1 of c d.e, f g)",\n      "h");\n}\n',
  },
  {
    name: 'prefixed/unequal/name/output.css',
    data: 'a {\n  b: :nth-child(2n+1 of c d.e, f g);\n}\n',
  },
  {
    name: 'prefixed/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.extend(\n      ":nth-child(2n + 1 of c d.e, f g)",\n      ":nth-child(2n + 1 of d, g)",\n      "h");\n}\n',
  },
  {
    name: 'prefixed/unequal/argument/output.css',
    data: 'a {\n  b: :nth-child(2n+1 of c d.e, f g);\n}\n',
  },
  {
    name: 'prefixed/unequal/prefix/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.extend(\n      ":nth-child(2n + 1 of c d.e, f g)",\n      ":nth-child(2n of c d.e, f g)",\n      "h");\n}\n',
  },
  {
    name: 'prefixed/unequal/prefix/output.css',
    data: 'a {\n  b: :nth-child(2n+1 of c d.e, f g);\n}\n',
  },
  {
    name: 'prefixed/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":nth-child(2n + 1 of c d.e, f g)", ":nth-child", "h")}\n',
  },
  {
    name: 'prefixed/unequal/has_argument/output.css',
    data: 'a {\n  b: :nth-child(2n+1 of c d.e, f g);\n}\n',
  },
]
