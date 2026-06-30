export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `sqrt()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'zero/input.scss',
    data: 'a {b: sqrt(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'units/unitless/input.scss',
    data: 'a {b: sqrt(2)}\n',
  },
  {
    name: 'units/unitless/output.css',
    data: 'a {\n  b: 1.4142135624;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: sqrt(-9)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: sqrt(1px + 2px - var(--c))\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: sqrt(3px - var(--c));\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: sQrT(2)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 1.4142135624;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function sqrt($arg) {@return $arg}\na {b: sqrt(2)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'error/units/unknown/input.scss',
    data: 'a {b: sqrt(1%)}\n',
  },
  {
    name: 'error/units/unknown/error',
    data: "Error: Expected 1% to have no units.\n  ,\n1 | a {b: sqrt(1%)}\n  |       ^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/real/input.scss',
    data: 'a {b: sqrt(16px)}\n',
  },
  {
    name: 'error/units/real/error',
    data: "Error: Expected 16px to have no units.\n  ,\n1 | a {b: sqrt(16px)}\n  |       ^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: 'a {b: sqrt("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: sqrt("0")}\n  |            ^^^\n  \'\n  input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'error/syntax/too_few_args/input.scss',
    data: 'a {b: sqrt()}\n',
  },
  {
    name: 'error/syntax/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: sqrt()}\n  |       ^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: sqrt($)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: sqrt($)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: sqrt(3, 4)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: sqrt(3, 4)}\n  |       ^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: sqrt(7 % 3)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: sqrt(7 % 3)}\n  |              ^\n  '\n  input.scss 1:14  root stylesheet\n",
  },
]
