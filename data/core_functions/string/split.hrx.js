// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/split.hrx

export default [
  {
    name: 'empty_string/input.scss',
    data: '@use "sass:string";\na {b: string.split("", "/")}\n',
  },
  {
    name: 'empty_string/output.css',
    data: 'a {\n  b: [];\n}\n',
  },
  {
    name: 'empty/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "sass:string";\n$result: string.split("", "/");\na {\n  value: meta.inspect($result);\n  separator: list.separator($result); \n}\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  value: [];\n  separator: comma;\n}\n',
  },
  {
    name: 'single/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "sass:string";\n$result: string.split("a", "");\na {\n  value: meta.inspect($result);\n  separator: list.separator($result); \n}\n',
  },
  {
    name: 'single/output.css',
    data: 'a {\n  value: ["a",];\n  separator: comma;\n}\n',
  },
  {
    name: 'empty_separator/input.scss',
    data: '@use "sass:string";\na {b: string.split("Helvetica", "")}\n',
  },
  {
    name: 'empty_separator/output.css',
    data: 'a {\n  b: ["H", "e", "l", "v", "e", "t", "i", "c", "a"];\n}\n',
  },
  {
    name: 'both_empty/input.scss',
    data: '@use "sass:string";\na {b: string.split("", "")}\n',
  },
  {
    name: 'both_empty/output.css',
    data: 'a {\n  b: [];\n}\n',
  },
  {
    name: 'separator/input.scss',
    data: '@use "sass:string";\na {b: string.split("a, b, c", ", ")}\n',
  },
  {
    name: 'separator/output.css',
    data: 'a {\n  b: ["a", "b", "c"];\n}\n',
  },
  {
    name: 'separator_not_found/input.scss',
    data: '@use "sass:string";\na {b: string.split("a, b, c", "&")}\n',
  },
  {
    name: 'separator_not_found/output.css',
    data: 'a {\n  b: ["a, b, c"];\n}\n',
  },
  {
    name: 'limit/input.scss',
    data: '@use "sass:string";\na {b: string.split("a, b, c, d", ", ", 2)}\n',
  },
  {
    name: 'limit/output.css',
    data: 'a {\n  b: ["a", "b", "c, d"];\n}\n',
  },
  {
    name: 'double_width_character/input.scss',
    data: '@use "sass:string";\n// Sass treats strings as sequences of Unicode codepoint; it doesn\'t care if a\n// character is represented as two UTF-16 code units.\na {b: string.split("👭a", "")}\n',
  },
  {
    name: 'double_width_character/output.css',
    data: '@charset "UTF-8";\na {\n  b: ["👭", "a"];\n}\n',
  },
  {
    name: 'private_use_character/input.scss',
    data: '@use "sass:string";\n// Dart Sass emits private-use characters as escapes in expanded mode, but it\n// should still treat them as single characters for the purpose of functions.\na {b: string.split("\\E000", "")}\n',
  },
  {
    name: 'private_use_character/output.css',
    data: 'a {\n  b: ["\\e000"];\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:string";\na {b: string.split($string: "a/b/c", $separator: "/", $limit: 1)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: ["a", "b/c"];\n}\n',
  },
  {
    name: 'unquoted_string/input.scss',
    data: '@use "sass:string";\na {b: string.split(abc, "")}\n',
  },
  {
    name: 'unquoted_string/output.css',
    data: 'a {\n  b: [a, b, c];\n}\n',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.split("a/b/c", "/", 1, 3)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: string.split("a/b/c", "/", 1, 3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function split($string, $separator, $limit: null) {\n  |           ======================================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:string";\na {b: string.split("a/b/c")}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: 'Error: Missing argument $separator.\n  ,--> input.scss\n2 | a {b: string.split("a/b/c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function split($string, $separator, $limit: null) {\n  |           ======================================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/string/input.scss',
    data: '@use "sass:string";\na {b: string.split(1, "%")}\n',
  },
  {
    name: 'error/type/string/error',
    data: 'Error: $string: 1 is not a string.\n  ,\n2 | a {b: string.split(1, "%")}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/separator/input.scss',
    data: '@use "sass:string";\na {b: string.split("1/2/3", 1)}\n',
  },
  {
    name: 'error/type/separator/error',
    data: 'Error: $separator: 1 is not a string.\n  ,\n2 | a {b: string.split("1/2/3", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/limit/input.scss',
    data: '@use "sass:string";\na {b: string.split("1/2/3", "/", "1")}\n',
  },
  {
    name: 'error/type/limit/error',
    data: 'Error: $limit: "1" is not a number.\n  ,\n2 | a {b: string.split("1/2/3", "/", "1")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/decimal/input.scss',
    data: '@use "sass:string";\na {b: string.split("1/2/3", "/", 0.5)}\n',
  },
  {
    name: 'error/decimal/error',
    data: 'Error: $limit: 0.5 is not an int.\n  ,\n2 | a {b: string.split("1/2/3", "/", 0.5)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/negative_limit/input.scss',
    data: '@use "sass:string";\na {b: string.split("1/2/3", "/", -1)}\n',
  },
  {
    name: 'error/negative_limit/error',
    data: 'Error: $limit: Must be 1 or greater, was -1.\n  ,\n2 | a {b: string.split("1/2/3", "/", -1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/limit_zero/input.scss',
    data: '@use "sass:string";\na {b: string.split("a, b, c", ", ", 0)}\n',
  },
  {
    name: 'error/limit_zero/error',
    data: 'Error: $limit: Must be 1 or greater, was 0.\n  ,\n2 | a {b: string.split("a, b, c", ", ", 0)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
