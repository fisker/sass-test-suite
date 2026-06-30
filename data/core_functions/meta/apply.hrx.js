// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/apply.hrx

export default [
  {
    name: 'args/named/input.scss',
    data: '@use "sass:meta";\n\n@mixin a {\n  b: c;\n}\n\na {@include meta.apply($mixin: meta.get-mixin("a"))}\n',
  },
  {
    name: 'args/named/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'args/passes/positional/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a) {b: $a}\n\na {@include meta.apply(meta.get-mixin("a"), c)}\n',
  },
  {
    name: 'args/passes/positional/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'args/passes/named/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a) {b: $a}\n\na {@include meta.apply(meta.get-mixin("a"), $a: c)}\n',
  },
  {
    name: 'args/passes/named/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'args/passes/rest/positional/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a...) {b: $a}\n\na {@include meta.apply(meta.get-mixin("a"), a, b, c)}\n',
  },
  {
    name: 'args/passes/rest/positional/output.css',
    data: 'a {\n  b: a, b, c;\n}\n',
  },
  {
    name: 'args/passes/rest/named/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a...) {b: meta.inspect(meta.keywords($a))}\n\na {@include meta.apply(meta.get-mixin("a"), $a: a, $b: b, $c: c)}\n',
  },
  {
    name: 'args/passes/rest/named/output.css',
    data: 'a {\n  b: (a: a, b: b, c: c);\n}\n',
  },
  {
    name: 'rest/mixin-separate/positional/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a, $b) {b: $a, $b}\n\n$rest: 1 2;\na {@include meta.apply(meta.get-mixin("a"), $rest...)}\n',
  },
  {
    name: 'rest/mixin-separate/positional/output.css',
    data: 'a {\n  b: 1, 2;\n}\n',
  },
  {
    name: 'rest/mixin-separate/named/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a, $b) {b: $a, $b}\n\n$rest: (a: 1, b: 2);\na {@include meta.apply(meta.get-mixin("a"), $rest...)}\n',
  },
  {
    name: 'rest/mixin-separate/named/output.css',
    data: 'a {\n  b: 1, 2;\n}\n',
  },
  {
    name: 'rest/includes-mixin/positional/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a, $b) {b: $a, $b}\n\n$rest: meta.get-mixin("a") 1 2;\na {@include meta.apply($rest...)}\n',
  },
  {
    name: 'rest/includes-mixin/positional/output.css',
    data: 'a {\n  b: 1, 2;\n}\n',
  },
  {
    name: 'rest/includes-mixin/named/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a, $b) {b: $a, $b}\n\n$rest: (mixin: meta.get-mixin("a"), a: 1, b: 2);\na {@include meta.apply($rest...)}\n',
  },
  {
    name: 'rest/includes-mixin/named/output.css',
    data: 'a {\n  b: 1, 2;\n}\n',
  },
  {
    name: 'error/wrong_named_arg/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a) {b: $a}\n\na {@include meta.apply(meta.get-mixin("a"), $b: c)}\n',
  },
  {
    name: 'error/wrong_named_arg/error',
    data: 'Error: Missing argument $a.\n    ,\n3   | @mixin a($a) {b: $a}\n    |        ===== declaration\n... |\n5   | a {@include meta.apply(meta.get-mixin("a"), $b: c)}\n    |    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n    \'\n  input.scss 5:4  a()\n  input.scss 5:4  root stylesheet\n',
  },
  {
    name: 'error/use_as_function/input.scss',
    data: '@use "sass:meta";\n\n@mixin a {}\n$a: meta.get-mixin("a");\n\na {b: meta.apply($a)}\n',
  },
  {
    name: 'error/use_as_function/error',
    data: "Error: Undefined function.\n  ,\n6 | a {b: meta.apply($a)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 6:7  root stylesheet\n",
  },
  {
    name: 'error/no_args/input.scss',
    data: '@use "sass:meta";\n\na {@include meta.apply()}\n',
  },
  {
    name: 'error/no_args/error',
    data: "Error: Missing argument $mixin.\n  ,--> input.scss\n3 | a {@include meta.apply()}\n  |    ^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @mixin apply($mixin, $args...) {\n  |        ======================= declaration\n  '\n  input.scss 3:4  root stylesheet\n",
  },
  {
    name: 'error/wrong_arg_type/input.scss',
    data: '@use "sass:meta";\n\na {@include meta.apply(2px)}\n',
  },
  {
    name: 'error/wrong_arg_type/error',
    data: "Error: $mixin: 2px is not a mixin reference.\n  ,\n3 | a {@include meta.apply(2px)}\n  |    ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:4  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\n\n@mixin a {}\n$a: meta.get-mixin("a");\n\na {@include meta.apply($a, 2px)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 0 arguments allowed, but 1 was passed.\n    ,\n3   | @mixin a {}\n    |        = declaration\n... |\n6   | a {@include meta.apply($a, 2px)}\n    |    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n    '\n  input.scss 6:4  a()\n  input.scss 6:4  root stylesheet\n",
  },
  {
    name: 'error/missing_mixin_args/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a) {}\n$a: meta.get-mixin("a");\n\na {@include meta.apply($a)}\n',
  },
  {
    name: 'error/missing_mixin_args/error',
    data: "Error: Missing argument $a.\n    ,\n3   | @mixin a($a) {}\n    |        ===== declaration\n... |\n6   | a {@include meta.apply($a)}\n    |    ^^^^^^^^^^^^^^^^^^^^^^^ invocation\n    '\n  input.scss 6:4  a()\n  input.scss 6:4  root stylesheet\n",
  },
  {
    name: 'error/too_many_args_mixin_accepts_args/input.scss',
    data: '@use "sass:meta";\n\n@mixin a($a) {}\n$a: meta.get-mixin("a");\n\na {@include meta.apply($a, 2px, 3px)}\n',
  },
  {
    name: 'error/too_many_args_mixin_accepts_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n    ,\n3   | @mixin a($a) {}\n    |        ===== declaration\n... |\n6   | a {@include meta.apply($a, 2px, 3px)}\n    |    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n    '\n  input.scss 6:4  a()\n  input.scss 6:4  root stylesheet\n",
  },
]
