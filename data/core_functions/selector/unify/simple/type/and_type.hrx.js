export default [
  {
    name: 'default/and_explicit/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c", "d|c"))}\n',
  },
  {
    name: 'default/and_explicit/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'default/and_empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c", "|c"))}\n',
  },
  {
    name: 'default/and_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'default/and_default/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "c")}\n',
  },
  {
    name: 'default/and_default/same/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'default/and_default/different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c", "d"))}\n',
  },
  {
    name: 'default/and_default/different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'default/and_any/same_type/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "*|c")}\n',
  },
  {
    name: 'default/and_any/same_type/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'default/and_any/different_type/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c", "*|d"))}\n',
  },
  {
    name: 'default/and_any/different_type/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'explicit/and_explicit/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c|d", "c|d")}\n',
  },
  {
    name: 'explicit/and_explicit/same/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'explicit/and_explicit/different/namespace/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|d", "e|d"))}\n',
  },
  {
    name: 'explicit/and_explicit/different/namespace/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'explicit/and_explicit/different/type/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|d", "c|e"))}\n',
  },
  {
    name: 'explicit/and_explicit/different/type/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'explicit/and_empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|d", "|d"))}\n',
  },
  {
    name: 'explicit/and_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'explicit/and_default/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|d", "d"))}\n',
  },
  {
    name: 'explicit/and_default/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'explicit/and_any/same_type/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c|d", "*|d")}\n',
  },
  {
    name: 'explicit/and_any/same_type/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'explicit/and_any/different_type/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|d", "*|e"))}\n',
  },
  {
    name: 'explicit/and_any/different_type/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'empty/and_explicit/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|c", "e|c"))}\n',
  },
  {
    name: 'empty/and_explicit/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'empty/and_empty/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("|c", "|c")}\n',
  },
  {
    name: 'empty/and_empty/same/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'empty/and_empty/different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|c", "|d"))}\n',
  },
  {
    name: 'empty/and_empty/different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'empty/and_default/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|c", "c"))}\n',
  },
  {
    name: 'empty/and_default/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'empty/and_any/same_type/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("|c", "*|c")}\n',
  },
  {
    name: 'empty/and_any/same_type/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'empty/and_any/different_type/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|c", "*|d"))}\n',
  },
  {
    name: 'empty/and_any/different_type/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'any/and_explicit/same_type/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|c", "d|c")}\n',
  },
  {
    name: 'any/and_explicit/same_type/output.css',
    data: 'a {\n  b: d|c;\n}\n',
  },
  {
    name: 'any/and_explicit/different_type/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*|c", "d|e"))}\n',
  },
  {
    name: 'any/and_explicit/different_type/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'any/and_empty/same_type/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|c", "|c")}\n',
  },
  {
    name: 'any/and_empty/same_type/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'any/and_empty/different_type/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*|c", "|d"))}\n',
  },
  {
    name: 'any/and_empty/different_type/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'any/and_default/same_type/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|c", "c")}\n',
  },
  {
    name: 'any/and_default/same_type/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'any/and_default/different_type/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*|c", "d"))}\n',
  },
  {
    name: 'any/and_default/different_type/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'any/and_any/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|c", "*|c")}\n',
  },
  {
    name: 'any/and_any/same/output.css',
    data: 'a {\n  b: *|c;\n}\n',
  },
  {
    name: 'any/and_any/different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*|c", "*|d"))}\n',
  },
  {
    name: 'any/and_any/different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
]
