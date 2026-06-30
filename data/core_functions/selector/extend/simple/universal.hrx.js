export default [
  {
    name: 'README.md',
    data: "Although many of these extendees are subselectors of the targets, they're not\nmatched because this phase only cares about full structural equality.\n",
  },
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*", "*", "c")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: *;\n}\n',
  },
  {
    name: 'and_type/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*", "c", "d")}\n',
  },
  {
    name: 'and_type/output.css',
    data: 'a {\n  b: *;\n}\n',
  },
  {
    name: 'and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*", ".c", "d")}\n',
  },
  {
    name: 'and_class/output.css',
    data: 'a {\n  b: *;\n}\n',
  },
  {
    name: 'namespace/explicit/and_type/explicit/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "c|d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_type/explicit/equal/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/explicit/and_type/explicit/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "e|d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_type/explicit/unequal/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/explicit/and_type/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_type/implicit/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/explicit/and_type/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "|d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_type/empty/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "c|*", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/equal/output.css',
    data: 'a {\n  b: c|*, e;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "d|*", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/unequal/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "*", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/implicit/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "|*", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/empty/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", "*|*", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/universal/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/explicit/and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*", ".d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_class/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'namespace/empty/and_type/explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*", "c|d", "e")}\n',
  },
  {
    name: 'namespace/empty/and_type/explicit/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'namespace/empty/and_type/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*", "d", "e")}\n',
  },
  {
    name: 'namespace/empty/and_type/implicit/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'namespace/empty/and_type/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*", "|d", "e")}\n',
  },
  {
    name: 'namespace/empty/and_type/empty/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*", "c|*", "d")}\n',
  },
  {
    name: 'namespace/empty/and_universal/explicit/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*", "*", "c")}\n',
  },
  {
    name: 'namespace/empty/and_universal/implicit/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*", "|*", "c")}\n',
  },
  {
    name: 'namespace/empty/and_universal/empty/output.css',
    data: 'a {\n  b: |*, c;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*", "*|*", "c")}\n',
  },
  {
    name: 'namespace/empty/and_universal/universal/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'namespace/empty/and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*", ".c", "d")}\n',
  },
  {
    name: 'namespace/empty/and_class/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'namespace/universal/and_type/explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|*", "c|d", "e")}\n',
  },
  {
    name: 'namespace/universal/and_type/explicit/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
  {
    name: 'namespace/universal/and_type/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|*", "c", "d")}\n',
  },
  {
    name: 'namespace/universal/and_type/implicit/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
  {
    name: 'namespace/universal/and_type/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|*", "|c", "d")}\n',
  },
  {
    name: 'namespace/universal/and_type/empty/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|*", "c|*", "d")}\n',
  },
  {
    name: 'namespace/universal/and_universal/explicit/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|*", "*", "c")}\n',
  },
  {
    name: 'namespace/universal/and_universal/implicit/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|*", "|*", "c")}\n',
  },
  {
    name: 'namespace/universal/and_universal/empty/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|*", "*|*", "c")}\n',
  },
  {
    name: 'namespace/universal/and_universal/universal/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
  {
    name: 'namespace/universal/and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|*", ".c", "d")}\n',
  },
  {
    name: 'namespace/universal/and_class/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
]
