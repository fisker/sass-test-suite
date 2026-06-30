export default [
  {
    name: 'same_module/global/input.scss',
    data: '@use "sass:meta";\n@mixin global-mixin() {}\n\na {b: meta.mixin-exists(global-mixin)}\n',
  },
  {
    name: 'same_module/global/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'same_module/local/input.scss',
    data: '@use "sass:meta";\na {\n  @mixin local-mixin() {}\n  b: meta.mixin-exists(local-mixin);\n}\n',
  },
  {
    name: 'same_module/local/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'same_module/through_import/input.scss',
    data: '@use "sass:meta";\n@import "other";\na {b: meta.mixin-exists(global-mixin)}\n',
  },
  {
    name: 'same_module/through_import/other.scss',
    data: '@mixin global-mixin() {}\n',
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
    name: 'same_module/non_existent/input.scss',
    data: '@use "sass:meta";\na {\n  b: meta.mixin-exists(non-existent);\n}\n',
  },
  {
    name: 'same_module/non_existent/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'different_module/undefined/input.scss',
    data: '@use "sass:meta";\n@use "sass:color";\na {b: meta.mixin-exists("c", "color")}\n',
  },
  {
    name: 'different_module/undefined/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'different_module/defined/input.scss',
    data: '@use "sass:meta";\n@use "other";\na {b: meta.mixin-exists("c", "other")}\n',
  },
  {
    name: 'different_module/defined/_other.scss',
    data: '@mixin c() {}\n',
  },
  {
    name: 'different_module/defined/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'different_module/chosen_prefix/input.scss',
    data: '@use "sass:meta";\n@use "other" as a;\nb {c: meta.mixin-exists("d", "a")}\n',
  },
  {
    name: 'different_module/chosen_prefix/_other.scss',
    data: '@mixin d() {}\n',
  },
  {
    name: 'different_module/chosen_prefix/output.css',
    data: 'b {\n  c: true;\n}\n',
  },
  {
    name: 'different_module/through_use/input.scss',
    data: '@use "sass:meta";\n@use "other" as *;\na {b: meta.mixin-exists(global-mixin)}\n',
  },
  {
    name: 'different_module/through_use/other.scss',
    data: '@mixin global-mixin() {}\n',
  },
  {
    name: 'different_module/through_use/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'different_module/through_forward/bare/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {b: meta.mixin-exists(c)}\n',
  },
  {
    name: 'different_module/through_forward/bare/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'different_module/through_forward/bare/_upstream.scss',
    data: '@mixin c() {}\n',
  },
  {
    name: 'different_module/through_forward/bare/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'different_module/through_forward/as/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  with-prefix: meta.mixin-exists(b-c);\n  without-prefix: meta.mixin-exists(c);\n}\n',
  },
  {
    name: 'different_module/through_forward/as/_midstream.scss',
    data: '@forward "upstream" as b-*;\n',
  },
  {
    name: 'different_module/through_forward/as/_upstream.scss',
    data: '@mixin c() {}\n',
  },
  {
    name: 'different_module/through_forward/as/output.css',
    data: 'a {\n  with-prefix: true;\n  without-prefix: false;\n}\n',
  },
  {
    name: 'different_module/through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  shown: meta.mixin-exists(b);\n  not-shown: meta.mixin-exists(c);\n}\n',
  },
  {
    name: 'different_module/through_forward/show/_midstream.scss',
    data: '@forward "upstream" show b;\n',
  },
  {
    name: 'different_module/through_forward/show/_upstream.scss',
    data: '@mixin b() {}\n@mixin c() {}\n',
  },
  {
    name: 'different_module/through_forward/show/output.css',
    data: 'a {\n  shown: true;\n  not-shown: false;\n}\n',
  },
  {
    name: 'different_module/through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  hidden: meta.mixin-exists(b);\n  not-hidden: meta.mixin-exists(c);\n}\n',
  },
  {
    name: 'different_module/through_forward/hide/_midstream.scss',
    data: '@forward "upstream" hide b;\n',
  },
  {
    name: 'different_module/through_forward/hide/_upstream.scss',
    data: '@mixin b() {}\n@mixin c() {}\n',
  },
  {
    name: 'different_module/through_forward/hide/output.css',
    data: 'a {\n  hidden: false;\n  not-hidden: true;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use "other";\na {b: meta.mixin-exists($name: "c", $module: "other")}\n',
  },
  {
    name: 'named/_other.scss',
    data: '@mixin c() {}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'error/argument/type/name/input.scss',
    data: '@use "sass:meta";\na {b: meta.mixin-exists(12px)}\n',
  },
  {
    name: 'error/argument/type/name/error',
    data: "Error: $name: 12px is not a string.\n  ,\n2 | a {b: meta.mixin-exists(12px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/argument/type/module/input.scss',
    data: '@use "sass:meta";\na {b: meta.mixin-exists(c, 1)}\n',
  },
  {
    name: 'error/argument/type/module/error',
    data: "Error: $module: 1 is not a string.\n  ,\n2 | a {b: meta.mixin-exists(c, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/argument/too_few/input.scss',
    data: '@use "sass:meta";\na {b: meta.mixin-exists()}\n',
  },
  {
    name: 'error/argument/too_few/error',
    data: "Error: Missing argument $name.\n  ,--> input.scss\n2 | a {b: meta.mixin-exists()}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function mixin-exists($name, $module: null) {\n  |           ================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/argument/too_many/input.scss',
    data: '@use "sass:meta";\na {b: meta.mixin-exists(c, d, e)}\n',
  },
  {
    name: 'error/argument/too_many/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: meta.mixin-exists(c, d, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function mixin-exists($name, $module: null) {\n  |           ================================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/conflict/input.scss',
    data: '@use "sass:meta";\n@use "other1" as *;\n@use "other2" as *;\n\na {b: meta.mixin-exists(member)}\n',
  },
  {
    name: 'error/conflict/other1.scss',
    data: '@mixin member() {}\n',
  },
  {
    name: 'error/conflict/other2.scss',
    data: '@mixin member() {}\n',
  },
  {
    name: 'error/conflict/error',
    data: 'Error: This mixin is available from multiple global modules.\n    ,\n2   | @use "other1" as *;\n    | ================== includes mixin\n3   | @use "other2" as *;\n    | ================== includes mixin\n... |\n5   | a {b: meta.mixin-exists(member)}\n    |       ^^^^^^^^^^^^^^^^^^^^^^^^^ mixin use\n    \'\n  input.scss 5:7  root stylesheet\n',
  },
  {
    name: 'error/module/non_existent/input.scss',
    data: '@use "sass:meta";\na {b: meta.mixin-exists("c", "d")}\n',
  },
  {
    name: 'error/module/non_existent/error',
    data: 'Error: There is no module with the namespace "d".\n  ,\n2 | a {b: meta.mixin-exists("c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/module/built_in_but_not_loaded/input.scss',
    data: '@use "sass:meta";\na {b: meta.mixin-exists("c", "color")}\n',
  },
  {
    name: 'error/module/built_in_but_not_loaded/error',
    data: 'Error: There is no module with the namespace "color".\n  ,\n2 | a {b: meta.mixin-exists("c", "color")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/module/dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "sass:color" as a-b;\nc {d: meta.mixin-exists("c", $module: "a_b")}\n',
  },
  {
    name: 'error/module/dash_sensitive/error',
    data: 'Error: There is no module with the namespace "a_b".\n  ,\n3 | c {d: meta.mixin-exists("c", $module: "a_b")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
]
