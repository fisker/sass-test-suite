export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `round()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'too_few_args/input.scss',
    data: 'a {b: round()}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: round()}\n  |       ^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: 'a {b: round(1, 2, 3, 4)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n  ,\n1 | a {b: round(1, 2, 3, 4)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'one_argument/sass_script/variable_named_argument/input.scss',
    data: 'a {b: round($number: var(--c))}\n',
  },
  {
    name: 'one_argument/sass_script/variable_named_argument/error',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.round instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: round($number: var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: $number: var(--c) is not a number.\n  ,\n1 | a {b: round($number: var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'one_argument/type/input.scss',
    data: 'a {b: round("0")}\n',
  },
  {
    name: 'one_argument/type/error',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.round instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: round("0")}\n  |       ^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n\nError: $number: "0" is not a number.\n  ,\n1 | a {b: round("0")}\n  |       ^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'one_argument/syntax/invalid_arg/input.scss',
    data: 'a {b: round($)}\n',
  },
  {
    name: 'one_argument/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: round($)}\n  |              ^\n  '\n  input.scss 1:14  root stylesheet\n",
  },
  {
    name: 'two_argument/units/real_and_unitless/input.scss',
    data: 'a {b: round(10px, 5)}\n',
  },
  {
    name: 'two_argument/units/real_and_unitless/error',
    data: "Error: 10px and 5 are incompatible.\n  ,\n1 | a {b: round(10px, 5)}\n  |             ^^^^ 10px\n  |                   = 5\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'two_argument/units/known_incompatible/input.scss',
    data: 'a {b: round(10deg, 5px)}\n',
  },
  {
    name: 'two_argument/units/known_incompatible/error',
    data: "Error: 10deg and 5px are incompatible.\n  ,\n1 | a {b: round(10deg, 5px)}\n  |             ^^^^^ 10deg\n  |                    === 5px\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'two_argument/units/complex_and_unknown/input.scss',
    data: 'a {b: round(1px*2px, 10%)}\n',
  },
  {
    name: 'two_argument/units/complex_and_unknown/error',
    data: "Error: Number calc(2px * 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: round(1px*2px, 10%)}\n  |             ^^^^^^^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'two_argument/missing_step/input.scss',
    data: 'a {b: round(nearest, 5)}\n',
  },
  {
    name: 'two_argument/missing_step/error',
    data: "Error: If strategy is not null, step is required.\n  ,\n1 | a {b: round(nearest, 5)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'two_argument/x_type/input.scss',
    data: 'a {b: round(0, "0")}\n',
  },
  {
    name: 'two_argument/x_type/error',
    data: 'Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n1 | a {b: round(0, "0")}\n  |       ^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:math\n1 | @function round($number) {\n  |           ============== declaration\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'two_argument/y_type/input.scss',
    data: 'a {b: round("0", 0)}\n',
  },
  {
    name: 'two_argument/y_type/error',
    data: 'Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n1 | a {b: round("0", 0)}\n  |       ^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:math\n1 | @function round($number) {\n  |           ============== declaration\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'two_argument/sass_script/input.scss',
    data: 'a {b: round(7 % 3, 1)}\n',
  },
  {
    name: 'two_argument/sass_script/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n1 | a {b: round(7 % 3, 1)}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:math\n1 | @function round($number) {\n  |           ============== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'three_argument/strategy/operation/input.scss',
    data: 'a {\n  e: round(10px + 2px, 8px, 9px);\n}',
  },
  {
    name: 'three_argument/strategy/operation/error',
    data: "Error: 12px must be either nearest, up, down or to-zero.\n  ,\n2 |   e: round(10px + 2px, 8px, 9px);\n  |      ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
  {
    name: 'three_argument/strategy_type/input.scss',
    data: '$wrong_input: "nearest";\na {b: round($wrong_input, 0, 0)}\n',
  },
  {
    name: 'three_argument/strategy_type/error',
    data: 'Error: Value "nearest" can\'t be used in a calculation.\n  ,\n2 | a {b: round($wrong_input, 0, 0)}\n  |             ^^^^^^^^^^^^\n  \'\n  input.scss 2:13  root stylesheet\n',
  },
  {
    name: 'three_argument/number_type/input.scss',
    data: '$wrong_input: "0";\na {b: round(nearest, $wrong_input, 0)}\n',
  },
  {
    name: 'three_argument/number_type/error',
    data: 'Error: Value "0" can\'t be used in a calculation.\n  ,\n2 | a {b: round(nearest, $wrong_input, 0)}\n  |                      ^^^^^^^^^^^^\n  \'\n  input.scss 2:22  root stylesheet\n',
  },
  {
    name: 'three_argument/step_type/input.scss',
    data: '$wrong_input: "0";\na {b: round(nearest, 0, $wrong_input)}\n',
  },
  {
    name: 'three_argument/step_type/error',
    data: 'Error: Value "0" can\'t be used in a calculation.\n  ,\n2 | a {b: round(nearest, 0, $wrong_input)}\n  |                         ^^^^^^^^^^^^\n  \'\n  input.scss 2:25  root stylesheet\n',
  },
]
