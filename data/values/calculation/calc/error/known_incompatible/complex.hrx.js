// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/known_incompatible/complex.hrx

export default [
  {
    name: 'unitless/and_numerator/input.scss',
    data: 'a {b: calc(1 + 1px)}\n',
  },
  {
    name: 'unitless/and_numerator/error',
    data: "Error: 1 and 1px are incompatible.\n  ,\n1 | a {b: calc(1 + 1px)}\n  |            ^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'unitless/and_denominator/input.scss',
    data: 'a {b: calc(1 + 1/1px)}\n',
  },
  {
    name: 'unitless/and_denominator/error',
    data: "Error: Number calc(1 / 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1 + 1/1px)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'numerator_and_denominator/input.scss',
    data: 'a {b: calc(1px + 1/1px)}\n',
  },
  {
    name: 'numerator_and_denominator/error',
    data: "Error: Number calc(1 / 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1px + 1/1px)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'numerator_and_numerators/input.scss',
    data: 'a {b: calc(1px + 1px*1px)}\n',
  },
  {
    name: 'numerator_and_numerators/error',
    data: "Error: Number calc(1px * 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1px + 1px*1px)}\n  |            ^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'denominator_and_denominators/input.scss',
    data: 'a {b: calc(1/1px + 1/1px/1px)}\n',
  },
  {
    name: 'denominator_and_denominators/error',
    data: "Error: Number calc(1 / 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1/1px + 1/1px/1px)}\n  |            ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'mismatched_numerators/input.scss',
    data: 'a {b: calc(1px*1s + 1px*1px)}\n',
  },
  {
    name: 'mismatched_numerators/error',
    data: "Error: Number calc(1px * 1s) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1px*1s + 1px*1px)}\n  |            ^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'mismatched_denominators/input.scss',
    data: 'a {b: calc(1/1px/1s + 1/1px/1px)}\n',
  },
  {
    name: 'mismatched_denominators/error',
    data: "Error: Number calc(1 / 1px / 1s) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1/1px/1s + 1/1px/1px)}\n  |            ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
