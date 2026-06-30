// https://github.com/sass/sass-spec/blob/HEAD/spec/callable/arguments.hrx

export default [
  {
    name: 'mixin/_utils.scss',
    data: "@use 'sass:meta';\n\n@mixin a($args...) {\n  b {\n    positional: meta.inspect($args);\n    named: meta.inspect(meta.keywords($args));\n  }\n}\n",
  },
  {
    name: 'mixin/trailing_comma/positional/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a(1, );\n",
  },
  {
    name: 'mixin/trailing_comma/positional/output.css',
    data: 'b {\n  positional: (1,);\n  named: ();\n}\n',
  },
  {
    name: 'mixin/trailing_comma/named/alone/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a($c: 1, );\n",
  },
  {
    name: 'mixin/trailing_comma/named/alone/output.css',
    data: 'b {\n  positional: ();\n  named: (c: 1);\n}\n',
  },
  {
    name: 'mixin/trailing_comma/named/after_positional/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a(1, $c: 2, );\n",
  },
  {
    name: 'mixin/trailing_comma/named/after_positional/output.css',
    data: 'b {\n  positional: (1,);\n  named: (c: 2);\n}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/alone/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a(1..., );\n",
  },
  {
    name: 'mixin/trailing_comma/rest/alone/output.css',
    data: 'b {\n  positional: (1,);\n  named: ();\n}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_positional/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a(1, 2..., );\n",
  },
  {
    name: 'mixin/trailing_comma/rest/after_positional/output.css',
    data: 'b {\n  positional: 1, 2;\n  named: ();\n}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_named/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a($c: 1, 2..., );\n",
  },
  {
    name: 'mixin/trailing_comma/rest/after_named/output.css',
    data: 'b {\n  positional: (2,);\n  named: (c: 1);\n}\n',
  },
  {
    name: 'mixin/trailing_comma/rest/after_both/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a(1, $c: 2, 3..., );\n",
  },
  {
    name: 'mixin/trailing_comma/rest/after_both/output.css',
    data: 'b {\n  positional: 1, 3;\n  named: (c: 2);\n}\n',
  },
  {
    name: 'mixin/trailing_comma/keyword_rest/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a(1..., (c: 2)..., );\n",
  },
  {
    name: 'mixin/trailing_comma/keyword_rest/output.css',
    data: 'b {\n  positional: (1,);\n  named: (c: 2);\n}\n',
  },
  {
    name: 'mixin/error/comma_only/input.scss',
    data: "@use 'callable/arguments/mixin/utils';\n@include utils.a( , );\n",
  },
  {
    name: 'mixin/error/comma_only/error',
    data: 'Error: expected ")".\n  ,\n2 | @include utils.a( , );\n  |                   ^\n  \'\n  input.scss 2:19  root stylesheet\n',
  },
  {
    name: 'mixin/error/positional_after_named/input.scss',
    data: '@mixin a($b, $c) {}\n\n@include a($b: 1, 2) {}\n',
  },
  {
    name: 'mixin/error/positional_after_named/error',
    data: "Error: Positional arguments must come before keyword arguments.\n  ,\n3 | @include a($b: 1, 2) {}\n  |                   ^\n  '\n  input.scss 3:19  root stylesheet\n",
  },
  {
    name: 'mixin/error/duplicate_named/input.scss',
    data: '@mixin a($b) {}\n\n@include a($b: 1, $b: 2);\n',
  },
  {
    name: 'mixin/error/duplicate_named/error',
    data: "Error: Duplicate argument.\n  ,\n3 | @include a($b: 1, $b: 2);\n  |                   ^^\n  '\n  input.scss 3:19  root stylesheet\n",
  },
  {
    name: 'mixin/error/duplicate_named_normalization/input.scss',
    data: '@mixin a($b-c) {}\n\n@include a($b-c: 1, $b_c: 2);\n',
  },
  {
    name: 'mixin/error/duplicate_named_normalization/error',
    data: "Error: Duplicate argument.\n  ,\n3 | @include a($b-c: 1, $b_c: 2);\n  |                     ^^^^\n  '\n  input.scss 3:21  root stylesheet\n",
  },
  {
    name: 'mixin/error/splat/before_positional/input.scss',
    data: '// TODO - https://github.com/sass/sass-spec/issues/2073: This will be an error in Dart Sass 2\n@mixin a($b, $args...) {}\n@include a([1, 2]..., 3);\n',
  },
  {
    name: 'mixin/error/splat/before_positional/output.css',
    data: '',
  },
  {
    name: 'mixin/error/splat/before_positional/warning',
    data: "DEPRECATION WARNING [misplaced-rest]: Positional arguments must come before rest arguments.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n3 | @include a([1, 2]..., 3);\n  |                       ^ positional argument\n  |            ====== rest argument\n  '\n    input.scss 3:23  root stylesheet\n",
  },
  {
    name: 'mixin/error/splat/before_named/input.scss',
    data: '// TODO - https://github.com/sass/sass-spec/issues/2073: This will be an error in Dart Sass 2\n@mixin a($a, $b, $c) {}\n@include a([1, 2]..., $c: 3);\n',
  },
  {
    name: 'mixin/error/splat/before_named/output.css',
    data: '',
  },
  {
    name: 'mixin/error/splat/before_named/warning',
    data: "DEPRECATION WARNING [misplaced-rest]: Named arguments must come before rest arguments.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n3 | @include a([1, 2]..., $c: 3);\n  |                       ^^^^^ named argument\n  |            ====== rest argument\n  '\n    input.scss 3:23  root stylesheet\n",
  },
  {
    name: 'function/_utils.scss',
    data: "@use 'sass:meta';\n\n@function a($args...) {\n  @return meta.inspect((\n    positional: $args,\n    named: meta.keywords($args),\n  ));\n}\n",
  },
  {
    name: 'function/trailing_comma/positional/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a(1, )}\n",
  },
  {
    name: 'function/trailing_comma/positional/output.css',
    data: 'a {\n  b: (positional: ((1,)), named: ());\n}\n',
  },
  {
    name: 'function/trailing_comma/named/alone/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a($c: 1, )}\n",
  },
  {
    name: 'function/trailing_comma/named/alone/output.css',
    data: 'a {\n  b: (positional: (()), named: (c: 1));\n}\n',
  },
  {
    name: 'function/trailing_comma/named/after_positional/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a(1, $c: 2, )}\n",
  },
  {
    name: 'function/trailing_comma/named/after_positional/output.css',
    data: 'a {\n  b: (positional: ((1,)), named: (c: 2));\n}\n',
  },
  {
    name: 'function/trailing_comma/rest/alone/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a(1..., )}\n",
  },
  {
    name: 'function/trailing_comma/rest/alone/output.css',
    data: 'a {\n  b: (positional: ((1,)), named: ());\n}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_positional/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a(1, 2..., )}\n",
  },
  {
    name: 'function/trailing_comma/rest/after_positional/output.css',
    data: 'a {\n  b: (positional: (1, 2), named: ());\n}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_named/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a($c: 1, 2..., )}\n",
  },
  {
    name: 'function/trailing_comma/rest/after_named/output.css',
    data: 'a {\n  b: (positional: ((2,)), named: (c: 1));\n}\n',
  },
  {
    name: 'function/trailing_comma/rest/after_both/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a(1, $c: 2, 3..., )}\n",
  },
  {
    name: 'function/trailing_comma/rest/after_both/output.css',
    data: 'a {\n  b: (positional: (1, 3), named: (c: 2));\n}\n',
  },
  {
    name: 'function/trailing_comma/keyword_rest/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a(1..., (c: 2)..., )}\n",
  },
  {
    name: 'function/trailing_comma/keyword_rest/output.css',
    data: 'a {\n  b: (positional: ((1,)), named: (c: 2));\n}\n',
  },
  {
    name: 'function/arguments/sass/input.sass',
    data: '@function a($b, $c)\n  @return d\n\ne\n  f: a(g, h)\n',
  },
  {
    name: 'function/arguments/sass/output.css',
    data: 'e {\n  f: d;\n}\n',
  },
  {
    name: 'function/error/comma_only/input.scss',
    data: "@use 'callable/arguments/function/utils';\na {b: utils.a( , )};\n",
  },
  {
    name: 'function/error/comma_only/error',
    data: 'Error: expected ")".\n  ,\n2 | a {b: utils.a( , )};\n  |                ^\n  \'\n  input.scss 2:16  root stylesheet\n',
  },
  {
    name: 'function/error/positional_after_named/input.scss',
    data: '@function a($b, $c) {@return null}\n\n$d: a($b: 1, 2);\n',
  },
  {
    name: 'function/error/positional_after_named/error',
    data: "Error: Positional arguments must come before keyword arguments.\n  ,\n3 | $d: a($b: 1, 2);\n  |              ^\n  '\n  input.scss 3:14  root stylesheet\n",
  },
  {
    name: 'function/error/splat/before_positional/input.scss',
    data: '// TODO - https://github.com/sass/sass-spec/issues/2073: This will be an error in Dart Sass 2\na {b: rgb([1, 2]..., 3)}\n',
  },
  {
    name: 'function/error/splat/before_positional/output.css',
    data: 'a {\n  b: rgb(3, 1, 2);\n}\n',
  },
  {
    name: 'function/error/splat/before_positional/warning',
    data: "DEPRECATION WARNING [misplaced-rest]: Positional arguments must come before rest arguments.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n2 | a {b: rgb([1, 2]..., 3)}\n  |                      ^ positional argument\n  |           ====== rest argument\n  '\n    input.scss 2:22  root stylesheet\n",
  },
  {
    name: 'function/error/splat/before_named/input.scss',
    data: '// TODO - https://github.com/sass/sass-spec/issues/2073: This will be an error in Dart Sass 2\na {b: rgb([1, 2]..., $blue: 3)}\n',
  },
  {
    name: 'function/error/splat/before_named/output.css',
    data: 'a {\n  b: rgb(1, 2, 3);\n}\n',
  },
  {
    name: 'function/error/splat/before_named/warning',
    data: "DEPRECATION WARNING [misplaced-rest]: Named arguments must come before rest arguments.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n2 | a {b: rgb([1, 2]..., $blue: 3)}\n  |                      ^^^^^^^^ named argument\n  |           ====== rest argument\n  '\n    input.scss 2:22  root stylesheet\n",
  },
]
