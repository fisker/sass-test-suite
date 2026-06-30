// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/function_exists.hrx

export default [
  {
    name: 'same_module/global/input.scss',
    data: '@use "sass:meta";\n@function global-function() {@return null}\n\na {b: meta.function-exists(global-function)}\n',
  },
  {
    name: 'same_module/global/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'same_module/local/input.scss',
    data: '@use "sass:meta";\na {\n  @function local-function() {@return null}\n  b: meta.function-exists(local-function);\n}\n',
  },
  {
    name: 'same_module/local/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'same_module/through_import/input.scss',
    data: '@use "sass:meta";\n@import "other";\na {b: meta.function-exists(global-function)}\n',
  },
  {
    name: 'same_module/through_import/other.scss',
    data: '@function global-function() {@return null}\n',
  },
  {
    name: 'same_module/through_import/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'same_module/through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'same_module/dash_insensitive/dash_to_underscore/input.scss',
    data: '@use "sass:meta";\n@function a_b() {@return null}\n\nc {d: meta.function-exists(a-b)}\n',
  },
  {
    name: 'same_module/dash_insensitive/dash_to_underscore/output.css',
    data: 'c {\n  d: true;\n}\n',
  },
  {
    name: 'same_module/dash_insensitive/underscore_to_dash/input.scss',
    data: '@use "sass:meta";\n@function a-b() {@return null}\n\nc {d: meta.function-exists(a_b)}\n',
  },
  {
    name: 'same_module/dash_insensitive/underscore_to_dash/output.css',
    data: 'c {\n  d: true;\n}\n',
  },
  {
    name: 'same_module/non_existent/input.scss',
    data: '@use "sass:meta";\na {\n  b: meta.function-exists(non-existent);\n}\n',
  },
  {
    name: 'same_module/non_existent/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'different_module/undefined/input.scss',
    data: '@use "sass:meta";\n@use "sass:color";\na {b: meta.function-exists("c", "color")}\n',
  },
  {
    name: 'different_module/undefined/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'different_module/defined/input.scss',
    data: '@use "sass:meta";\n@use "sass:color";\na {b: meta.function-exists("red", "color")}\n',
  },
  {
    name: 'different_module/defined/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'different_module/chosen_prefix/input.scss',
    data: '@use "sass:meta";\n@use "sass:color" as a;\nb {c: meta.function-exists("red", "a")}\n',
  },
  {
    name: 'different_module/chosen_prefix/output.css',
    data: 'b {\n  c: true;\n}\n',
  },
  {
    name: 'different_module/through_use/input.scss',
    data: '@use "sass:meta";\n@use "other" as *;\na {b: meta.function-exists(global-function)}\n',
  },
  {
    name: 'different_module/through_use/other.scss',
    data: '@function global-function() {@return null}\n',
  },
  {
    name: 'different_module/through_use/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'different_module/through_forward/bare/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {b: meta.function-exists(c)}\n',
  },
  {
    name: 'different_module/through_forward/bare/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'different_module/through_forward/bare/_upstream.scss',
    data: '@function c() {@return null}\n',
  },
  {
    name: 'different_module/through_forward/bare/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'different_module/through_forward/as/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  with-prefix: meta.function-exists(b-c);\n  without-prefix: meta.function-exists(c);\n}\n',
  },
  {
    name: 'different_module/through_forward/as/_midstream.scss',
    data: '@forward "upstream" as b-*;\n',
  },
  {
    name: 'different_module/through_forward/as/_upstream.scss',
    data: '@function c() {@return null}\n',
  },
  {
    name: 'different_module/through_forward/as/output.css',
    data: 'a {\n  with-prefix: true;\n  without-prefix: false;\n}\n',
  },
  {
    name: 'different_module/through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  shown: meta.function-exists(b);\n  not-shown: meta.function-exists(c);\n}\n',
  },
  {
    name: 'different_module/through_forward/show/_midstream.scss',
    data: '@forward "upstream" show b;\n',
  },
  {
    name: 'different_module/through_forward/show/_upstream.scss',
    data: '@function b() {@return null}\n@function c() {@return null}\n',
  },
  {
    name: 'different_module/through_forward/show/output.css',
    data: 'a {\n  shown: true;\n  not-shown: false;\n}\n',
  },
  {
    name: 'different_module/through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  hidden: meta.function-exists(b);\n  not-hidden: meta.function-exists(c);\n}\n',
  },
  {
    name: 'different_module/through_forward/hide/_midstream.scss',
    data: '@forward "upstream" hide b;\n',
  },
  {
    name: 'different_module/through_forward/hide/_upstream.scss',
    data: '@function b() {@return null}\n@function c() {@return null}\n',
  },
  {
    name: 'different_module/through_forward/hide/output.css',
    data: 'a {\n  hidden: false;\n  not-hidden: true;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use "sass:color";\n\na {b: meta.function-exists($name: "red", $module: "color")}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'error/argument/type/name/input.scss',
    data: '@use "sass:meta";\na {b: meta.function-exists(12px)}\n',
  },
  {
    name: 'error/argument/type/name/error',
    data: "Error: $name: 12px is not a string.\n  ,\n2 | a {b: meta.function-exists(12px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/argument/type/module/input.scss',
    data: '@use "sass:meta";\na {b: meta.function-exists("red", 1)}\n',
  },
  {
    name: 'error/argument/type/module/error',
    data: 'Error: $module: 1 is not a string.\n  ,\n2 | a {b: meta.function-exists("red", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/argument/too_few/input.scss',
    data: '@use "sass:meta";\na {b: meta.function-exists()}\n',
  },
  {
    name: 'error/argument/too_few/error',
    data: "Error: Missing argument $name.\n  ,--> input.scss\n2 | a {b: meta.function-exists()}\n  |       ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function function-exists($name, $module: null) {\n  |           ===================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/argument/too_many/input.scss',
    data: '@use "sass:meta";\na {b: meta.function-exists(c, d, e)}\n',
  },
  {
    name: 'error/argument/too_many/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: meta.function-exists(c, d, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function function-exists($name, $module: null) {\n  |           ===================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/conflict/input.scss',
    data: '@use "sass:meta";\n@use "other1" as *;\n@use "other2" as *;\n\na {b: meta.function-exists(member)}\n',
  },
  {
    name: 'error/conflict/other1.scss',
    data: '@function member() {@return from other1}\n',
  },
  {
    name: 'error/conflict/other2.scss',
    data: '@function member() {@return from other2}\n',
  },
  {
    name: 'error/conflict/error',
    data: 'Error: This function is available from multiple global modules.\n    ,\n2   | @use "other1" as *;\n    | ================== includes function\n3   | @use "other2" as *;\n    | ================== includes function\n... |\n5   | a {b: meta.function-exists(member)}\n    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function use\n    \'\n  input.scss 5:7  root stylesheet\n',
  },
  {
    name: 'error/module/non_existent/input.scss',
    data: '@use "sass:meta";\na {b: meta.function-exists("c", "d")}\n',
  },
  {
    name: 'error/module/non_existent/error',
    data: 'Error: There is no module with the namespace "d".\n  ,\n2 | a {b: meta.function-exists("c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/module/built_in_but_not_loaded/input.scss',
    data: '@use "sass:meta";\na {b: meta.function-exists("red", "color")}\n',
  },
  {
    name: 'error/module/built_in_but_not_loaded/error',
    data: 'Error: There is no module with the namespace "color".\n  ,\n2 | a {b: meta.function-exists("red", "color")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/module/dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "sass:color" as a-b;\nc {d: meta.function-exists("c", $module: "a_b")}\n',
  },
  {
    name: 'error/module/dash_sensitive/error',
    data: 'Error: There is no module with the namespace "a_b".\n  ,\n3 | c {d: meta.function-exists("c", $module: "a_b")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
]
