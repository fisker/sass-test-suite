// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/universal.hrx

export default [
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*", "*")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'and_type/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*", "c")}\n',
  },
  {
    name: 'and_type/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*", ".c")}\n',
  },
  {
    name: 'and_class/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/explicit/and_type/explicit/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "c|d")}\n',
  },
  {
    name: 'namespace/explicit/and_type/explicit/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/explicit/and_type/explicit/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "e|d")}\n',
  },
  {
    name: 'namespace/explicit/and_type/explicit/unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_type/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "d")}\n',
  },
  {
    name: 'namespace/explicit/and_type/implicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_type/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "|d")}\n',
  },
  {
    name: 'namespace/explicit/and_type/empty/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/equal/options.yml',
    data: '---\n:todo:\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "c|*")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "d|*")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/explicit/unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "*")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/implicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "|*")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/empty/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_universal/universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", "*|*")}\n',
  },
  {
    name: 'namespace/explicit/and_universal/universal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/explicit/and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c|*", ".d")}\n',
  },
  {
    name: 'namespace/explicit/and_class/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_type/explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|*", "c|d")}\n',
  },
  {
    name: 'namespace/empty/and_type/explicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_type/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|*", "d")}\n',
  },
  {
    name: 'namespace/empty/and_type/implicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_type/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|*", "|d")}\n',
  },
  {
    name: 'namespace/empty/and_type/empty/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|*", "c|*")}\n',
  },
  {
    name: 'namespace/empty/and_universal/explicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|*", "*")}\n',
  },
  {
    name: 'namespace/empty/and_universal/implicit/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|*", "|*")}\n',
  },
  {
    name: 'namespace/empty/and_universal/empty/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/empty/and_universal/universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|*", "*|*")}\n',
  },
  {
    name: 'namespace/empty/and_universal/universal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/empty/and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("|*", ".d")}\n',
  },
  {
    name: 'namespace/empty/and_class/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'namespace/universal/and_type/explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|*", "c|d")}\n',
  },
  {
    name: 'namespace/universal/and_type/explicit/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_type/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|*", "d")}\n',
  },
  {
    name: 'namespace/universal/and_type/implicit/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_type/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|*", "|d")}\n',
  },
  {
    name: 'namespace/universal/and_type/empty/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|*", "c|*")}\n',
  },
  {
    name: 'namespace/universal/and_universal/explicit/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/implicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|*", "*")}\n',
  },
  {
    name: 'namespace/universal/and_universal/implicit/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|*", "|*")}\n',
  },
  {
    name: 'namespace/universal/and_universal/empty/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_universal/universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|*", "*|*")}\n',
  },
  {
    name: 'namespace/universal/and_universal/universal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'namespace/universal/and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("*|*", ".d")}\n',
  },
  {
    name: 'namespace/universal/and_class/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
