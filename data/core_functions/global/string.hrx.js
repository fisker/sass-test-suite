// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/string.hrx

export default [
  {
    name: 'unquote/input.scss',
    data: 'a {b: unquote("c")}\n',
  },
  {
    name: 'unquote/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'unquote/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.unquote instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: unquote("c")}\n  |       ^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'quote/input.scss',
    data: 'a {b: quote(c)}\n',
  },
  {
    name: 'quote/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'quote/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.quote instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: quote(c)}\n  |       ^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'length/input.scss',
    data: 'a {b: str-length("c")}\n',
  },
  {
    name: 'length/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'length/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.length instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: str-length("c")}\n  |       ^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'insert/input.scss',
    data: 'a {b: str-insert("c", "d", 1)}\n',
  },
  {
    name: 'insert/output.css',
    data: 'a {\n  b: "dc";\n}\n',
  },
  {
    name: 'insert/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.insert instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: str-insert("c", "d", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'index/input.scss',
    data: 'a {b: str-index("c", "c")}\n',
  },
  {
    name: 'index/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'index/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.index instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: str-index("c", "c")}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'slice/input.scss',
    data: 'a {b: str-slice("c", 1, 1)}\n',
  },
  {
    name: 'slice/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'slice/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.slice instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: str-slice("c", 1, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'to_upper_case/input.scss',
    data: 'a {b: to-upper-case("c")}\n',
  },
  {
    name: 'to_upper_case/output.css',
    data: 'a {\n  b: "C";\n}\n',
  },
  {
    name: 'to_upper_case/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.to-upper-case instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: to-upper-case("c")}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'unique_id/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(unique-id())}\n',
  },
  {
    name: 'unique_id/output.css',
    data: 'a {\n  b: string;\n}\n',
  },
  {
    name: 'unique_id/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.unique-id instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | a {b: meta.type-of(unique-id())}\n  |                    ^^^^^^^^^^^\n  '\n    input.scss 2:20  root stylesheet\n",
  },
]
