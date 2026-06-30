// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/syntax.hrx

export default [
  {
    name: 'empty/input.scss',
    data: 'a {b: calc()}\n',
  },
  {
    name: 'empty/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: calc()}\n  |       ^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'leading_operator/input.scss',
    data: 'a {b: calc(+ 1px)}\n',
  },
  {
    name: 'leading_operator/error',
    data: "Error: This expression can't be used in a calculation.\n  ,\n1 | a {b: calc(+ 1px)}\n  |            ^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'trailing_operator/input.scss',
    data: 'a {b: calc(1px *)}\n',
  },
  {
    name: 'trailing_operator/error',
    data: "Error: Expected expression.\n  ,\n1 | a {b: calc(1px *)}\n  |                 ^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'double_operator/input.scss',
    data: 'a {b: calc(1px ** 2px)}\n',
  },
  {
    name: 'double_operator/error',
    data: "Error: Expected expression.\n  ,\n1 | a {b: calc(1px ** 2px)}\n  |                 ^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'multiple_args/input.scss',
    data: 'a {b: calc(1px, 2px)}\n',
  },
  {
    name: 'multiple_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: calc(1px, 2px)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'unknown_operator/input.scss',
    data: 'a {b: calc(1px % 2px)}\n',
  },
  {
    name: 'unknown_operator/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: calc(1px % 2px)}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'hash/input.scss',
    data: 'a {b: calc(#)}\n',
  },
  {
    name: 'hash/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: calc(#)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'dollar/input.scss',
    data: 'a {b: calc($)}\n',
  },
  {
    name: 'dollar/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: calc($)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'interpolation/in_function_arg/input.scss',
    data: 'a {b: calc(c(~#{d}))}\n',
  },
  {
    name: 'interpolation/in_function_arg/error',
    data: 'Error: expected ")".\n  ,\n1 | a {b: calc(c(~#{d}))}\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'interpolation/line_noise/input.scss',
    data: '// Interpolation no longer shifts the parser into a special mode where it allows\n// any interpolated declaration value.\na {b: calc(!{@}#$%^&*#{c}_-[+]=)}\n',
  },
  {
    name: 'interpolation/line_noise/error',
    data: 'Error: expected ")".\n  ,\n3 | a {b: calc(!{@}#$%^&*#{c}_-[+]=)}\n  |            ^\n  \'\n  input.scss 3:12  root stylesheet\n',
  },
  {
    name: 'no_whitespace/plus/before/input.scss',
    data: 'a {b: calc(1+ 1)}\n',
  },
  {
    name: 'no_whitespace/plus/before/error',
    data: 'Error: "+" and "-" must be surrounded by whitespace in calculations.\n  ,\n1 | a {b: calc(1+ 1)}\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
  {
    name: 'no_whitespace/plus/after/input.scss',
    data: 'a {b: calc(1 +1)}\n',
  },
  {
    name: 'no_whitespace/plus/after/error',
    data: 'DEPRECATION WARNING [strict-unary]: This operation is parsed as:\n\n    1 + 1\n\nbut you may have intended it to mean:\n\n    1 (+1)\n\nAdd a space after + to clarify that it\'s meant to be a binary operation, or wrap\nit in parentheses to make it a unary operation. This will be an error in future\nversions of Sass.\n\nMore info and automated migrator: https://sass-lang.com/d/strict-unary\n\n  ,\n1 | a {b: calc(1 +1)}\n  |            ^^^^\n  \'\n    input.scss 1:12  root stylesheet\n\nError: "+" and "-" must be surrounded by whitespace in calculations.\n  ,\n1 | a {b: calc(1 +1)}\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'no_whitespace/plus/both/input.scss',
    data: 'a {b: calc(1+1)}\n',
  },
  {
    name: 'no_whitespace/plus/both/error',
    data: 'Error: "+" and "-" must be surrounded by whitespace in calculations.\n  ,\n1 | a {b: calc(1+1)}\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
  {
    name: 'no_whitespace/minus/before/input.scss',
    data: 'a {b: calc(1- 1)}\n',
  },
  {
    name: 'no_whitespace/minus/before/error',
    data: 'Error: "+" and "-" must be surrounded by whitespace in calculations.\n  ,\n1 | a {b: calc(1- 1)}\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
  {
    name: 'no_whitespace/minus/after/input.scss',
    data: 'a {b: calc(1 -1)}\n',
  },
  {
    name: 'no_whitespace/minus/after/error',
    data: 'Error: "+" and "-" must be surrounded by whitespace in calculations.\n  ,\n1 | a {b: calc(1 -1)}\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'no_whitespace/minus/both/input.scss',
    data: 'a {b: calc(1-1)}\n',
  },
  {
    name: 'no_whitespace/minus/both/error',
    data: 'Error: "+" and "-" must be surrounded by whitespace in calculations.\n  ,\n1 | a {b: calc(1-1)}\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
]
