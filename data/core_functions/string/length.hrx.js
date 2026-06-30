export default [
  {
    name: 'empty/input.scss',
    data: '@use "sass:string";\na {b: string.length("")}\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'one_character/input.scss',
    data: '@use "sass:string";\na {b: string.length("c")}\n',
  },
  {
    name: 'one_character/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'multiple_characters/input.scss',
    data: '@use "sass:string";\na {b: string.length("fblthp abatement")}\n',
  },
  {
    name: 'multiple_characters/output.css',
    data: 'a {\n  b: 16;\n}\n',
  },
  {
    name: 'private_use_character/input.scss',
    data: '@use "sass:string";\n// Dart Sass emits private-use characters as escapes in expanded mode, but it\n// should stil treat them as single characters for the purpose of functions.\na {b: string.length("\\E000")}\n',
  },
  {
    name: 'private_use_character/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'double_width_character/input.scss',
    data: '@use "sass:string";\n// Sass treats strings as sequences of Unicode codepoint; it doesn\'t care if a\n// character is represented as two UTF-16 code units.\na {b: string.length("👭")}\n',
  },
  {
    name: 'double_width_character/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'combining_character/input.scss',
    data: '@use "sass:string";\n// Sass does *not* treat strings as sequences of glyphs, so this string which\n// contains "c" followed by a combining umlaut should be considered two separate\n// characters even though it\'s rendered as only one.\na {b: string.length("c\\0308")}\n',
  },
  {
    name: 'combining_character/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'unquoted/input.scss',
    data: '@use "sass:string";\na {b: string.length(loofamonster)}\n',
  },
  {
    name: 'unquoted/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:string";\na {b: string.length($string: "c")}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:string";\na {b: string.str-length("c")}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: 'Error: Undefined function.\n  ,\n2 | a {b: string.str-length("c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:string";\na {b: string.length(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $string: 1 is not a string.\n  ,\n2 | a {b: string.length(1)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:string";\na {b: string.length()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $string.\n  ,--> input.scss\n2 | a {b: string.length()}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:string\n1 | @function length($string) {\n  |           =============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.length(c, d)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: string.length(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:string\n1 | @function length($string) {\n  |           =============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
