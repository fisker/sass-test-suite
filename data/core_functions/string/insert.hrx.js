export default [
  {
    name: 'empty_destination/empty_source/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "", 1)}\n',
  },
  {
    name: 'empty_destination/empty_source/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'empty_destination/index_0/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "c", 0)}\n',
  },
  {
    name: 'empty_destination/index_0/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'empty_destination/index_1/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "c", 1)}\n',
  },
  {
    name: 'empty_destination/index_1/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'empty_destination/index_2/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "c", 2)}\n',
  },
  {
    name: 'empty_destination/index_2/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'empty_destination/index_negative_1/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "c", -1)}\n',
  },
  {
    name: 'empty_destination/index_negative_1/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'empty_insertion/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "", 1)}\n',
  },
  {
    name: 'empty_insertion/output.css',
    data: 'a {\n  b: "cde";\n}\n',
  },
  {
    name: 'index/positive/0/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", 0)}\n',
  },
  {
    name: 'index/positive/0/output.css',
    data: 'a {\n  b: "fcde";\n}\n',
  },
  {
    name: 'index/positive/1/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", 1)}\n',
  },
  {
    name: 'index/positive/1/output.css',
    data: 'a {\n  b: "fcde";\n}\n',
  },
  {
    name: 'index/positive/2/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", 2)}\n',
  },
  {
    name: 'index/positive/2/output.css',
    data: 'a {\n  b: "cfde";\n}\n',
  },
  {
    name: 'index/positive/last/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", 4)}\n',
  },
  {
    name: 'index/positive/last/output.css',
    data: 'a {\n  b: "cdef";\n}\n',
  },
  {
    name: 'index/positive/after_last/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", 100)}\n',
  },
  {
    name: 'index/positive/after_last/output.css',
    data: 'a {\n  b: "cdef";\n}\n',
  },
  {
    name: 'index/negative/1/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", -1)}\n',
  },
  {
    name: 'index/negative/1/output.css',
    data: 'a {\n  b: "cdef";\n}\n',
  },
  {
    name: 'index/negative/2/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", -2)}\n',
  },
  {
    name: 'index/negative/2/output.css',
    data: 'a {\n  b: "cdfe";\n}\n',
  },
  {
    name: 'index/negative/last/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", -4)}\n',
  },
  {
    name: 'index/negative/last/output.css',
    data: 'a {\n  b: "fcde";\n}\n',
  },
  {
    name: 'index/negative/after_last/less_than_double/input.scss',
    data: '@use "sass:string";\n// Regression test for sass/dart-sass#1568\na {b: string.insert("cdefghijkl", "mno", -15)}\n',
  },
  {
    name: 'index/negative/after_last/less_than_double/output.css',
    data: 'a {\n  b: "mnocdefghijkl";\n}\n',
  },
  {
    name: 'index/negative/after_last/more_than_double/input.scss',
    data: '@use "sass:string";\na {b: string.insert("cde", "f", -100)}\n',
  },
  {
    name: 'index/negative/after_last/more_than_double/output.css',
    data: 'a {\n  b: "fcde";\n}\n',
  },
  {
    name: 'double_width_character/input.scss',
    data: '@use "sass:string";\n// Sass treats strings as sequences of Unicode codepoint; it doesn\'t care if a\n// character is represented as two UTF-16 code units, so inserting a character\n// at index 2 shouldn\'t break this emoji in two.\na {b: string.insert("👭", "c", 2)}\n',
  },
  {
    name: 'double_width_character/output.css',
    data: '@charset "UTF-8";\na {\n  b: "👭c";\n}\n',
  },
  {
    name: 'combining_character/input.scss',
    data: '@use "sass:string";\n// Sass does *not* treat strings as sequences of glyphs, so this string which\n// contains "c" followed by a combining umlaut should be considered two separate\n// characters even though it\'s rendered as only one and the "d" should be\n// injected between the two.\na {b: string.insert("c\\0308", "d", 2)}\n',
  },
  {
    name: 'combining_character/output.css',
    data: '@charset "UTF-8";\na {\n  b: "cd̈";\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:string";\na {b: string.insert($string: "cde", $insert: "f", $index: 2)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: "cfde";\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:string";\na {b: string.str-insert("c", 1, "d")}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: 'Error: Undefined function.\n  ,\n2 | a {b: string.str-insert("c", 1, "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n\n',
  },
  {
    name: 'error/type/string/input.scss',
    data: '@use "sass:string";\na {b: string.insert(1, "", 1)}\n',
  },
  {
    name: 'error/type/string/error',
    data: 'Error: $string: 1 is not a string.\n  ,\n2 | a {b: string.insert(1, "", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/insert/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", 1, 1)}\n',
  },
  {
    name: 'error/type/insert/error',
    data: 'Error: $insert: 1 is not a string.\n  ,\n2 | a {b: string.insert("", 1, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/index/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "", "")}\n',
  },
  {
    name: 'error/type/index/error',
    data: 'Error: $index: "" is not a number.\n  ,\n2 | a {b: string.insert("", "", "")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/decimal/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "", 0.5)}\n',
  },
  {
    name: 'error/decimal/error',
    data: 'Error: $index: 0.5 is not an int.\n  ,\n2 | a {b: string.insert("", "", 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "")}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: 'Error: Missing argument $index.\n  ,--> input.scss\n2 | a {b: string.insert("", "")}\n  |       ^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function insert($string, $insert, $index) {\n  |           ================================ declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.insert("", "", 1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: string.insert("", "", 1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function insert($string, $insert, $index) {\n  |           ================================ declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
