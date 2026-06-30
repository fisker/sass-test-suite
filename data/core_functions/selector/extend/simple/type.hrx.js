// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/simple/type.hrx

export default [
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "c", "e")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: c, e;\n}\n',
  },
  {
    name: 'unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "d", "e")}\n',
  },
  {
    name: 'unequal/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'and_universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "*", "d")}\n',
  },
  {
    name: 'and_universal/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'namespace/explicit/and_explicit/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|d", "c|d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_explicit/equal/output.css',
    data: 'a {\n  b: c|d, e;\n}\n',
  },
  {
    name: 'namespace/explicit/and_explicit/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|d", "e|d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_explicit/unequal/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'namespace/explicit/and_implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|d", "d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_implicit/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'namespace/explicit/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|d", "|d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_empty/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|d", "*|d", "e")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'namespace/empty/and_explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|c", "d|c", "e")}\n',
  },
  {
    name: 'namespace/empty/and_explicit/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'namespace/empty/and_implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|c", "c", "d")}\n',
  },
  {
    name: 'namespace/empty/and_implicit/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'namespace/empty/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|c", "|c", "d")}\n',
  },
  {
    name: 'namespace/empty/and_empty/output.css',
    data: 'a {\n  b: |c, d;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|c", "*|c", "d")}\n',
  },
  {
    name: 'namespace/empty/and_universal/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'namespace/universal/README.md',
    data: "Although many of these extendees are subselectors of the targets, they're not\nmatched because this phase only cares about full structural equality.\n",
  },
  {
    name: 'namespace/universal/and_explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|c", "d|c", "d")}\n',
  },
  {
    name: 'namespace/universal/and_explicit/output.css',
    data: 'a {\n  b: *|c;\n}\n',
  },
  {
    name: 'namespace/universal/and_implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|c", "c", "d")}\n',
  },
  {
    name: 'namespace/universal/and_implicit/output.css',
    data: 'a {\n  b: *|c;\n}\n',
  },
  {
    name: 'namespace/universal/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|c", "|c", "d")}\n',
  },
  {
    name: 'namespace/universal/and_empty/output.css',
    data: 'a {\n  b: *|c;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*|c", "*|c", "d")}\n',
  },
  {
    name: 'namespace/universal/and_universal/output.css',
    data: 'a {\n  b: *|c, d;\n}\n',
  },
]
