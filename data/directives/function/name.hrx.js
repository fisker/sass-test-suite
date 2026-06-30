export default [
  {
    name: 'custom_ident/call/input.scss',
    data: '@function __a() {@return 1}\nb {c: --a()}\n',
  },
  {
    name: 'custom_ident/call/output.css',
    data: 'b {\n  c: --a();\n}\n',
  },
  {
    name: 'double_underscore/input.scss',
    data: '@function __a() {@return 1}\nb {c: __a()}\n',
  },
  {
    name: 'double_underscore/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'vendor_like_underscore/README.md',
    data: "Function names like `-moz-element()` aren't allowed, but they are with underscores.\n",
  },
  {
    name: 'vendor_like_underscore/start/input.scss',
    data: '@function _moz-element() {@return 1}\nb {c: _moz-element()}\n',
  },
  {
    name: 'vendor_like_underscore/start/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'vendor_like_underscore/middle/input.scss',
    data: '@function -moz_element() {@return 1}\nb {c: -moz_element()}\n',
  },
  {
    name: 'vendor_like_underscore/middle/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'special/README.md',
    data: 'These used to be errors, but the syntax has since been relaxed to allow them.\nSee the [function-name proposal] for details.\n\n[function-name proposal]: https://github.com/sass/sass/tree/main/accepted/function-name.md\n',
  },
  {
    name: 'special/calc/input.scss',
    data: '@function calc() {@return 1}\na {b: calc()}\n',
  },
  {
    name: 'special/calc/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'special/clamp/input.scss',
    data: '@function clamp() {@return 1}\na {b: clamp()}\n',
  },
  {
    name: 'special/clamp/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'special/expression/uppercase/input.scss',
    data: '@function EXPRESSION() {@return 1}\na {\n  b: EXPRESSION();\n}\n',
  },
  {
    name: 'special/expression/uppercase/output.css',
    data: 'a {\n  b: expression();\n}\n',
  },
  {
    name: 'special/expression/uppercase/warning',
    data: "DEPRECATION WARNING [function-name]: Custom functions with this name are deprecated and will be removed in a future\nrelease. Please choose a different name.\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | @function EXPRESSION() {@return 1}\n  |           ^^^^^^^^^^\n  '\n    input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'special/expression/prefix/input.scss',
    data: '@function -a-expression() {@return 1}\nb {\n  c: -a-expression();\n}\n',
  },
  {
    name: 'special/expression/prefix/output.css',
    data: 'b {\n  c: -a-expression();\n}\n',
  },
  {
    name: 'special/expression/prefix/warning',
    data: 'DEPRECATION WARNING [function-name]: Vendor-prefixed expression() functions will no longer have special parsing in a future release of Dart Sass. Once that happens, this argument will be parsed as SassScript. To preserve current behavior:\n\n-a-expression(#{""})\n\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n3 |   c: -a-expression();\n  |      ^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:6  root stylesheet\n',
  },
  {
    name: 'special/url/uppercase/input.scss',
    data: '@function URL() {@return 1}\na {\n  b: URL();\n}\n',
  },
  {
    name: 'special/url/uppercase/output.css',
    data: 'a {\n  b: url();\n}\n',
  },
  {
    name: 'special/url/uppercase/warning',
    data: "DEPRECATION WARNING [function-name]: Custom functions with this name are deprecated and will be removed in a future\nrelease. Please choose a different name.\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | @function URL() {@return 1}\n  |           ^^^\n  '\n    input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'special/url/prefix/input.scss',
    data: '@function -a-url() {@return 1}\nb {\n  c: -a-url();\n}\n',
  },
  {
    name: 'special/url/prefix/output.css',
    data: 'b {\n  c: url();\n}\n',
  },
  {
    name: 'special/url/prefix/warning',
    data: 'DEPRECATION WARNING [function-name]: Vendor-prefixed url() functions will no longer have special parsing in a future release of Dart Sass. Once that happens, this argument will be parsed as SassScript. To preserve current behavior:\n\nnull(#{"url()"})\n\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n3 |   c: -a-url();\n  |      ^^^^^^^^\n  \'\n    input.scss 3:6  root stylesheet\n',
  },
  {
    name: 'special/and/uppercase/input.scss',
    data: '@function AND() {@return 1}\na {b: AND()}\n',
  },
  {
    name: 'special/and/uppercase/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'special/and/prefix/input.scss',
    data: '@function -a-and() {@return 1}\nb {c: -a-and()}\n',
  },
  {
    name: 'special/and/prefix/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'special/or/uppercase/input.scss',
    data: '@function OR() {@return 1}\na {b: OR()}\n',
  },
  {
    name: 'special/or/uppercase/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'special/or/prefix/input.scss',
    data: '@function -a-or() {@return 1}\nb {c: -a-or()}\n',
  },
  {
    name: 'special/or/prefix/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'special/not/uppercase/input.scss',
    data: '@function NOT() {@return 1}\na {b: NOT()}\n',
  },
  {
    name: 'special/not/uppercase/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'special/not/prefix/input.scss',
    data: '@function -a-not() {@return 1}\nb {c: -a-not()}\n',
  },
  {
    name: 'special/not/prefix/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'special/type/prefix/input.scss',
    data: '@function -a-type() {@return 1}\nb {c: -a-type()}\n',
  },
  {
    name: 'special/type/prefix/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'special/element/no_prefix/uppercase/input.scss',
    data: '@function ELEMENT() {@return 1}\na {\n  b: ELEMENT();\n}\n',
  },
  {
    name: 'special/element/no_prefix/uppercase/output.css',
    data: 'a {\n  b: element();\n}\n',
  },
  {
    name: 'special/element/no_prefix/uppercase/warning',
    data: "DEPRECATION WARNING [function-name]: Custom functions with this name are deprecated and will be removed in a future\nrelease. Please choose a different name.\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | @function ELEMENT() {@return 1}\n  |           ^^^^^^^\n  '\n    input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'special/element/prefix/uppercase/input.scss',
    data: '@function -A-ELEMENT() {@return 1}\na {\n  b: -A-ELEMENT();\n}\n',
  },
  {
    name: 'special/element/prefix/uppercase/output.css',
    data: 'a {\n  b: -a-element();\n}\n',
  },
  {
    name: 'special/element/prefix/uppercase/warning',
    data: "DEPRECATION WARNING [function-name]: Custom functions with this name are deprecated and will be removed in a future\nrelease. Please choose a different name.\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | @function -A-ELEMENT() {@return 1}\n  |           ^^^^^^^^^^\n  '\n    input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/element/no_prefix/lowercase/input.scss',
    data: '@function element() {@return 1}\n',
  },
  {
    name: 'error/special/element/no_prefix/lowercase/error',
    data: "Error: Invalid function name.\n  ,\n1 | @function element() {@return 1}\n  |           ^^^^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/element/prefix/lowercase/input.scss',
    data: '@function -a-element() {@return 1}\n',
  },
  {
    name: 'error/special/element/prefix/lowercase/error',
    data: "Error: Invalid function name.\n  ,\n1 | @function -a-element() {@return 1}\n  |           ^^^^^^^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/expression/no_prefix/lowercase/input.scss',
    data: '@function expression() {@return 1}\n',
  },
  {
    name: 'error/special/expression/no_prefix/lowercase/error',
    data: "Error: Invalid function name.\n  ,\n1 | @function expression() {@return 1}\n  |           ^^^^^^^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/url/no_prefix/lowercase/input.scss',
    data: '@function url() {@return 1}\n',
  },
  {
    name: 'error/special/url/no_prefix/lowercase/error',
    data: "Error: Invalid function name.\n  ,\n1 | @function url() {@return 1}\n  |           ^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/and/lowercase/input.scss',
    data: '@function and() {@return 1}\n',
  },
  {
    name: 'error/special/and/lowercase/error',
    data: "Error: Invalid function name.\n  ,\n1 | @function and() {@return 1}\n  |           ^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/or/lowercase/input.scss',
    data: '@function or() {@return 1}\n',
  },
  {
    name: 'error/special/or/lowercase/error',
    data: "Error: Invalid function name.\n  ,\n1 | @function or() {@return 1}\n  |           ^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/not/lowercase/input.scss',
    data: '@function not() {@return 1}\n',
  },
  {
    name: 'error/special/not/lowercase/error',
    data: "Error: Invalid function name.\n  ,\n1 | @function not() {@return 1}\n  |           ^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/type/no_prefix/lowercase/input.scss',
    data: '@function type() {@return 1}\na {b: type()}\n',
  },
  {
    name: 'error/special/type/no_prefix/lowercase/error',
    data: "Error: This name is reserved for the plain-CSS function.\n  ,\n1 | @function type() {@return 1}\n  |           ^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'error/special/type/no_prefix/uppercase/input.scss',
    data: '@function TYPE() {@return 1}\na {b: TYPE()}\n',
  },
  {
    name: 'error/special/type/no_prefix/uppercase/error',
    data: "Error: This name is reserved for the plain-CSS function.\n  ,\n1 | @function TYPE() {@return 1}\n  |           ^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
]
