export default [
  {
    name: '_utils.scss',
    data: '@use "sass:meta";\n/// Returns the keyword arguments passed to this function as a map.\n@function args-to-keywords($args...) {\n  @return meta.keywords($args);\n}\n',
  },
  {
    name: 'empty/no_args/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\na {b: meta.inspect(utils.args-to-keywords())}\n',
  },
  {
    name: 'empty/no_args/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'empty/positional/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\na {b: meta.inspect(utils.args-to-keywords(1, 2, 3))}\n',
  },
  {
    name: 'empty/positional/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'one_arg/input.scss',
    data: '@use "sass:meta";\n@use "../utils";\na {b: meta.inspect(utils.args-to-keywords($c: d))}\n',
  },
  {
    name: 'one_arg/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'multi_arg/input.scss',
    data: '@use "sass:meta";\n@use "../utils";\na {b: meta.inspect(utils.args-to-keywords($c: d, $e: f, $g: h))}\n',
  },
  {
    name: 'multi_arg/output.css',
    data: 'a {\n  b: (c: d, e: f, g: h);\n}\n',
  },
  {
    name: 'forwarded/function/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\n\n@function args-to-keywords-forward($args...) {\n  @return utils.args-to-keywords($args...);\n}\n\na {b: meta.inspect(args-to-keywords-forward($c: d))}\n',
  },
  {
    name: 'forwarded/function/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'forwarded/call/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\n\n@function args-to-keywords-forward($args...) {\n  @return meta.call(meta.get-function("args-to-keywords", $module: "utils"), $args...);\n}\n\na {b: meta.inspect(args-to-keywords-forward($c: d))}\n',
  },
  {
    name: 'forwarded/call/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'forwarded/mixin/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\n\n@mixin args-to-keywords-forward($args...) {\n  a {b: meta.inspect(utils.args-to-keywords($args...))}\n}\n\n@include args-to-keywords-forward($c: d);\n',
  },
  {
    name: 'forwarded/mixin/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'forwarded/content/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\n\n@mixin args-to-keywords-forward($args...) {\n  @content($args...);\n}\n\n@include args-to-keywords-forward($c: d) using ($args...) {\n  a {b: meta.inspect(utils.args-to-keywords($args...))}\n}\n',
  },
  {
    name: 'forwarded/content/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'dash_insensitive/input.scss',
    data: '@use "sass:meta";\n@use "../utils";\na {b: meta.inspect(utils.args-to-keywords($c-d: e, $f_g: h))}\n',
  },
  {
    name: 'dash_insensitive/output.css',
    data: 'a {\n  b: (c-d: e, f-g: h);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@function args-to-keywords($args...) {\n  @return meta.keywords($args: $args);\n}\n\na {b: meta.inspect(args-to-keywords($c: d))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'error/type/non_arg_list/input.scss',
    data: '@use "sass:meta";\na {b: meta.keywords(1 2 3)}\n',
  },
  {
    name: 'error/type/non_arg_list/error',
    data: "Error: $args: (1 2 3) is not an argument list.\n  ,\n2 | a {b: meta.keywords(1 2 3)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/non_list/input.scss',
    data: '@use "sass:meta";\na {b: meta.keywords(1)}\n',
  },
  {
    name: 'error/type/non_list/error',
    data: "Error: $args: 1 is not an argument list.\n  ,\n2 | a {b: meta.keywords(1)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.keywords()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $args.\n  ,--> input.scss\n2 | a {b: meta.keywords()}\n  |       ^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function keywords($args) {\n  |           =============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.keywords(1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: meta.keywords(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function keywords($args) {\n  |           =============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
