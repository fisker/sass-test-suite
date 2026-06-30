// https://github.com/sass/sass-spec/blob/HEAD/spec/css/supports/syntax/calculations.hrx

export default [
  {
    name: 'README.md',
    data: 'Regression tests for https://github.com/sass/sass/issues/3259.\n',
  },
  {
    name: 'calc/simple/input.scss',
    data: '@supports (a: calc(0)) {@d}\n',
  },
  {
    name: 'calc/simple/output.css',
    data: '@supports (a: calc(0)) {\n  @d;\n}\n',
  },
  {
    name: 'calc/with_operation/input.scss',
    data: '@supports (a: calc(1 + 2)) {@d}\n',
  },
  {
    name: 'calc/with_operation/output.css',
    data: '@supports (a: calc(1 + 2)) {\n  @d;\n}\n',
  },
  {
    name: 'calc/with_variable/input.scss',
    data: '$x: 2;\n@supports (a: calc(1 + $x)) {@d}\n',
  },
  {
    name: 'calc/with_variable/output.css',
    data: '@supports (a: calc(1 + 2)) {\n  @d;\n}\n',
  },
  {
    name: 'calc/nested/input.scss',
    data: '@supports (a: calc(1 + calc(2 + 3))) {@d}\n',
  },
  {
    name: 'calc/nested/output.css',
    data: '@supports (a: calc(1 + calc(2 + 3))) {\n  @d;\n}\n',
  },
  {
    name: 'calc/interpolated/input.scss',
    data: '@supports (a: #{calc(1 + 2)}) {@d}\n',
  },
  {
    name: 'calc/interpolated/output.css',
    data: '@supports (a: 3) {\n  @d;\n}\n',
  },
  {
    name: 'calc/contains_interpolation/input.scss',
    data: '@supports (a: calc(#{1 + 2})) {@d}\n',
  },
  {
    name: 'calc/contains_interpolation/output.css',
    data: '@supports (a: calc(3)) {\n  @d;\n}\n',
  },
  {
    name: 'calc/in_property_name/input.scss',
    data: '@supports (calc(0): a) {@d}\n',
  },
  {
    name: 'calc/in_property_name/output.css',
    data: '@supports (calc(0): a) {\n  @d;\n}\n',
  },
  {
    name: 'min/input.scss',
    data: '@supports (a: min(0)) {@d}\n',
  },
  {
    name: 'min/output.css',
    data: '@supports (a: min(0)) {\n  @d;\n}\n',
  },
  {
    name: 'max/input.scss',
    data: '@supports (a: max(0)) {@d}\n',
  },
  {
    name: 'max/output.css',
    data: '@supports (a: max(0)) {\n  @d;\n}\n',
  },
  {
    name: 'clamp/input.scss',
    data: '@supports (a: clamp(0, 1, 2)) {@d}\n',
  },
  {
    name: 'clamp/output.css',
    data: '@supports (a: clamp(0, 1, 2)) {\n  @d;\n}\n',
  },
]
