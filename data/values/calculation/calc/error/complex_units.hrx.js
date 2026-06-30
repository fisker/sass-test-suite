export default [
  {
    name: 'multiple_numerator/within_calc/input.scss',
    data: 'a {b: calc(1% + 1px * 2px)}\n',
  },
  {
    name: 'multiple_numerator/within_calc/error',
    data: "Error: Number calc(2px * 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1% + 1px * 2px)}\n  |            ^^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'multiple_numerator/from_variable/input.scss',
    data: '$a: 1px * 2px;\nb {c: calc(1% + $a)}\n',
  },
  {
    name: 'multiple_numerator/from_variable/error',
    data: "Error: Number calc(2px * 1px) isn't compatible with CSS calculations.\n  ,\n2 | b {c: calc(1% + $a)}\n  |            ^^^^^^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'denominator/within_calc/input.scss',
    data: 'a {b: calc(1% + 1 / 2px)}\n',
  },
  {
    name: 'denominator/within_calc/error',
    data: "Error: Number calc(0.5 / 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1% + 1 / 2px)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'denominator/from_variable/input.scss',
    data: '@use "sass:math";\n$a: math.div(1, 2px);\nb {c: calc(1% + $a)}\n',
  },
  {
    name: 'denominator/from_variable/error',
    data: "Error: Number calc(0.5 / 1px) isn't compatible with CSS calculations.\n  ,\n3 | b {c: calc(1% + $a)}\n  |            ^^^^^^^\n  '\n  input.scss 3:12  root stylesheet\n",
  },
  {
    name: 'numerator_and_denominator/within_calc/input.scss',
    data: 'a {b: calc(1% + 1s / 2px)}\n',
  },
  {
    name: 'numerator_and_denominator/within_calc/error',
    data: "Error: Number calc(0.5s / 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: calc(1% + 1s / 2px)}\n  |            ^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'numerator_and_denominator/from_variable/input.scss',
    data: '@use "sass:math";\n$a: math.div(1s, 2px);\nb {c: calc(1% + $a)}\n',
  },
  {
    name: 'numerator_and_denominator/from_variable/error',
    data: "Error: Number calc(0.5s / 1px) isn't compatible with CSS calculations.\n  ,\n3 | b {c: calc(1% + $a)}\n  |            ^^^^^^^\n  '\n  input.scss 3:12  root stylesheet\n",
  },
]
