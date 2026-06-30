export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `atan2()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'units/none/input.scss',
    data: 'a {b: atan2(1, -10)}\n',
  },
  {
    name: 'units/none/output.css',
    data: 'a {\n  b: 174.2894068625deg;\n}\n',
  },
  {
    name: 'units/compatible/input.scss',
    data: 'a {b: atan2(1cm, -10mm)}\n',
  },
  {
    name: 'units/compatible/output.css',
    data: 'a {\n  b: 135deg;\n}\n',
  },
  {
    name: 'units/real_and_unknown/input.scss',
    data: 'a {b: atan2(1px, 10%)}\n',
  },
  {
    name: 'units/real_and_unknown/output.css',
    data: 'a {\n  b: atan2(1px, 10%);\n}\n',
  },
  {
    name: 'units/unknown/input.scss',
    data: 'a {\n  b: atan2(1%, 2%);\n}\n',
  },
  {
    name: 'units/unknown/output.css',
    data: 'a {\n  b: atan2(1%, 2%);\n}\n',
  },
  {
    name: 'units/fake/input.scss',
    data: 'a {\n  b: atan2(1foo, 2bar);\n}\n',
  },
  {
    name: 'units/fake/output.css',
    data: 'a {\n  b: atan2(1foo, 2bar);\n}\n',
  },
  {
    name: 'units/same_fake/input.scss',
    data: 'a {\n  b: atan2(1foo, 2foo);\n}\n',
  },
  {
    name: 'units/same_fake/output.css',
    data: 'a {\n  b: 26.5650511771deg;\n}\n',
  },
  {
    name: 'units/real_and_fake/input.scss',
    data: 'a {\n  b: atan2(1px, 2bar);\n}\n',
  },
  {
    name: 'units/real_and_fake/output.css',
    data: 'a {\n  b: atan2(1px, 2bar);\n}\n',
  },
  {
    name: 'simplification/input.scss',
    data: 'a {\n  b: atan2(3px - 1px + var(--c), -7px / 4em * 1em);\n}\n',
  },
  {
    name: 'simplification/output.css',
    data: 'a {\n  b: atan2(2px + var(--c), -1.75px);\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: aTaN2(1, -10)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 174.2894068625deg;\n}\n',
  },
  {
    name: 'overridden/input.scss',
    data: '@function atan2($arg) {@return $arg}\na {b: atan2(1)}\n',
  },
  {
    name: 'overridden/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/units/unitless_and_real/input.scss',
    data: 'a {b: atan2(1, 1px)}\n',
  },
  {
    name: 'error/units/unitless_and_real/error',
    data: "Error: 1 and 1px are incompatible.\n  ,\n1 | a {b: atan2(1, 1px)}\n  |             ^ 1\n  |                === 1px\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/units/known_incompatible/input.scss',
    data: 'a {b: atan2(1deg, 1px)}\n',
  },
  {
    name: 'error/units/known_incompatible/error',
    data: "Error: 1deg and 1px are incompatible.\n  ,\n1 | a {b: atan2(1deg, 1px)}\n  |             ^^^^ 1deg\n  |                   === 1px\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/units/complex_and_unknown/input.scss',
    data: 'a {b: atan2(1px*2px, 10%)}\n',
  },
  {
    name: 'error/units/complex_and_unknown/error',
    data: "Error: Number calc(2px * 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: atan2(1px*2px, 10%)}\n  |             ^^^^^^^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: atan2(1, $)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: atan2(1, $)}\n  |                 ^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'error/x_type/input.scss',
    data: 'a {b: atan2(0, "0")}\n',
  },
  {
    name: 'error/x_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: atan2(0, "0")}\n  |                ^^^\n  \'\n  input.scss 1:16  root stylesheet\n',
  },
  {
    name: 'error/y_type/input.scss',
    data: 'a {b: atan2("0", 0)}\n',
  },
  {
    name: 'error/y_type/error',
    data: 'Error: This expression can\'t be used in a calculation.\n  ,\n1 | a {b: atan2("0", 0)}\n  |             ^^^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: 'a {b: atan2(0)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: 2 arguments required, but only 1 was passed.\n  ,\n1 | a {b: atan2(0)}\n  |       ^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: atan2(0, 0, 0)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,\n1 | a {b: atan2(0, 0, 0)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/sass_script/input.scss',
    data: 'a {b: atan2(7 % 3, 1)}\n',
  },
  {
    name: 'error/sass_script/error',
    data: "Error: This operation can't be used in a calculation.\n  ,\n1 | a {b: atan2(7 % 3, 1)}\n  |               ^\n  '\n  input.scss 1:15  root stylesheet\n",
  },
]
