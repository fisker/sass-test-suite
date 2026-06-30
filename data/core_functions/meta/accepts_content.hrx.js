// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/accepts_content.hrx

export default [
  {
    name: 'accepts/direct_child/input.scss',
    data: '@use "sass:meta";\n\n@mixin a() {@content}\n\na {b: meta.accepts-content(meta.get-mixin("a"))}\n',
  },
  {
    name: 'accepts/direct_child/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'accepts/nested_child/input.scss',
    data: '@use "sass:meta";\n\n@mixin a() {\n  @if false {@content}\n}\n\na {b: meta.accepts-content(meta.get-mixin("a"))}\n',
  },
  {
    name: 'accepts/nested_child/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'accepts/builtin/input.scss',
    data: '@use "sass:meta";\n\na {b: meta.accepts-content(meta.get-mixin(apply, meta))}\n',
  },
  {
    name: 'accepts/builtin/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'doesnt_accept/empty/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n\na {b: meta.accepts-content(meta.get-mixin("a"))}\n',
  },
  {
    name: 'doesnt_accept/empty/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'doesnt_accept/builtin/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n\na {b: meta.accepts-content(meta.get-mixin(load-css, meta))}\n',
  },
  {
    name: 'doesnt_accept/builtin/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'args/keyword/input.scss',
    data: '@use "sass:meta";\n\na {b: meta.accepts-content($mixin: meta.get-mixin(apply, meta))}\n',
  },
  {
    name: 'args/keyword/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'error/args/too_few/input.scss',
    data: '@use "sass:meta";\n\na {b: meta.accepts-content()}\n',
  },
  {
    name: 'error/args/too_few/error',
    data: "Error: Missing argument $mixin.\n  ,--> input.scss\n3 | a {b: meta.accepts-content()}\n  |       ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function accepts-content($mixin) {\n  |           ======================= declaration\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'error/args/too_many/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n\na {b: meta.accepts-content(a, a)}\n',
  },
  {
    name: 'error/args/too_many/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n4 | a {b: meta.accepts-content(a, a)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function accepts-content($mixin) {\n  |           ======================= declaration\n  '\n  input.scss 4:7  root stylesheet\n",
  },
  {
    name: 'error/args/wrong_type/input.scss',
    data: '@use "sass:meta";\n\na {b: meta.accepts-content(meta.get-function("red"))}\n',
  },
  {
    name: 'error/args/wrong_type/error',
    data: 'Error: $mixin: get-function("red") is not a mixin reference.\n  ,\n3 | a {b: meta.accepts-content(meta.get-function("red"))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
]
