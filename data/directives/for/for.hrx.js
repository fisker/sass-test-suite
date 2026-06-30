export default [
  {
    name: 'inclusive_forward/scss/input.scss',
    data: 'a {\n  @for $i from 1 through 5 {b: $i;}\n}\n',
  },
  {
    name: 'inclusive_forward/scss/output.css',
    data: 'a {\n  b: 1;\n  b: 2;\n  b: 3;\n  b: 4;\n  b: 5;\n}\n',
  },
  {
    name: 'inclusive_forward/sass/input.sass',
    data: 'a\n  @for $i from 1 through 5\n    b: $i\n',
  },
  {
    name: 'inclusive_forward/sass/output.css',
    data: 'a {\n  b: 1;\n  b: 2;\n  b: 3;\n  b: 4;\n  b: 5;\n}\n',
  },
  {
    name: 'inclusive_backward/input.scss',
    data: 'a {\n  @for $i from 5 through 1 {b: $i;}\n}\n',
  },
  {
    name: 'inclusive_backward/output.css',
    data: 'a {\n  b: 5;\n  b: 4;\n  b: 3;\n  b: 2;\n  b: 1;\n}\n',
  },
  {
    name: 'empty/scss/input.scss',
    data: 'a {\n  @for $i from 1 to 1 {b: $i;}\n}\n',
  },
  {
    name: 'empty/scss/output.css',
    data: '',
  },
  {
    name: 'empty/sass/input.sass',
    data: 'a\n  @for $i from 1 to 1\n    b: $i\n',
  },
  {
    name: 'empty/sass/output.css',
    data: '',
  },
  {
    name: 'exclusive_forward/input.scss',
    data: 'a {\n  @for $i from 1 to 5 {b: $i;}\n}\n',
  },
  {
    name: 'exclusive_forward/output.css',
    data: 'a {\n  b: 1;\n  b: 2;\n  b: 3;\n  b: 4;\n}\n',
  },
  {
    name: 'exclusive_backward/scss/input.scss',
    data: 'a {\n  @for $i from 5 to 1 {b: $i;}\n}\n',
  },
  {
    name: 'exclusive_backward/scss/output.css',
    data: 'a {\n  b: 5;\n  b: 4;\n  b: 3;\n  b: 2;\n}\n',
  },
  {
    name: 'exclusive_backward/sass/input.sass',
    data: 'a \n  @for $i from 5 to 1\n    b: $i\n',
  },
  {
    name: 'exclusive_backward/sass/output.css',
    data: 'a {\n  b: 5;\n  b: 4;\n  b: 3;\n  b: 2;\n}\n',
  },
  {
    name: 'negative_to_positive/input.scss',
    data: 'a {\n  @for $i from -1 through 3 {b: $i;}\n}\n',
  },
  {
    name: 'negative_to_positive/output.css',
    data: 'a {\n  b: -1;\n  b: 0;\n  b: 1;\n  b: 2;\n  b: 3;\n}\n',
  },
  {
    name: 'positive_to_negative/input.scss',
    data: 'a {\n  @for $i from 2 through -1 {b: $i;}\n}\n',
  },
  {
    name: 'positive_to_negative/output.css',
    data: 'a {\n  b: 2;\n  b: 1;\n  b: 0;\n  b: -1;\n}\n',
  },
  {
    name: 'negative_to_negative/input.scss',
    data: 'a {\n  @for $i from -5 through -1 {b: $i;}\n}\n',
  },
  {
    name: 'negative_to_negative/output.css',
    data: 'a {\n  b: -5;\n  b: -4;\n  b: -3;\n  b: -2;\n  b: -1;\n}\n',
  },
  {
    name: 'in_declaration/input.scss',
    data: 'a {\n  b: {\n    @for $i from 1 through 5 {c: $i}\n  }\n}\n',
  },
  {
    name: 'in_declaration/output.css',
    data: 'a {\n  b-c: 1;\n  b-c: 2;\n  b-c: 3;\n  b-c: 4;\n  b-c: 5;\n}\n',
  },
  {
    name: 'to_scope/input.scss',
    data: '// Overriding the variable inside the loop will not impact the end of the loop.\n$limit: 4;\n\n@for $i from 1 through $limit {\n  $limit: 2;\n  a {\n    limit: $limit;\n    i: $i;\n  }\n}\n',
  },
  {
    name: 'to_scope/output.css',
    data: 'a {\n  limit: 2;\n  i: 1;\n}\n\na {\n  limit: 2;\n  i: 2;\n}\n\na {\n  limit: 2;\n  i: 3;\n}\n\na {\n  limit: 2;\n  i: 4;\n}\n',
  },
  {
    name: 'unit/same/input.scss',
    data: 'a {\n  @for $i from 1px through 5px {b: $i;}\n}\n',
  },
  {
    name: 'unit/same/output.css',
    data: 'a {\n  b: 1px;\n  b: 2px;\n  b: 3px;\n  b: 4px;\n  b: 5px;\n}\n',
  },
  {
    name: 'unit/to_unitless/input.scss',
    data: 'a {\n  @for $i from 1px through 5 {b: $i;}\n}\n',
  },
  {
    name: 'unit/to_unitless/output.css',
    data: 'a {\n  b: 1px;\n  b: 2px;\n  b: 3px;\n  b: 4px;\n  b: 5px;\n}\n',
  },
  {
    name: 'unit/from_unitless/input.scss',
    data: 'a {\n  @for $i from 1 through 5px {b: $i;}\n}\n',
  },
  {
    name: 'unit/from_unitless/output.css',
    data: 'a {\n  b: 1;\n  b: 2;\n  b: 3;\n  b: 4;\n  b: 5;\n}\n',
  },
  {
    name: 'unit/compatible/input.scss',
    data: 'a {\n  @for $i from 5mm through 1cm {b: $i;}\n}\n',
  },
  {
    name: 'unit/compatible/output.css',
    data: 'a {\n  b: 5mm;\n  b: 6mm;\n  b: 7mm;\n  b: 8mm;\n  b: 9mm;\n  b: 10mm;\n}\n',
  },
  {
    name: 'error/from_type/input.scss',
    data: '@for $i from "foo" through 4 {}',
  },
  {
    name: 'error/from_type/error',
    data: 'Error: "foo" is not a number.\n  ,\n1 | @for $i from "foo" through 4 {}\n  |              ^^^^^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'error/from_float/input.scss',
    data: '@for $i from 1.5 through 4 {}',
  },
  {
    name: 'error/from_float/error',
    data: "Error: 1.5 is not an int.\n  ,\n1 | @for $i from 1.5 through 4 {}\n  |              ^^^\n  '\n  input.scss 1:14  root stylesheet\n",
  },
  {
    name: 'error/to_type/input.scss',
    data: '@for $i from 1 through "foo" {}',
  },
  {
    name: 'error/to_type/error',
    data: 'Error: "foo" is not a number.\n  ,\n1 | @for $i from 1 through "foo" {}\n  |                        ^^^^^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'error/to_float/input.scss',
    data: '@for $i from 1 through 1.5 {}',
  },
  {
    name: 'error/to_float/error',
    data: "Error: 1.5 is not an int.\n  ,\n1 | @for $i from 1 through 1.5 {}\n  |                        ^^^\n  '\n  input.scss 1:24  root stylesheet\n",
  },
  {
    name: 'error/unit_coersion_to_float/input.scss',
    data: '@for $i from 1cm through 5mm {}',
  },
  {
    name: 'error/unit_coersion_to_float/error',
    data: "Error: 0.5cm is not an int.\n  ,\n1 | @for $i from 1cm through 5mm {}\n  |                          ^^^\n  '\n  input.scss 1:26  root stylesheet\n",
  },
  {
    name: 'error/incompatible_units/input.scss',
    data: '@for $i from 100% through 42px {}',
  },
  {
    name: 'error/incompatible_units/error',
    data: "Error: Expected 42px to have unit %.\n  ,\n1 | @for $i from 100% through 42px {}\n  |                           ^^^^\n  '\n  input.scss 1:27  root stylesheet\n",
  },
]
