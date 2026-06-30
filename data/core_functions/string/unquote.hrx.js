// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/unquote.hrx

export default [
  {
    name: 'README.md',
    data: "Many of these specs test the returned string's length and equality to other\nstrings to ensure that it's a string with the correct structure, not just some\nvalue with the same serialization.\n",
  },
  {
    name: 'unquoted/input.scss',
    data: '@use "sass:string";\na {b: string.unquote(c)}\n',
  },
  {
    name: 'unquoted/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'quoted/input.scss',
    data: '@use "sass:string";\na {b: string.unquote("c")}\n',
  },
  {
    name: 'quoted/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'empty/input.scss',
    data: '@use "sass:string";\n$result: string.unquote("");\na {\n  result: $result; // This will not be emitted because the contents is empty.\n  length: string.length($result);\n  same: $result == "";\n}\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  length: 0;\n  same: true;\n}\n',
  },
  {
    name: 'escaped_quotes/unquoted/input.scss',
    data: '@use "sass:string";\n// Unquoting an unquoted string returns it exactly as-is, leaving escapes\n// totally unchanged (whether they\'re quotes or not).\n$result: string.unquote(\\"c\\");\na {\n  result: $result;\n  length: string.length($result);\n  same: $result == \\"c\\";\n}\n',
  },
  {
    name: 'escaped_quotes/unquoted/output.css',
    data: 'a {\n  result: \\"c\\";\n  length: 5;\n  same: true;\n}\n',
  },
  {
    name: 'escaped_quotes/quoted/input.scss',
    data: '@use "sass:string";\n// Unquoting a quoted string returns an unquoted string with the same code\n// points. Code points such as quotes that need to be escaped in the original\n// don\'t need escaping in the output.\n$result: string.unquote("\\"c\\"");\na {\n  result: $result;\n  length: string.length($result);\n  same: $result == "\\"c\\"";\n}\n',
  },
  {
    name: 'escaped_quotes/quoted/output.css',
    data: 'a {\n  result: "c";\n  length: 3;\n  same: true;\n}\n',
  },
  {
    name: 'meaningful_css_characters/input.scss',
    data: '@use "sass:string";\n// Unquoted strings aren\'t required to be valid CSS identifiers, and the\n// `unquote()` function does *not* escape characters that aren\'t valid\n// identifier characters. This allows it to be used as an escape hatch to\n// produce CSS that Sass doesn\'t otherwise support.\n$result: string.unquote("b; c {d: e");\na {\n  result: $result;\n  length: string.length($result);\n  same: $result == "b; c {d: e";\n}\n',
  },
  {
    name: 'meaningful_css_characters/output.css',
    data: 'a {\n  result: b; c {d: e;\n  length: 10;\n  same: true;\n}\n',
  },
  {
    name: 'escaped_backslash/input.scss',
    data: '@use "sass:string";\n$result: string.unquote("\\\\0 ");\na {\n  result: $result;\n  length: string.length($result);\n  same-as-argument: $result == "\\\\0 ";\n  same-as-literal: $result == \\0 ;\n}\n',
  },
  {
    name: 'escaped_backslash/output.css',
    data: 'a {\n  result: \\0 ;\n  length: 3;\n  same-as-argument: true;\n  same-as-literal: true;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:string";\na {b: string.unquote($string: c)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:string";\na {b: string.unquote(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $string: 1 is not a string.\n  ,\n2 | a {b: string.unquote(1)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:string";\na {b: string.unquote()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $string.\n  ,--> input.scss\n2 | a {b: string.unquote()}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:string\n1 | @function unquote($string) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.unquote(c, d)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: string.unquote(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:string\n1 | @function unquote($string) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
