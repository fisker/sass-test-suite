// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/index.hrx

export default [
  {
    name: 'both_empty/input.scss',
    data: '@use "sass:string";\na {b: string.index("", "")}\n',
  },
  {
    name: 'both_empty/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'empty_substring/input.scss',
    data: '@use "sass:string";\na {b: string.index("cde", "")}\n',
  },
  {
    name: 'empty_substring/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'beginning/input.scss',
    data: '@use "sass:string";\na {b: string.index("cde", "c")}\n',
  },
  {
    name: 'beginning/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:string";\na {b: string.index("cde", "d")}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'end/input.scss',
    data: '@use "sass:string";\na {b: string.index("cde", "e")}\n',
  },
  {
    name: 'end/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'not_found/input.scss',
    data: '@use "sass:meta";\n@use "sass:string";\na {b: meta.inspect(string.index("cde", "f"))}\n',
  },
  {
    name: 'not_found/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'double_width_character/input.scss',
    data: '@use "sass:string";\n// Sass treats strings as sequences of Unicode codepoint; it doesn\'t care if a\n// character is represented as two UTF-16 code units.\na {b: string.index("👭a", "a")}\n',
  },
  {
    name: 'double_width_character/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'combining_character/input.scss',
    data: '@use "sass:string";\n// Sass does *not* treat strings as sequences of glyphs, so this string which\n// contains "c" followed by a combining umlaut should be considered two separate\n// characters even though it\'s rendered as only one.\na {b: string.index("c\\0308 a", "a")}\n',
  },
  {
    name: 'combining_character/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:string";\na {b: string.index($string: "cde", $substring: "c")}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:string";\na {b: string.str-index("c", "c")}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: 'Error: Undefined function.\n  ,\n2 | a {b: string.str-index("c", "c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/string/input.scss',
    data: '@use "sass:string";\na {b: string.index(1, "c")}\n',
  },
  {
    name: 'error/type/string/error',
    data: 'Error: $string: 1 is not a string.\n  ,\n2 | a {b: string.index(1, "c")}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/substring/input.scss',
    data: '@use "sass:string";\na {b: string.index("c", 1)}\n',
  },
  {
    name: 'error/type/substring/error',
    data: 'Error: $substring: 1 is not a string.\n  ,\n2 | a {b: string.index("c", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:string";\na {b: string.index("c")}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: 'Error: Missing argument $substring.\n  ,--> input.scss\n2 | a {b: string.index("c")}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function index($string, $substring) {\n  |           ========================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.index("c", "d", "e")}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: string.index("c", "d", "e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function index($string, $substring) {\n  |           ========================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
