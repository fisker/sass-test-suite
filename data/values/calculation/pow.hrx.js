// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/pow.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `pow()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'positive/input.scss',
    data: 'a {b: pow(10, 10)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 10000000000;\n}\n',
  },
  {
    name: 'base/negative/input.scss',
    data: 'a {b: pow(-10, 10)}\n',
  },
  {
    name: 'base/negative/output.css',
    data: 'a {\n  b: 10000000000;\n}\n',
  },
  {
    name: 'exponent/negative/input.scss',
    data: 'a {b: pow(10, -10)}\n',
  },
  {
    name: 'exponent/negative/output.css',
    data: 'a {\n  b: 0.0000000001;\n}\n',
  },
  {
    name: 'zeros/input.scss',
    data: 'a {b: pow(0, 0)}\n',
  },
  {
    name: 'zeros/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'y_infinity/positive/input.scss',
    data: 'a {b: pow(infinity, 10)}\n',
  },
  {
    name: 'y_infinity/positive/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'x_infinity/positive/input.scss',
    data: 'a {b: pow(10, infinity)}\n',
  },
  {
    name: 'x_infinity/positive/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {b: pow(3px - 1px + var(--c), 4px + 10px)}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: pow(2px + var(--c), 14px);\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: pOw(10, 10)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 10000000000;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function pow($arg) {@return $arg}\na {b: pow(1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/units/compatible/input.scss',
    data: 'a {b: pow(10px, 10px)}\n',
  },
  {
    name: 'error/units/compatible/error',
    data: "Error: Expected 10px to have no units.\n  ,\n1 | a {b: pow(10px, 10px)}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/unknown_and_unitless/input.scss',
    data: 'a {b: pow(10%, 10)}\n',
  },
  {
    name: 'error/units/unknown_and_unitless/error',
    data: "Error: Expected 10% to have no units.\n  ,\n1 | a {b: pow(10%, 10)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/real_and_unitless/input.scss',
    data: 'a {b: pow(10px, 10)}\n',
  },
  {
    name: 'error/units/real_and_unitless/error',
    data: "Error: Expected 10px to have no units.\n  ,\n1 | a {b: pow(10px, 10)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: pow(10, $)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: pow(10, $)}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'error/base_type/input.scss',
    data: 'a {b: pow(0, "0")}\n',
  },
  {
    name: 'error/base_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: pow(0, "0")}\n  |              ^^^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'error/exponent_type/input.scss',
    data: 'a {b: pow("0", 0)}\n',
  },
  {
    name: 'error/exponent_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: pow("0", 0)}\n  |           ^^^\n  \'\n  input.scss 1:11  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: pow(3)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: 2 arguments required, but only 1 was passed.\n  ,\n1 | a {b: pow(3)}\n  |       ^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: pow(3, 2, 1)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,\n1 | a {b: pow(3, 2, 1)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: pow(7 % 3, 1)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: pow(7 % 3, 1)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
]
