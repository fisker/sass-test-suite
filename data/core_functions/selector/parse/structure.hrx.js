export default [
  {
    name: 'full_string/quoted/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("c d, e f")}\n',
  },
  {
    name: 'full_string/quoted/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'full_string/unquoted/input.scss',
    data: '@use "sass:selector";\n@use "sass:string";\na {b: selector.parse(string.unquote("c d, e f"))}\n',
  },
  {
    name: 'full_string/unquoted/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/full/quoted/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(("c" "d", "e" "f"))}\n',
  },
  {
    name: 'decomposed/full/quoted/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/full/unquoted/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse((c d, e f))}\n',
  },
  {
    name: 'decomposed/full/unquoted/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/full/mixed/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse((c "d", e "f"))}\n',
  },
  {
    name: 'decomposed/full/mixed/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/partial/quoted/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(("c d", "e f"))}\n',
  },
  {
    name: 'decomposed/partial/quoted/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/partial/unquoted/input.scss',
    data: '@use "sass:selector";\n@use "sass:string";\na {b: selector.parse((string.unquote("c d"), string.unquote("e f")))}\n',
  },
  {
    name: 'decomposed/partial/unquoted/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/partial/mixed/input.scss',
    data: '@use "sass:selector";\n@use "sass:string";\na {b: selector.parse((c d, string.unquote("e f")))}\n',
  },
  {
    name: 'decomposed/partial/mixed/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/middle/quoted/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("c" "d, e" "f")}\n',
  },
  {
    name: 'decomposed/middle/quoted/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/middle/unquoted/input.scss',
    data: '@use "sass:selector";\n@use "sass:string";\na {b: selector.parse(c string.unquote("d, e") f)}\n',
  },
  {
    name: 'decomposed/middle/unquoted/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/middle/mixed/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(c "d, e" f)}\n',
  },
  {
    name: 'decomposed/middle/mixed/output.css',
    data: 'a {\n  b: c d, e f;\n}\n',
  },
  {
    name: 'decomposed/complex/quoted/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("c" "d" "e")}\n',
  },
  {
    name: 'decomposed/complex/quoted/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'decomposed/complex/unquoted/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(c d e)}\n',
  },
  {
    name: 'decomposed/complex/unquoted/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'decomposed/complex/mixed/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(c "d" e)}\n',
  },
  {
    name: 'decomposed/complex/mixed/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
]
