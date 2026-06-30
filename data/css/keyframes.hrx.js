// https://github.com/sass/sass-spec/blob/HEAD/spec/css/keyframes.hrx

export default [
  {
    name: 'bubble/rules/input.scss',
    data: '// Regression test for sass/libsass#472\na {\n  b: c;\n  @keyframes d {\n    to {\n      e: f;\n    }\n  }\n}\n',
  },
  {
    name: 'bubble/rules/output.css',
    data: 'a {\n  b: c;\n}\n@keyframes d {\n  to {\n    e: f;\n  }\n}\n',
  },
  {
    name: 'bubble/empty/input.scss',
    data: '// Regression test for sass/dart-sass#611.\na {\n  @keyframes {/**/}\n}\n',
  },
  {
    name: 'bubble/empty/output.css',
    data: '@keyframes { /**/ }\n',
  },
  {
    name: 'bubble/in-mixin/input.scss',
    data: '@mixin a {\n  @keyframes b {\n    to { c: d }\n  }\n}\ne {\n  f: g;\n  @include a;\n}\n\n',
  },
  {
    name: 'bubble/in-mixin/output.css',
    data: 'e {\n  f: g;\n}\n@keyframes b {\n  to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'name/variable_like/input.scss',
    data: '$a: b;\n@keyframes $a {\n  to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'name/variable_like/output.css',
    data: '@keyframes $a {\n  to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'name/interpolated/input.scss',
    data: '$a: b;\n@keyframes #{$a} {\n  to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'name/interpolated/output.css',
    data: '@keyframes b {\n  to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/from/input.scss',
    data: '@keyframes a {\n  from {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/from/output.css',
    data: '@keyframes a {\n  from {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/to/input.scss',
    data: '@keyframes a {\n  to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/to/output.css',
    data: '@keyframes a {\n  to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/int/input.scss',
    data: '@keyframes a {\n  10% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/int/output.css',
    data: '@keyframes a {\n  10% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/double/input.scss',
    data: '@keyframes a {\n  10.3% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/double/output.css',
    data: '@keyframes a {\n  10.3% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/scientific/int/input.scss',
    data: '@keyframes a {\n  1e2% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/scientific/int/output.css',
    data: '@keyframes a {\n  1e2% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/scientific/double/input.scss',
    data: '@keyframes a {\n  1.5e2% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/scientific/double/output.css',
    data: '@keyframes a {\n  1.5e2% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/scientific/positive_exponent/input.scss',
    data: '@keyframes a {\n  13E+1% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/scientific/positive_exponent/output.css',
    data: '@keyframes a {\n  13e+1% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/scientific/negative_exponent/input.scss',
    data: '@keyframes a {\n  130E-1% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/percentage/scientific/negative_exponent/output.css',
    data: '@keyframes a {\n  130e-1% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/interpolated/input.scss',
    data: '@keyframes a {\n  $b: 10%;\n  #{$b} {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/interpolated/output.css',
    data: '@keyframes a {\n  10% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/list/input.scss',
    data: '@keyframes a {\n  from, 15%, to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'selector/list/output.css',
    data: '@keyframes a {\n  from, 15%, to {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'in_keyframe_block/unknown_at_rule/input.scss',
    data: '@keyframes a {\n  to {@b}\n}\n',
  },
  {
    name: 'in_keyframe_block/unknown_at_rule/output.css',
    data: '@keyframes a {\n  to {\n    @b;\n  }\n}\n',
  },
  {
    name: 'in_keyframe_block/known_at_rule/input.scss',
    data: '@keyframes a {\n  to {@media screen {b: c}}\n}\n',
  },
  {
    name: 'in_keyframe_block/known_at_rule/output.css',
    data: '@keyframes a {\n  to {\n    @media screen {\n      b: c;\n    }\n  }\n}\n',
  },
  {
    name: 'error/in_keyframe_block/style_rule/input.scss',
    data: '@keyframes a {\n  to {to {c: d}}\n}\n',
  },
  {
    name: 'error/in_keyframe_block/style_rule/error',
    data: "Error: Style rules may not be used within keyframe blocks.\n  ,\n2 |   to {to {c: d}}\n  |       ^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
