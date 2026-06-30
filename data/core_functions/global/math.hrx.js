export default [
  {
    name: 'percentage/input.scss',
    data: 'a {b: percentage(0.5)}\n',
  },
  {
    name: 'percentage/output.css',
    data: 'a {\n  b: 50%;\n}\n',
  },
  {
    name: 'percentage/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.percentage instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: percentage(0.5)}\n  |       ^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'round/input.scss',
    data: 'a {b: round(0.5)}\n',
  },
  {
    name: 'round/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'ceil/input.scss',
    data: 'a {b: ceil(0.5)}\n',
  },
  {
    name: 'ceil/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'ceil/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.ceil instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: ceil(0.5)}\n  |       ^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'floor/input.scss',
    data: 'a {b: floor(0.5)}\n',
  },
  {
    name: 'floor/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'floor/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.floor instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: floor(0.5)}\n  |       ^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'abs/input.scss',
    data: 'a {b: abs(-1)}\n',
  },
  {
    name: 'abs/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'min/input.scss',
    data: 'a {b: min(1, 2, 3)}\n',
  },
  {
    name: 'min/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'max/input.scss',
    data: 'a {b: max(1, 2, 3)}\n',
  },
  {
    name: 'max/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'random/input.scss',
    data: 'a {b: random(5) <= 5}\n',
  },
  {
    name: 'random/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'random/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.random instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: random(5) <= 5}\n  |       ^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'unit/input.scss',
    data: 'a {b: unit(5px)}\n',
  },
  {
    name: 'unit/output.css',
    data: 'a {\n  b: "px";\n}\n',
  },
  {
    name: 'unit/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.unit instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: unit(5px)}\n  |       ^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'unitless/input.scss',
    data: 'a {b: unitless(1)}\n',
  },
  {
    name: 'unitless/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unitless/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.is-unitless instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: unitless(1)}\n  |       ^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'comparable/input.scss',
    data: 'a {b: comparable(1px, 1in)}\n',
  },
  {
    name: 'comparable/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'comparable/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.compatible instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: comparable(1px, 1in)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
