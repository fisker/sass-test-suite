export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `sin()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'deg/input.scss',
    data: 'a {b: sin(1deg)}\n',
  },
  {
    name: 'deg/output.css',
    data: 'a {\n  b: 0.0174524064;\n}\n',
  },
  {
    name: 'grad/input.scss',
    data: 'a {b: sin(1grad)}\n',
  },
  {
    name: 'grad/output.css',
    data: 'a {\n  b: 0.0157073173;\n}\n',
  },
  {
    name: 'rad/input.scss',
    data: 'a {b: sin(1rad)}\n',
  },
  {
    name: 'rad/output.css',
    data: 'a {\n  b: 0.8414709848;\n}\n',
  },
  {
    name: 'turn/input.scss',
    data: 'a {b: sin(1turn)}\n',
  },
  {
    name: 'turn/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'negative_infinity/input.scss',
    data: 'a {b: sin(-infinity)}\n',
  },
  {
    name: 'negative_infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'negative_one/input.scss',
    data: 'a {b: sin(-1)}\n',
  },
  {
    name: 'negative_one/output.css',
    data: 'a {\n  b: -0.8414709848;\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: 'a {b: sin(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: 'a {b: sin(infinity)}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: sin(3px - 1px + var(--c));\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: sin(2px + var(--c));\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: SiN(1deg)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 0.0174524064;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function sin($arg) {@return $arg}\na {b: sin(1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/units/unknown/input.scss',
    data: 'a {b: sin(1%)}\n',
  },
  {
    name: 'error/units/unknown/error',
    data: "Error: $number: Expected 1% to have an angle unit (deg, grad, rad, turn).\n  ,\n1 | a {b: sin(1%)}\n  |       ^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/known/input.scss',
    data: 'a {b: sin(1px)}\n',
  },
  {
    name: 'error/units/known/error',
    data: "Error: $number: Expected 1px to have an angle unit (deg, grad, rad, turn).\n  ,\n1 | a {b: sin(1px)}\n  |       ^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/complex/input.scss',
    data: 'a {b: sin(-7px / 4em)}\n',
  },
  {
    name: 'error/units/complex/error',
    data: "Error: $number: Expected calc(-1.75px / 1em) to have an angle unit (deg, grad, rad, turn).\n  ,\n1 | a {b: sin(-7px / 4em)}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: 'a {b: sin("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: sin("0")}\n  |           ^^^\n  \'\n  input.scss 1:11  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: sin()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: sin()}\n  |       ^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: sin(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: sin(0, 0)}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: sin($)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: sin($)}\n  |            ^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: sin(7 % 3)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: sin(7 % 3)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
]
