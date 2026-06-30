// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/no_operator.hrx

export default [
  {
    name: 'syntax/extra_whitespace/number/input.scss',
    data: 'a {b: calc( 1 )}\n',
  },
  {
    name: 'syntax/extra_whitespace/number/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'syntax/extra_whitespace/parens/input.scss',
    data: 'a {b: calc( ( 1 ) )}\n',
  },
  {
    name: 'syntax/extra_whitespace/parens/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'syntax/extra_whitespace/parenthesized_var/input.scss',
    data: 'a {b: calc( ( var(--c) ) )}\n',
  },
  {
    name: 'syntax/extra_whitespace/parenthesized_var/output.css',
    data: 'a {\n  b: calc((var(--c)));\n}\n',
  },
  {
    name: 'number/integer/input.scss',
    data: 'a {b: calc(1px)}\n',
  },
  {
    name: 'number/integer/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'number/leading_plus/input.scss',
    data: 'a {b: calc(+1px)}\n',
  },
  {
    name: 'number/leading_plus/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'number/leading_minus/input.scss',
    data: 'a {b: calc(-1px)}\n',
  },
  {
    name: 'number/leading_minus/output.css',
    data: 'a {\n  b: -1px;\n}\n',
  },
  {
    name: 'number/unitless/input.scss',
    data: 'a {b: calc(1)}\n',
  },
  {
    name: 'number/unitless/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'number/exponent/input.scss',
    data: 'a {b: calc(1e2px)}\n',
  },
  {
    name: 'number/exponent/output.css',
    data: 'a {\n  b: 100px;\n}\n',
  },
  {
    name: 'number/decimal/leading_digit/input.scss',
    data: 'a {b: calc(1.2px)}\n',
  },
  {
    name: 'number/decimal/leading_digit/output.css',
    data: 'a {\n  b: 1.2px;\n}\n',
  },
  {
    name: 'number/decimal/leading_dot/input.scss',
    data: 'a {b: calc(.2px)}\n',
  },
  {
    name: 'number/decimal/leading_dot/output.css',
    data: 'a {\n  b: 0.2px;\n}\n',
  },
  {
    name: 'variable/number/simple_unit/input.scss',
    data: '$a: 1px;\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/number/simple_unit/output.css',
    data: 'b {\n  c: 1px;\n}\n',
  },
  {
    name: 'variable/number/complex_unit/input.scss',
    data: '@use "sass:math";\n$a: math.div(1px*1s, 1rad);\nb {c: math.div(calc($a) * 2rad, 2s)}\n',
  },
  {
    name: 'variable/number/complex_unit/output.css',
    data: 'b {\n  c: 1px;\n}\n',
  },
  {
    name: 'variable/unquoted_string/input.scss',
    data: '$a: foobar;\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/unquoted_string/output.css',
    data: 'b {\n  c: calc(foobar);\n}\n',
  },
  {
    name: 'variable/calculation/input.scss',
    data: '$a: calc(1px + 1%);\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/calculation/output.css',
    data: 'b {\n  c: calc(1px + 1%);\n}\n',
  },
  {
    name: 'variable/namespace/input.scss',
    data: '@use "sass:math";\na {b: calc(math.$pi)}\n',
  },
  {
    name: 'variable/namespace/output.css',
    data: 'a {\n  b: 3.1415926536;\n}\n',
  },
  {
    name: 'variable/not_parsed_as_interpolation/README.md',
    data: 'Regression tests for https://github.com/sass/dart-sass/issues/1499.\n',
  },
  {
    name: 'variable/not_parsed_as_interpolation/followed_by_parenthesized_interp/input.scss',
    data: '$a: 1;\nb {\n  c: calc($a);\n  $_: ("#{\'\'}");\n}\n',
  },
  {
    name: 'variable/not_parsed_as_interpolation/followed_by_parenthesized_interp/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'variable/not_parsed_as_interpolation/parentheses_in_string/input.scss',
    data: '@function a($arg) {@return 1}\n\n$b: 2;\nc {\n  // A naive parser might check for closing parentheses regardless of string\n  // context when looking for interpolation in a calc.\n  d: calc($b + a(")#{\'\'}"));\n}\n',
  },
  {
    name: 'variable/not_parsed_as_interpolation/parentheses_in_string/output.css',
    data: 'c {\n  d: 3;\n}\n',
  },
  {
    name: 'variable/not_parsed_as_interpolation/in_comment/input.scss',
    data: "$a: 1;\nb {\n  // A naive parser might check for interpolation in a comment.\n  c: calc($a /* #{''} */);\n}\n",
  },
  {
    name: 'variable/not_parsed_as_interpolation/in_comment/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'function/css/input.scss',
    data: 'a {b: calc(c())}\n',
  },
  {
    name: 'function/css/output.css',
    data: 'a {\n  b: calc(c());\n}\n',
  },
  {
    name: 'function/sass/global/input.scss',
    data: '@function a() {@return 1px}\n\nb {c: calc(a())}\n',
  },
  {
    name: 'function/sass/global/output.css',
    data: 'b {\n  c: 1px;\n}\n',
  },
  {
    name: 'function/sass/namespace/input.scss',
    data: '@use "sass:math";\nb {c: calc(math.round(2.3))}\n',
  },
  {
    name: 'function/sass/namespace/output.css',
    data: 'b {\n  c: 2;\n}\n',
  },
  {
    name: 'function/if/input.scss',
    data: 'b {c: calc(if(true, 1, $undefined))}\n',
  },
  {
    name: 'function/if/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'function/if/warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass(true): 1; else: $undefined)\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n1 | b {c: calc(if(true, 1, $undefined))}\n  |            ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'function/min/input.scss',
    data: 'b {c: calc(min(1 2 3...))}\n',
  },
  {
    name: 'function/min/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'function/min/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.min instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | b {c: calc(min(1 2 3...))}\n  |            ^^^^^^^^^^^^^\n  '\n    input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'function/max/input.scss',
    data: 'b {c: calc(max(1 2 3...))}\n',
  },
  {
    name: 'function/max/output.css',
    data: 'b {\n  c: 3;\n}\n',
  },
  {
    name: 'function/max/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.max instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | b {c: calc(max(1 2 3...))}\n  |            ^^^^^^^^^^^^^\n  '\n    input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'var/bare/input.scss',
    data: 'a {b: calc(var(--c))}\n',
  },
  {
    name: 'var/bare/output.css',
    data: 'a {\n  b: calc(var(--c));\n}\n',
  },
  {
    name: 'calculation/calc/simplified/input.scss',
    data: 'a {b: calc(calc(1px))}\n',
  },
  {
    name: 'calculation/calc/simplified/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'calculation/calc/preserved/input.scss',
    data: 'a {b: calc(calc(1px + 1%))}\n',
  },
  {
    name: 'calculation/calc/preserved/output.css',
    data: 'a {\n  b: calc(1px + 1%);\n}\n',
  },
  {
    name: 'calculation/clamp/simplified/input.scss',
    data: 'a {b: calc(clamp(1px, 2px, 3px))}\n',
  },
  {
    name: 'calculation/clamp/simplified/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'calculation/clamp/preserved/input.scss',
    data: 'a {b: calc(clamp(1%, 2px, 3%))}\n',
  },
  {
    name: 'calculation/clamp/preserved/output.css',
    data: 'a {\n  b: clamp(1%, 2px, 3%);\n}\n',
  },
  {
    name: 'calculation/min/simplified/input.scss',
    data: 'a {b: calc(min(1px, 2px))}\n',
  },
  {
    name: 'calculation/min/simplified/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'calculation/min/preserved/input.scss',
    data: 'a {b: calc(min(1%, 2px))}\n',
  },
  {
    name: 'calculation/min/preserved/output.css',
    data: 'a {\n  b: min(1%, 2px);\n}\n',
  },
  {
    name: 'calculation/max/simplified/input.scss',
    data: 'a {b: calc(max(1px, 2px))}\n',
  },
  {
    name: 'calculation/max/simplified/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'calculation/max/preserved/input.scss',
    data: 'a {b: calc(max(1%, 2px))}\n',
  },
  {
    name: 'calculation/max/preserved/output.css',
    data: 'a {\n  b: max(1%, 2px);\n}\n',
  },
  {
    name: 'interpolation/number/input.scss',
    data: "// Although interpolation may return a value that looks like a valid `calc()`,\n// it's always treated as an unquoted string.\na {b: calc(#{1px + 2px})}\n",
  },
  {
    name: 'interpolation/number/output.css',
    data: 'a {\n  b: calc(3px);\n}\n',
  },
  {
    name: 'interpolation/parens/input.scss',
    data: '// Interpolation is isolated to a single parenthesized context, so the\n// parentheses themselves are stripped off.\na {b: calc((#{1px + 2px}))}\n',
  },
  {
    name: 'interpolation/parens/output.css',
    data: 'a {\n  b: calc((3px));\n}\n',
  },
  {
    name: 'interpolation/nested/input.scss',
    data: 'a {b: calc(calc(#{c}))}\n',
  },
  {
    name: 'interpolation/nested/output.css',
    data: 'a {\n  b: calc(c);\n}\n',
  },
  {
    name: 'extra_whitespace/input.scss',
    data: 'a {b: calc( 1px )}\n',
  },
  {
    name: 'extra_whitespace/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: CaLc(1px)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
]
