// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/hypot.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `hypot()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'units/none/input.scss',
    data: 'a {b: hypot(3, 4, 5, 6, 7)}\n',
  },
  {
    name: 'units/none/output.css',
    data: 'a {\n  b: 11.6189500386;\n}\n',
  },
  {
    name: 'units/compatible/input.scss',
    data: 'a {b: hypot(13cm, 4mm, 5q, 6in, 7px)}\n',
  },
  {
    name: 'units/compatible/output.css',
    data: 'a {\n  b: 20.0366545892cm;\n}\n',
  },
  {
    name: 'units/real_and_unknown/input.scss',
    data: 'a {b: hypot(13cm, 4%)}\n',
  },
  {
    name: 'units/real_and_unknown/output.css',
    data: 'a {\n  b: hypot(13cm, 4%);\n}\n',
  },
  {
    name: 'units/unknown/input.scss',
    data: 'a {\n  b: hypot(1%, 2%);\n}\n',
  },
  {
    name: 'units/unknown/output.css',
    data: 'a {\n  b: hypot(1%, 2%);\n}\n',
  },
  {
    name: 'units/fake/input.scss',
    data: 'a {\n  b: hypot(1foo, 2bar);\n}\n',
  },
  {
    name: 'units/fake/output.css',
    data: 'a {\n  b: hypot(1foo, 2bar);\n}\n',
  },
  {
    name: 'units/same_fake/input.scss',
    data: 'a {\n  b: hypot(1foo, 2foo);\n}\n',
  },
  {
    name: 'units/same_fake/output.css',
    data: 'a {\n  b: 2.2360679775foo;\n}\n',
  },
  {
    name: 'units/real_and_fake/input.scss',
    data: 'a {\n  b: hypot(1px, 2bar);\n}\n',
  },
  {
    name: 'units/real_and_fake/output.css',
    data: 'a {\n  b: hypot(1px, 2bar);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: hypot(1px + 2px - var(--c), -7px + 4em)\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: hypot(3px - var(--c), -7px + 4em);\n}\n',
  },
  {
    name: 'infinity/first/input.scss',
    data: 'a {b: hypot(infinity, 1, 1)}\n',
  },
  {
    name: 'infinity/first/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'infinity/second/input.scss',
    data: 'a {b: hypot(1, infinity, 1)}\n',
  },
  {
    name: 'infinity/second/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: hYpOt(1, 2)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 2.2360679775;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function hypot($arg1, $arg2) {@return $arg1}\na {b: hypot(1, 2)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/unsimplifiable/input.scss',
    data: 'a {b: hypot(-7px / 4em)}\n',
  },
  {
    name: 'error/unsimplifiable/error',
    data: "Error: Number calc(-1.75px / 1em) isn't compatible with CSS calculations.\n  ,\n1 | a {b: hypot(-7px / 4em)}\n  |             ^^^^^^^^^^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/units/incompatible/first_and_second/input.scss',
    data: 'a {b: hypot(1deg, 1px, 1turn)}\n',
  },
  {
    name: 'error/units/incompatible/first_and_second/error',
    data: "Error: 1deg and 1px are incompatible.\n  ,\n1 | a {b: hypot(1deg, 1px, 1turn)}\n  |             ^^^^ 1deg\n  |                   === 1px\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/units/incompatible/first_and_third/input.scss',
    data: 'a {b: hypot(1deg, 1turn, 1px)}\n',
  },
  {
    name: 'error/units/incompatible/first_and_third/error',
    data: "Error: 1deg and 1px are incompatible.\n  ,\n1 | a {b: hypot(1deg, 1turn, 1px)}\n  |             ^^^^ 1deg\n  |                          === 1px\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/units/incompatible/second_and_third/input.scss',
    data: 'a {b: hypot(1turn, 1deg, 1px)}\n',
  },
  {
    name: 'error/units/incompatible/second_and_third/error',
    data: "Error: 1turn and 1px are incompatible.\n  ,\n1 | a {b: hypot(1turn, 1deg, 1px)}\n  |             ^^^^^ 1turn\n  |                          === 1px\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/units/real_and_unitless/input.scss',
    data: 'a {b: hypot(1px, 1)}\n',
  },
  {
    name: 'error/units/real_and_unitless/error',
    data: "Error: 1px and 1 are incompatible.\n  ,\n1 | a {b: hypot(1px, 1)}\n  |             ^^^ 1px\n  |                  = 1\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/first_type/input.scss',
    data: 'a {b: hypot("0", 1px, 1px)}\n',
  },
  {
    name: 'error/first_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: hypot("0", 1px, 1px)}\n  |             ^^^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
  {
    name: 'error/second_type/input.scss',
    data: 'a {b: hypot(1px, "0", 1px)}\n',
  },
  {
    name: 'error/second_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: hypot(1px, "0", 1px)}\n  |                  ^^^\n  \'\n  input.scss 1:18  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: hypot()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: hypot()}\n  |       ^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: hypot(12, $, 14)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: hypot(12, $, 14)}\n  |                  ^\n  '\n  input.scss 1:18  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: hypot(7 % 3, 1)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: hypot(7 % 3, 1)}\n  |               ^\n  '\n  input.scss 1:15  root stylesheet\n",
  },
]
