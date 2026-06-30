export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `acos()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'less_than_negative_one/input.scss',
    data: 'a {b: acos(-2)}\n',
  },
  {
    name: 'less_than_negative_one/output.css',
    data: 'a {\n  b: calc(NaN * 1deg);\n}\n',
  },
  {
    name: 'negative_one/input.scss',
    data: 'a {b: acos(-1)}\n',
  },
  {
    name: 'negative_one/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: 'a {b: acos(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 90deg;\n}\n',
  },
  {
    name: 'one/input.scss',
    data: 'a {b: acos(1)}\n',
  },
  {
    name: 'one/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'greater_than_one/input.scss',
    data: 'a {b: acos(2)}\n',
  },
  {
    name: 'greater_than_one/output.css',
    data: 'a {\n  b: calc(NaN * 1deg);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: acos(3px - 1px + var(--c));\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: acos(2px + var(--c));\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: AcOs(1)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 0deg;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function acos($arg) {@return $arg}\na {b: acos(1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/unit/unknown/input.scss',
    data: 'a {b: acos(1%)}\n',
  },
  {
    name: 'error/unit/unknown/error',
    data: "Error: Expected 1% to have no units.\n  ,\n1 | a {b: acos(1%)}\n  |       ^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/unit/known/input.scss',
    data: 'a {b: acos(1px)}\n',
  },
  {
    name: 'error/unit/known/error',
    data: "Error: Expected 1px to have no units.\n  ,\n1 | a {b: acos(1px)}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/unit/complex/input.scss',
    data: 'a {b: acos(-7px / 4em)}\n',
  },
  {
    name: 'error/unit/complex/error',
    data: "Error: Expected calc(-1.75px / 1em) to have no units.\n  ,\n1 | a {b: acos(-7px / 4em)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: 'a {b: acos("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: acos("0")}\n  |            ^^^\n  \'\n  input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: acos()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: acos()}\n  |       ^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: acos(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: acos(0, 0)}\n  |       ^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: acos($)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: acos($)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: acos(7 % 3)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: acos(7 % 3)}\n  |              ^\n  '\n  input.scss 1:14  root stylesheet\n",
  },
]
