// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/exp.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `exp()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'zero/input.scss',
    data: 'a {b: exp(0)}\n',
  },
  {
    name: 'zero/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'positive/input.scss',
    data: 'a {b: exp(5)}\n',
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 148.4131591026;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: 'a {b: exp(-10.5)}\n',
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: 0.0000275364;\n}\n',
  },
  {
    name: 'result_is_infinity/input.scss',
    data: 'a {b: exp(1000.65)}\n',
  },
  {
    name: 'result_is_infinity/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: exp(1px + 2px - var(--c))\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: exp(3px - var(--c));\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: ExP(5)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 148.4131591026;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function exp($arg) {@return $arg}\na {b: exp(1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/units/unknown/input.scss',
    data: 'a {b: exp(1%)}\n',
  },
  {
    name: 'error/units/unknown/error',
    data: "Error: Expected 1% to have no units.\n  ,\n1 | a {b: exp(1%)}\n  |       ^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/unit/known/input.scss',
    data: 'a {b: exp(1px)}\n',
  },
  {
    name: 'error/unit/known/error',
    data: "Error: Expected 1px to have no units.\n  ,\n1 | a {b: exp(1px)}\n  |       ^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: 'a {b: exp("0")}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: exp("0")}\n  |           ^^^\n  \'\n  input.scss 1:11  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: exp()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: exp()}\n  |       ^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: exp(0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: exp(0, 0)}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: exp($)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: exp($)}\n  |            ^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: exp(7 % 3)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: exp(7 % 3)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
]
