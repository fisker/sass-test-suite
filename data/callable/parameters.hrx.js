// https://github.com/sass/sass-spec/blob/HEAD/spec/callable/parameters.hrx

export default [
  {
    name: 'mixin/trailing_comma/no_default/input.scss',
    data: '@mixin a($b, ) {\n  c: $b;\n}\n\nd {@include a(1)}\n',
  },
  {
    name: 'mixin/trailing_comma/no_default/output.css',
    data: 'd {\n  c: 1;\n}\n',
  },
  {
    name: 'mixin/trailing_comma/default/alone/input.scss',
    data: '@mixin a($b: 1, ) {\n  c: $b;\n}\n\nd {@include a}\n',
  },
  {
    name: 'mixin/trailing_comma/default/alone/output.css',
    data: 'd {\n  c: 1;\n}\n',
  },
  {
    name: 'mixin/trailing_comma/default/after_no_default/input.scss',
    data: '@mixin a($b, $c: 1, ) {\n  d: $c;\n}\n\ne {@include a(2)}\n',
  },
  {
    name: 'mixin/trailing_comma/default/after_no_default/output.css',
    data: 'e {\n  d: 1;\n}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/alone/input.scss',
    data: '@mixin a($b..., ) {\n  c: $b;\n}\n\nd {@include a(1)}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/alone/output.css',
    data: 'd {\n  c: 1;\n}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_no_default/input.scss',
    data: '@mixin a($b, $c..., ) {\n  d: $c;\n}\n\ne {@include a(1, 2)}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_no_default/output.css',
    data: 'e {\n  d: 2;\n}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_default/input.scss',
    data: '@mixin a($b: 1, $c..., ) {\n  d: $c;\n}\n\ne {@include a(2, 3)}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_default/output.css',
    data: 'e {\n  d: 3;\n}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_both/input.scss',
    data: '@mixin a($b, $c: 1, $d..., ) {\n  d: $d;\n}\n\ne {@include a(2, 3, 4)}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_both/output.css',
    data: 'e {\n  d: 4;\n}\n',
  },
  {
    name: 'mixin/error/comma_only/input.scss',
    data: '@mixin a( , ) {}\n',
  },
  {
    name: 'mixin/error/comma_only/error',
    data: 'Error: expected ")".\n  ,\n1 | @mixin a( , ) {}\n  |           ^\n  \'\n  input.scss 1:11  root stylesheet\n',
  },
  {
    name: 'mixin/error/splat/before_final/input.scss',
    data: '@mixin a($b..., $c) {}\n',
  },
  {
    name: 'mixin/error/splat/before_final/error',
    data: 'Error: expected ")".\n  ,\n1 | @mixin a($b..., $c) {}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'function/trailing_comma/no_default/input.scss',
    data: '@function a($b, ) {\n  @return $b;\n}\n\nc {d: a(e)}\n',
  },
  {
    name: 'function/trailing_comma/no_default/output.css',
    data: 'c {\n  d: e;\n}\n',
  },
  {
    name: 'function/trailing_comma/default/alone/input.scss',
    data: '@function a($b: 1, ) {\n  @return $b;\n}\n\nc {d: a()}\n',
  },
  {
    name: 'function/trailing_comma/default/alone/output.css',
    data: 'c {\n  d: 1;\n}\n',
  },
  {
    name: 'function/trailing_comma/default/after_no_default/input.scss',
    data: '@function a($b, $c: 1, ) {\n  @return $c;\n}\n\nd {e: a(2)}\n',
  },
  {
    name: 'function/trailing_comma/default/after_no_default/output.css',
    data: 'd {\n  e: 1;\n}\n',
  },
  {
    name: 'function/trailing_comma/rest/alone/input.scss',
    data: '@function a($b..., ) {\n  @return $b;\n}\n\nc {d: a(1)}\n',
  },
  {
    name: 'function/trailing_comma/rest/alone/output.css',
    data: 'c {\n  d: 1;\n}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_no_default/input.scss',
    data: '@function a($b, $c..., ) {\n  @return $c;\n}\n\nd {e: a(1, 2)}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_no_default/output.css',
    data: 'd {\n  e: 2;\n}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_default/input.scss',
    data: '@function a($b: 1, $c..., ) {\n  @return $c;\n}\n\nd {e: a(2, 3)}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_default/output.css',
    data: 'd {\n  e: 3;\n}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_both/input.scss',
    data: '@function a($b, $c: 1, $d..., ) {\n  @return $d;\n}\n\ne {f: a(2, 3, 4)}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_both/output.css',
    data: 'e {\n  f: 4;\n}\n',
  },
  {
    name: 'function/error/comma_only/input.scss',
    data: '@function a( , ) {}\n',
  },
  {
    name: 'function/error/comma_only/error',
    data: 'Error: expected ")".\n  ,\n1 | @function a( , ) {}\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'function/error/splat/before_final/input.scss',
    data: '@function a($b..., $c) {@return null}\n',
  },
  {
    name: 'function/error/splat/before_final/error',
    data: 'Error: expected ")".\n  ,\n1 | @function a($b..., $c) {@return null}\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
]
