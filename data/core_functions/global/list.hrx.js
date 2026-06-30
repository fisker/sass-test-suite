export default [
  {
    name: 'append/input.scss',
    data: 'a {b: append(c d, e)}\n',
  },
  {
    name: 'append/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'append/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.append instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: append(c d, e)}\n  |       ^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'index/input.scss',
    data: 'a {b: index(a b c, b)}\n',
  },
  {
    name: 'index/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'index/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.index instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: index(a b c, b)}\n  |       ^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'is-bracketed/input.scss',
    data: 'a {b: is-bracketed(a b c)}\n',
  },
  {
    name: 'is-bracketed/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'is-bracketed/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.is-bracketed instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: is-bracketed(a b c)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'join/input.scss',
    data: 'a {b: join(c d, e f)}\n',
  },
  {
    name: 'join/output.css',
    data: 'a {\n  b: c d e f;\n}\n',
  },
  {
    name: 'join/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.join instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: join(c d, e f)}\n  |       ^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'length/input.scss',
    data: 'a {b: length(a b c)}\n',
  },
  {
    name: 'length/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'length/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.length instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: length(a b c)}\n  |       ^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'nth/input.scss',
    data: 'a {b: nth(a b c, 3)}\n',
  },
  {
    name: 'nth/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'nth/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.nth instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: nth(a b c, 3)}\n  |       ^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'list-separator/input.scss',
    data: 'a {b: list-separator(a b c)}\n',
  },
  {
    name: 'list-separator/output.css',
    data: 'a {\n  b: space;\n}\n',
  },
  {
    name: 'list-separator/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.separator instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: list-separator(a b c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'set-nth/input.scss',
    data: 'a {b: set-nth(c d e, 2, f)}\n',
  },
  {
    name: 'set-nth/output.css',
    data: 'a {\n  b: c f e;\n}\n',
  },
  {
    name: 'set-nth/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.set-nth instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: set-nth(c d e, 2, f)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'zip/input.scss',
    data: 'a {b: zip(1 2 3, c d e)}\n',
  },
  {
    name: 'zip/output.css',
    data: 'a {\n  b: 1 c, 2 d, 3 e;\n}\n',
  },
  {
    name: 'zip/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.zip instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: zip(1 2 3, c d e)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
