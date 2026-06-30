export default [
  {
    name: '_util.scss',
    data: '@use "sass:math";\n@use "sass:meta";\n\n// Calls `random()` one thousand times, and throws an error if `$check` returns\n// `false` for any of the values.\n@mixin check-values($arg, $check) {\n  @for $i from 1 through 1000 {\n    $value: math.random($arg);\n    @if not meta.call($check, $value) {\n      @error "#{$value} did not match expectation";\n    }\n  }\n}\n',
  },
  {
    name: 'null/input.scss',
    data: '@use "sass:meta";\n@use "../util";\n@function check($value) {@return $value >= 0 and $value < 1}\n@include util.check-values(null, meta.get-function(check));\n',
  },
  {
    name: 'null/output.css',
    data: '',
  },
  {
    name: 'one/input.scss',
    data: '@use "sass:meta";\n@use "../util";\n@function check($value) {@return $value == 1}\n@include util.check-values(1, meta.get-function(check));\n',
  },
  {
    name: 'one/output.css',
    data: '',
  },
  {
    name: 'within_precision/input.scss',
    data: '@use "sass:math";\n// This is within the precision limit to be considered identical to 1.\na {b: math.random(1.0000000000001)}\n',
  },
  {
    name: 'within_precision/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'two/input.scss',
    data: '@use "sass:meta";\n@use "../util";\n@function check($value) {@return $value == 1 or $value == 2}\n@include util.check-values(2, meta.get-function(check));\n',
  },
  {
    name: 'two/output.css',
    data: '',
  },
  {
    name: 'one_hundred/input.scss',
    data: '@use "sass:math";\n@use "sass:meta";\n@use "../util";\n@function check($value) {@return $value == math.round($value) and $value > 0 and $value <= 100}\n@include util.check-values(100, meta.get-function(check));\n',
  },
  {
    name: 'one_hundred/output.css',
    data: '',
  },
  {
    name: 'no_arg/input.scss',
    data: '@use "sass:math";\n$value: math.random();\na {b: $value >= 0 and $value < 1}\n',
  },
  {
    name: 'no_arg/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'ignores_units/input.scss',
    data: '@use "sass:math";\na {b: math.random(1px)}\n',
  },
  {
    name: 'ignores_units/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'ignores_units/warning',
    data: "DEPRECATION WARNING [function-units]: math.random() will no longer ignore $limit units (1px) in a future release.\n\nRecommendation: math.random(math.div($limit, 1px)) * 1px\n\nTo preserve current behavior: math.random(math.div($limit, 1px))\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: math.random(1px)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:math";\n$value: math.random($limit: 10);\na {b: $value > 0 and $value <= 10}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:math";\na {b: math.random(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $limit: c is not a number.\n  ,\n2 | a {b: math.random(c)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/decimal/input.scss',
    data: '@use "sass:math";\na {b: math.random(1.5)}\n',
  },
  {
    name: 'error/decimal/error',
    data: "Error: $limit: 1.5 is not an int.\n  ,\n2 | a {b: math.random(1.5)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero/input.scss',
    data: '@use "sass:math";\na {b: math.random(0)}\n',
  },
  {
    name: 'error/zero/error',
    data: "Error: $limit: Must be greater than 0, was 0.\n  ,\n2 | a {b: math.random(0)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/negative/input.scss',
    data: '@use "sass:math";\na {b: math.random(-1)}\n',
  },
  {
    name: 'error/negative/error',
    data: "Error: $limit: Must be greater than 0, was -1.\n  ,\n2 | a {b: math.random(-1)}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
