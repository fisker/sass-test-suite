// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/selector.hrx

export default [
  {
    name: 'nest/input.scss',
    data: 'a {b: selector-nest(c, d)}\n',
  },
  {
    name: 'nest/output.css',
    data: 'a {\n  b: c d;\n}\n',
  },
  {
    name: 'nest/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse selector.nest instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: selector-nest(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'append/input.scss',
    data: 'a {b: selector-append(c, d)}\n',
  },
  {
    name: 'append/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'append/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse selector.append instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: selector-append(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'replace/input.scss',
    data: 'a {b: selector-replace(c, c, d)}\n',
  },
  {
    name: 'replace/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'replace/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse selector.replace instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: selector-replace(c, c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'extend/input.scss',
    data: 'a {b: selector-extend(c, c, d)}\n',
  },
  {
    name: 'extend/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'extend/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse selector.extend instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: selector-extend(c, c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'unify/input.scss',
    data: 'a {b: selector-unify(".c", ".d")}\n',
  },
  {
    name: 'unify/output.css',
    data: 'a {\n  b: .c.d;\n}\n',
  },
  {
    name: 'unify/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse selector.unify instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: selector-unify(".c", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'is_superselector/input.scss',
    data: 'a {b: is-superselector(c, d)}\n',
  },
  {
    name: 'is_superselector/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'is_superselector/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse selector.is-superselector instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: is-superselector(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'simple_selectors/input.scss',
    data: 'a {b: simple-selectors(".c.d")}\n',
  },
  {
    name: 'simple_selectors/output.css',
    data: 'a {\n  b: .c, .d;\n}\n',
  },
  {
    name: 'simple_selectors/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse selector.simple-selectors instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: simple-selectors(".c.d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'parse/input.scss',
    data: 'a {b: selector-parse(".c, .d")}\n',
  },
  {
    name: 'parse/output.css',
    data: 'a {\n  b: .c, .d;\n}\n',
  },
  {
    name: 'parse/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse selector.parse instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: selector-parse(".c, .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
]
