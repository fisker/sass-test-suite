export default [
  {
    name: 'default/and_explicit/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c", "e|*"))}\n',
  },
  {
    name: 'default/and_explicit/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'default/and_empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c", "|*"))}\n',
  },
  {
    name: 'default/and_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'default/and_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "*")}\n',
  },
  {
    name: 'default/and_default/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'default/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "*|*")}\n',
  },
  {
    name: 'default/and_any/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'explicit/and_explicit/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c|d", "c|*")}\n',
  },
  {
    name: 'explicit/and_explicit/same/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'explicit/and_explicit/different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|d", "e|*"))}\n',
  },
  {
    name: 'explicit/and_explicit/different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'explicit/and_empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|d", "|*"))}\n',
  },
  {
    name: 'explicit/and_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'explicit/and_default/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c|d", "*"))}\n',
  },
  {
    name: 'explicit/and_default/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'explicit/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c|d", "*|*")}\n',
  },
  {
    name: 'explicit/and_any/output.css',
    data: 'a {\n  b: c|d;\n}\n',
  },
  {
    name: 'empty/and_explicit/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|c", "e|*"))}\n',
  },
  {
    name: 'empty/and_explicit/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'empty/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("|c", "|*")}\n',
  },
  {
    name: 'empty/and_empty/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'empty/and_default/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("|c", "*"))}\n',
  },
  {
    name: 'empty/and_default/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'empty/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("|c", "*|*")}\n',
  },
  {
    name: 'empty/and_any/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'any/and_explicit/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|c", "d|*")}\n',
  },
  {
    name: 'any/and_explicit/output.css',
    data: 'a {\n  b: d|c;\n}\n',
  },
  {
    name: 'any/and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|c", "|*")}\n',
  },
  {
    name: 'any/and_empty/output.css',
    data: 'a {\n  b: |c;\n}\n',
  },
  {
    name: 'any/and_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|c", "*")}\n',
  },
  {
    name: 'any/and_default/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'any/and_any/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("*|c", "*|*")}\n',
  },
  {
    name: 'any/and_any/output.css',
    data: 'a {\n  b: *|c;\n}\n',
  },
]
