export default [
  {
    name: 'and_type/default/and_explicit/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*", "c|d"))}\n',
  },
  {
    name: 'and_type/default/and_explicit/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_type/default/and_empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*", "|c"))}\n',
  },
  {
    name: 'and_type/default/and_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_type/default/and_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*", "c")}\n',
  },
  {
    name: 'and_type/default/and_default/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'and_type/default/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*", "*|c")}\n',
  },
  {
    name: 'and_type/default/and_any/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'and_type/explicit/and_explicit/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c|*", "c|d")}\n',
  },
  {
    name: 'and_type/explicit/and_explicit/same/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'and_type/explicit/and_explicit/different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|*", "d|e"))}\n',
  },
  {
    name: 'and_type/explicit/and_explicit/different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_type/explicit/and_empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|*", "|d"))}\n',
  },
  {
    name: 'and_type/explicit/and_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_type/explicit/and_default/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|*", "d"))}\n',
  },
  {
    name: 'and_type/explicit/and_default/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_type/explicit/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c|*", "*|d")}\n',
  },
  {
    name: 'and_type/explicit/and_any/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'and_type/empty/and_explicit/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|*", "c|d"))}\n',
  },
  {
    name: 'and_type/empty/and_explicit/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_type/empty/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("|*", "|c")}\n',
  },
  {
    name: 'and_type/empty/and_empty/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'and_type/empty/and_default/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|*", "c"))}\n',
  },
  {
    name: 'and_type/empty/and_default/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_type/empty/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("|*", "*|c")}\n',
  },
  {
    name: 'and_type/empty/and_any/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'and_type/any/and_explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|*", "c|d")}\n',
  },
  {
    name: 'and_type/any/and_explicit/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'and_type/any/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|*", "|c")}\n',
  },
  {
    name: 'and_type/any/and_empty/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'and_type/any/and_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|*", "c")}\n',
  },
  {
    name: 'and_type/any/and_default/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'and_type/any/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|*", "*|c")}\n',
  },
  {
    name: 'and_type/any/and_any/output.css',
    data: 'a {\n  b: *|c;\n}\n',
  },
  {
    name: 'and_universal/default/and_explicit/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*", "e|*"))}\n',
  },
  {
    name: 'and_universal/default/and_explicit/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_universal/default/and_empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*", "|*"))}\n',
  },
  {
    name: 'and_universal/default/and_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_universal/default/and_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*", "*")}\n',
  },
  {
    name: 'and_universal/default/and_default/output.css',
    data: 'a {\n  b: *;\n}\n',
  },
  {
    name: 'and_universal/default/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*", "*|*")}\n',
  },
  {
    name: 'and_universal/default/and_any/output.css',
    data: 'a {\n  b: *;\n}\n',
  },
  {
    name: 'and_universal/explicit/and_explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c|*", "c|*")}\n',
  },
  {
    name: 'and_universal/explicit/and_explicit/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'and_universal/explicit/and_empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|*", "|*"))}\n',
  },
  {
    name: 'and_universal/explicit/and_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_universal/explicit/and_default/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|*", "*"))}\n',
  },
  {
    name: 'and_universal/explicit/and_default/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_universal/explicit/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c|*", "*|*")}\n',
  },
  {
    name: 'and_universal/explicit/and_any/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'and_universal/empty/and_explicit/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|*", "e|*"))}\n',
  },
  {
    name: 'and_universal/empty/and_explicit/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_universal/empty/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("|*", "|*")}\n',
  },
  {
    name: 'and_universal/empty/and_empty/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'and_universal/empty/and_default/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|*", "*"))}\n',
  },
  {
    name: 'and_universal/empty/and_default/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'and_universal/empty/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("|*", "*|*")}\n',
  },
  {
    name: 'and_universal/empty/and_any/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'and_universal/any/and_explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|*", "c|*")}\n',
  },
  {
    name: 'and_universal/any/and_explicit/output.css',
    data: 'a {\n  b: c|*;\n}\n',
  },
  {
    name: 'and_universal/any/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|*", "|*")}\n',
  },
  {
    name: 'and_universal/any/and_empty/output.css',
    data: 'a {\n  b: |*;\n}\n',
  },
  {
    name: 'and_universal/any/and_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|*", "*")}\n',
  },
  {
    name: 'and_universal/any/and_default/output.css',
    data: 'a {\n  b: *;\n}\n',
  },
  {
    name: 'and_universal/any/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|*", "*|*")}\n',
  },
  {
    name: 'and_universal/any/and_any/output.css',
    data: 'a {\n  b: *|*;\n}\n',
  },
]
