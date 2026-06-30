export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `calc-size()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'one_arg/input.scss',
    data: 'a {b: calc-size(var(--foo))}\n',
  },
  {
    name: 'one_arg/output.css',
    data: 'a {\n  b: calc-size(var(--foo));\n}\n',
  },
  {
    name: 'unsimplified/input.scss',
    data: 'a {b: calc-size(auto, 5% - 20px + size)}\n',
  },
  {
    name: 'unsimplified/output.css',
    data: 'a {\n  b: calc-size(auto, 5% - 20px + size);\n}\n',
  },
  {
    name: 'simplified/input.scss',
    data: 'a {b: calc-size(auto, 100px - 20px + size)}\n',
  },
  {
    name: 'simplified/output.css',
    data: 'a {\n  b: calc-size(auto, 80px + size);\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: CaLc-size(auto, size - 20px)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: calc-size(auto, size - 20px);\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function calc-size($arg) {@return $arg}\na {b: calc-size(1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: calc-size()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: calc-size()}\n  |       ^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: calc-size(auto, 0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,\n1 | a {b: calc-size(auto, 0, 0)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: calc-size(auto, $)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: calc-size(auto, $)}\n  |                        ^\n  '\n  input.scss 1:24  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: calc-size(auto, 7 % 3)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: calc-size(auto, 7 % 3)}\n  |                         ^\n  '\n  input.scss 1:25  root stylesheet\n",
  },
]
