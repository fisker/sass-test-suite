export default [
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "c")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "d")}\n',
  },
  {
    name: 'unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'and_universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "*")}\n',
  },
  {
    name: 'and_universal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_explicit/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|d", "c|d")}\n',
  },
  {
    name: 'namespace/explicit/and_explicit/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/explicit/and_explicit/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|d", "e|d")}\n',
  },
  {
    name: 'namespace/explicit/and_explicit/unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|d", "d")}\n',
  },
  {
    name: 'namespace/explicit/and_implicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|d", "|d")}\n',
  },
  {
    name: 'namespace/explicit/and_empty/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|d", "*|d")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|c", "d|c")}\n',
  },
  {
    name: 'namespace/empty/and_explicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|c", "c")}\n',
  },
  {
    name: 'namespace/empty/and_implicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|c", "|c")}\n',
  },
  {
    name: 'namespace/empty/and_empty/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|c", "*|c")}\n',
  },
  {
    name: 'namespace/empty/and_universal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/universal/and_explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|c", "d|c")}\n',
  },
  {
    name: 'namespace/universal/and_explicit/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|c", "c")}\n',
  },
  {
    name: 'namespace/universal/and_implicit/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|c", "|c")}\n',
  },
  {
    name: 'namespace/universal/and_empty/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|c", "*|c")}\n',
  },
  {
    name: 'namespace/universal/and_universal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
