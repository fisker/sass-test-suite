export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `log()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: log(-1)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'zero/input.scss',
    data: 'a {b: log(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: 'a {b: log(2)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 0.6931471806;\n}\n',
  },
  {
    name: 'infinity/input.scss',
    data: 'a {b: log(infinity)}\n',
  },
  {
    name: 'infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'base/negative/input.scss',
    data: 'a {b: log(2, -1)}\n',
  },
  {
    name: 'base/negative/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'base/zero/input.scss',
    data: 'a {b: log(2, 0)}\n',
  },
  {
    name: 'base/zero/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'base/between_zero_and_one/input.scss',
    data: 'a {b: log(2, 0.5)}\n',
  },
  {
    name: 'base/between_zero_and_one/output.css',
    data: 'a {\n  b: -1;\n}\n',
  },
  {
    name: 'base/one/input.scss',
    data: 'a {b: log(2, 1)}\n',
  },
  {
    name: 'base/one/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'base/positive/input.scss',
    data: 'a {b: log(2, 10)}\n',
  },
  {
    name: 'base/positive/output.css',
    data: 'a {\n  b: 0.3010299957;\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: log(3px - 1px + var(--c), var(--e));\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: log(2px + var(--c), var(--e));\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: LoG(2)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 0.6931471806;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function log($arg) {@return $arg}\na {b: log(2)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'error/units/unknown/input.scss',
    data: 'a {b: log(1%)}\n',
  },
  {
    name: 'error/units/unknown/error',
    data: "Error: Expected 1% to have no units.\n  ,\n1 | a {b: log(1%)}\n  |       ^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/unitless_and_real/input.scss',
    data: 'a {b: log(1, 1px)}\n',
  },
  {
    name: 'error/units/unitless_and_real/error',
    data: "Error: Expected 1px to have no units.\n  ,\n1 | a {b: log(1, 1px)}\n  |       ^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/known_incompatible/input.scss',
    data: 'a {b: log(1deg, 1px)}\n',
  },
  {
    name: 'error/units/known_incompatible/error',
    data: "Error: Expected 1deg to have no units.\n  ,\n1 | a {b: log(1deg, 1px)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/complex_and_unknown/input.scss',
    data: 'a {b: log(1px*2px, 10%)}\n',
  },
  {
    name: 'error/units/complex_and_unknown/error',
    data: "Error: Expected calc(2px * 1px) to have no units.\n  ,\n1 | a {b: log(1px*2px, 10%)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/units/known/input.scss',
    data: 'a {b: log(3px)}\n',
  },
  {
    name: 'error/units/known/error',
    data: "Error: Expected 3px to have no units.\n  ,\n1 | a {b: log(3px)}\n  |       ^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/number_type/input.scss',
    data: 'a {b: log("0")}\n',
  },
  {
    name: 'error/number_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: log("0")}\n  |           ^^^\n  \'\n  input.scss 1:11  root stylesheet\n',
  },
  {
    name: 'error/base_type/input.scss',
    data: 'a {b: log(0, "0")}\n',
  },
  {
    name: 'error/base_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: log(0, "0")}\n  |              ^^^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: log()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: log()}\n  |       ^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: log(0, 0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,\n1 | a {b: log(0, 0, 0)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: log($, 10)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: log($, 10)}\n  |            ^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: log(7 % 3)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: log(7 % 3)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
]
