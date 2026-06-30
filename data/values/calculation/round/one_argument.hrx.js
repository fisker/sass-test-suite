export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `round()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'zero/input.scss',
    data: 'a {b: round(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: 'a {b: round(1)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: round(-5.6)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -6;\n}\n',
  },
  {
    name: 'preserves_units/input.scss',
    data: 'a {b: round(-7px / 4em) * 1em}\n',
  },
  {
    name: 'preserves_units/output.css',
    data: 'a {\n  b: -2px;\n}\n',
  },
  {
    name: 'preserves_units/warning',
    data: "DEPRECATION WARNING [global-builtin]: In future versions of Sass, round() will be interpreted as a CSS round() calculation. This requires an explicit modulus when rounding numbers with units. If you want to use the Sass function, call math.round() instead.\n\nSee https://sass-lang.com/d/import\n\n  ,\n1 | a {b: round(-7px / 4em) * 1em}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'preserves_single_unit/input.scss',
    data: 'a {b: round(1 + 1px)}\n',
  },
  {
    name: 'preserves_single_unit/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'preserves_single_unit/warning',
    data: "DEPRECATION WARNING [global-builtin]: In future versions of Sass, round() will be interpreted as the CSS round() calculation. This doesn't allow unitless numbers to be mixed with numbers with units. If you want to use the Sass function, call math.round() instead.\n\nSee https://sass-lang.com/d/import\n\n  ,\n1 | a {b: round(1 + 1px)}\n  |             ^^^^^^^\n  '\n    input.scss 1:13  root stylesheet\n\nDEPRECATION WARNING [global-builtin]: In future versions of Sass, round() will be interpreted as a CSS round() calculation. This requires an explicit modulus when rounding numbers with units. If you want to use the Sass function, call math.round() instead.\n\nSee https://sass-lang.com/d/import\n\n  ,\n1 | a {b: round(1 + 1px)}\n  |       ^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'preserved/variable/input.scss',
    data: 'a {\n  b: round(var(--c))\n}\n',
  },
  {
    name: 'preserved/variable/output.css',
    data: 'a {\n  b: round(var(--c));\n}\n',
  },
  {
    name: 'sass_script/input.scss',
    data: 'a {b: round($number: -3)}\n',
  },
  {
    name: 'sass_script/output.css',
    data: 'a {\n  b: -3;\n}\n',
  },
  {
    name: 'sass_script/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.round instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: round($number: -3)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'math/slash_as_division/input.scss',
    data: 'b {\n  a: 2px / round(1.5);\n}\n',
  },
  {
    name: 'math/slash_as_division/output.css',
    data: 'b {\n  a: 1px;\n}\n',
  },
  {
    name: 'math/slash_as_division/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(2px, round(1.5)) or calc(2px / round(1.5))\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 |   a: 2px / round(1.5);\n  |      ^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'calc_unsafe_in_binary_operator/input.scss',
    data: '// Regression test for sass/dart-sass#2523\nb {\n  a: round(-(1) + 2);\n}\n',
  },
  {
    name: 'calc_unsafe_in_binary_operator/output.css',
    data: 'b {\n  a: 1;\n}\n',
  },
  {
    name: 'calc_unsafe_in_binary_operator/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.round instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 |   a: round(-(1) + 2);\n  |      ^^^^^^^^^^^^^^^\n  '\n    input.scss 3:6  root stylesheet\n",
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: rOuNd(1)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function round($arg) {@return $arg}\na {b: round(1.1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1.1;\n}\n',
  },
  {
    name: 'unsimplifiable/input.scss',
    data: 'a {b: round(1px + 2px - var(--c))}\n',
  },
  {
    name: 'unsimplifiable/output.css',
    data: 'a {\n  b: round(3px - var(--c));\n}\n',
  },
]
