export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `cos()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'deg/input.scss',
    data: 'a {b: cos(1deg)}\n',
  },
  {
    name: 'deg/output.css',
    data: 'a {\n  b: 0.9998476952;\n}\n',
  },
  {
    name: 'grad/input.scss',
    data: 'a {b: cos(1grad)}\n',
  },
  {
    name: 'grad/output.css',
    data: 'a {\n  b: 0.9998766325;\n}\n',
  },
  {
    name: 'rad/input.scss',
    data: 'a {b: cos(1rad)}\n',
  },
  {
    name: 'rad/output.css',
    data: 'a {\n  b: 0.5403023059;\n}\n',
  },
  {
    name: 'turn/input.scss',
    data: 'a {b: cos(1turn)}\n',
  },
  {
    name: 'turn/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'negative_infinity/input.scss',
    data: 'a {b: cos(-infinity)}\n',
  },
  {
    name: 'negative_infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: 'a {b: cos(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: 'a {b: cos(infinity)}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: cos(3px - 1px + var(--c));\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: cos(2px + var(--c));\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: cOs(1deg)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 0.9998476952;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function cos($arg) {@return $arg}\na {b: cos(1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/unit/unknown/input.scss',
    data: 'a {b: cos(1%)}\n',
  },
  {
    name: 'error/unit/unknown/error',
    data: "Error: $number: Expected 1% to have an angle unit (deg, grad, rad, turn).\n  ,\n1 | a {b: cos(1%)}\n  |       ^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/unit/known/input.scss',
    data: 'a {b: cos(1px)}\n',
  },
  {
    name: 'error/unit/known/error',
    data: "Error: $number: Expected 1px to have an angle unit (deg, grad, rad, turn).\n  ,\n1 | a {b: cos(1px)}\n  |       ^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/unit/complex/input.scss',
    data: 'a {b: cos(-7px / 4em)}\n',
  },
  {
    name: 'error/unit/complex/error',
    data: "Error: $number: Expected calc(-1.75px / 1em) to have an angle unit (deg, grad, rad, turn).\n  ,\n1 | a {b: cos(-7px / 4em)}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: 'a {b: cos("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: cos("0")}\n  |           ^^^\n  \'\n  input.scss 1:11  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: cos()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: cos()}\n  |       ^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: cos(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: cos(0, 0)}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: cos($)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: cos($)}\n  |            ^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: cos(7 % 3)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: cos(7 % 3)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
]
