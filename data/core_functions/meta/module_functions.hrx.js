// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/module_functions.hrx

export default [
  {
    name: '_util.scss',
    data: '@use "sass:meta";\n\n@mixin print-function-map($functions) {\n  a {\n    @each $name, $function in $functions {\n      #{$name}: meta.call($function);\n    }\n  }\n}\n',
  },
  {
    name: 'empty/input.scss',
    data: '@use "sass:meta";\n@use "other";\n\na {b: meta.inspect(meta.module-functions("other"))}\n',
  },
  {
    name: 'empty/_other.scss',
    data: '// This module defines no functions.\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: '@use "sass:meta";\n@use "../util";\n@use "other";\n\n@include util.print-function-map(meta.module-functions("other"));\n',
  },
  {
    name: 'multiple/_other.scss',
    data: '@function b() {@return b value}\n@function c() {@return c value}\n@function d() {@return d value}\n',
  },
  {
    name: 'multiple/output.css',
    data: 'a {\n  b: b value;\n  c: c value;\n  d: d value;\n}\n',
  },
  {
    name: 'dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "../util";\n@use "other";\n\n@include util.print-function-map(meta.module-functions("other"));\n',
  },
  {
    name: 'dash_sensitive/_other.scss',
    data: '@function b-c() {@return b-c value}\n@function d_e() {@return d_e value}\n',
  },
  {
    name: 'dash_sensitive/output.css',
    data: 'a {\n  b-c: b-c value;\n  d-e: d_e value;\n}\n',
  },
  {
    name: 'as/input.scss',
    data: '@use "sass:meta";\n@use "../util";\n@use "other" as b;\n\n@include util.print-function-map(meta.module-functions("b"))\n',
  },
  {
    name: 'as/_other.scss',
    data: '@function c() {@return c value}\n@function d() {@return d value}\n@function e() {@return e value}\n',
  },
  {
    name: 'as/output.css',
    data: 'a {\n  c: c value;\n  d: d value;\n  e: e value;\n}\n',
  },
  {
    name: 'through_import/input.scss',
    data: '@use "sass:meta";\n@use "../util";\n@use "used";\n\n@include util.print-function-map(meta.module-functions("used"));\n',
  },
  {
    name: 'through_import/_used.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'through_import/_imported.scss',
    data: '@function b() {@return b value}\n@function c() {@return c value}\n@function d() {@return d value}\n',
  },
  {
    name: 'through_import/output.css',
    data: 'a {\n  b: b value;\n  c: c value;\n  d: d value;\n}\n',
  },
  {
    name: 'through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'core_module/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\n\n// We don\'t want to print every function name in this module, since that would\n// make this test brittle when new functions are added. Instead we just test\n// that a couple functions work.\n\n$functions: meta.module-functions("meta");\na {\n  variable-exists: meta.call(map.get($functions, "variable-exists"), "functions");\n  inspect: meta.call(map.get($functions, "inspect"), ());\n}\n',
  },
  {
    name: 'core_module/output.css',
    data: 'a {\n  variable-exists: true;\n  inspect: ();\n}\n',
  },
  {
    name: 'through_forward/bare/input.scss',
    data: '@use "sass:meta";\n@use "../../util";\n@use "used";\n\n@include util.print-function-map(meta.module-functions("used"));\n',
  },
  {
    name: 'through_forward/bare/_used.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'through_forward/bare/_forwarded.scss',
    data: '@function b() {@return b value}\n@function c() {@return c value}\n@function d() {@return d value}\n',
  },
  {
    name: 'through_forward/bare/output.css',
    data: 'a {\n  b: b value;\n  c: c value;\n  d: d value;\n}\n',
  },
  {
    name: 'through_forward/as/input.scss',
    data: '@use "sass:meta";\n@use "../../util";\n@use "used";\n\n@include util.print-function-map(meta.module-functions("used"));\n',
  },
  {
    name: 'through_forward/as/_used.scss',
    data: '@forward "forwarded" as b-*;\n',
  },
  {
    name: 'through_forward/as/_forwarded.scss',
    data: '@function c() {@return c value}\n@function d() {@return d value}\n@function e() {@return e value}\n',
  },
  {
    name: 'through_forward/as/output.css',
    data: 'a {\n  b-c: c value;\n  b-d: d value;\n  b-e: e value;\n}\n',
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "../../util";\n@use "used";\n\n@include util.print-function-map(meta.module-functions("used"));\n',
  },
  {
    name: 'through_forward/show/_used.scss',
    data: '@forward "forwarded" show b, c;\n',
  },
  {
    name: 'through_forward/show/_forwarded.scss',
    data: '@function b() {@return b value}\n@function c() {@return c value}\n@function d() {@return d value}\n',
  },
  {
    name: 'through_forward/show/output.css',
    data: 'a {\n  b: b value;\n  c: c value;\n}\n',
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "../../util";\n@use "used";\n\n@include util.print-function-map(meta.module-functions("used"));\n',
  },
  {
    name: 'through_forward/hide/_used.scss',
    data: '@forward "forwarded" hide b, c;\n',
  },
  {
    name: 'through_forward/hide/_forwarded.scss',
    data: '@function b() {@return b value}\n@function c() {@return c value}\n@function d() {@return d value}\n',
  },
  {
    name: 'through_forward/hide/output.css',
    data: 'a {\n  d: d value;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use "../util";\n@use "other";\n\n@include util.print-function-map(meta.module-functions($module: "other"));\n',
  },
  {
    name: 'named/_other.scss',
    data: '@function b() {@return b value}\n@function c() {@return c value}\n@function d() {@return d value}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: b value;\n  c: c value;\n  d: d value;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:meta";\n$a: meta.module-functions(1);\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $module: 1 is not a string.\n  ,\n2 | $a: meta.module-functions(1);\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:5  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\n$a: meta.module-functions();\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $module.\n  ,--> input.scss\n2 | $a: meta.module-functions();\n  |     ^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function module-functions($module) {\n  |           ========================= declaration\n  '\n  input.scss 2:5  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\n$a: meta.module-functions("meta", "c");\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | $a: meta.module-functions("meta", "c");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:meta\n1 | @function module-functions($module) {\n  |           ========================= declaration\n  \'\n  input.scss 2:5  root stylesheet\n',
  },
  {
    name: 'error/missing/input.scss',
    data: '@use "sass:meta";\n$a: meta.module-functions("other");\n',
  },
  {
    name: 'error/missing/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n2 | $a: meta.module-functions("other");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:5  root stylesheet\n',
  },
  {
    name: 'error/dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "other-module";\n\n$a: meta.module-functions("other_module");\n',
  },
  {
    name: 'error/dash_sensitive/_other-module.scss',
    data: '// This module defines no functions.\n',
  },
  {
    name: 'error/dash_sensitive/error',
    data: 'Error: There is no module with namespace "other_module".\n  ,\n4 | $a: meta.module-functions("other_module");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:5  root stylesheet\n',
  },
  {
    name: 'error/global/input.scss',
    data: '@use "sass:meta";\n@use "other" as *;\n\n$a: meta.module-functions("other");\n',
  },
  {
    name: 'error/global/_other.scss',
    data: '// This module defines no functions.\n',
  },
  {
    name: 'error/global/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n4 | $a: meta.module-functions("other");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:5  root stylesheet\n',
  },
  {
    name: 'error/before_load/input.scss',
    data: '@use "sass:meta";\n\n$a: meta.module-functions("other");\n\n@use "other";\n',
  },
  {
    name: 'error/before_load/_other.scss',
    data: '// This module defines no functions.\n',
  },
  {
    name: 'error/before_load/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n3 | $a: meta.module-functions("other");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:5  root stylesheet\n',
  },
]
