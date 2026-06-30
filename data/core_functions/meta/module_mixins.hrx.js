// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/module_mixins.hrx

export default [
  {
    name: '_utils.scss',
    data: '@use "sass:meta";\n\n@mixin print-mixin-map($mixins) {\n  a {\n    @each $name, $mixin in $mixins {\n      #{$name}: {@include meta.apply($mixin)};\n    }\n  }\n}\n',
  },
  {
    name: 'empty/input.scss',
    data: '@use "sass:meta";\n@use "other";\n\na {b: meta.inspect(meta.module-mixins("other"))}\n',
  },
  {
    name: 'empty/_other.scss',
    data: '// This module defines no mixins.\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'return_type/user_defined/input.scss',
    data: '@use "sass:meta";\n@use "other";\n\na {b: meta.type-of(meta.module-mixins("other"))}\n',
  },
  {
    name: 'return_type/user_defined/_other.scss',
    data: '// This module defines no mixins.\n',
  },
  {
    name: 'return_type/user_defined/output.css',
    data: 'a {\n  b: map;\n}\n',
  },
  {
    name: 'return_type/builtin/input.scss',
    data: '@use "sass:meta";\n\na {b: meta.type-of(meta.module-mixins("meta"))}\n',
  },
  {
    name: 'return_type/builtin/output.css',
    data: 'a {\n  b: map;\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: '@use "sass:meta";\n@use "core_functions/meta/module_mixins/utils";\n@use "other";\n\n@include utils.print-mixin-map(meta.module-mixins("other"));\n',
  },
  {
    name: 'multiple/_other.scss',
    data: '@mixin b() {b: value}\n@mixin c() {c: value}\n@mixin d() {d: value}\n',
  },
  {
    name: 'multiple/output.css',
    data: 'a {\n  b-b: value;\n  c-c: value;\n  d-d: value;\n}\n',
  },
  {
    name: 'dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "core_functions/meta/module_mixins/utils";\n@use "other";\n\n@include utils.print-mixin-map(meta.module-mixins("other"));\n',
  },
  {
    name: 'dash_sensitive/_other.scss',
    data: '@mixin b-c() {b-c: value}\n@mixin d_e() {d_e: value}\n',
  },
  {
    name: 'dash_sensitive/output.css',
    data: 'a {\n  b-c-b-c: value;\n  d-e-d_e: value;\n}\n',
  },
  {
    name: 'as/input.scss',
    data: '@use "sass:meta";\n@use "core_functions/meta/module_mixins/utils";\n@use "other" as b;\n\n@include utils.print-mixin-map(meta.module-mixins("b"))\n',
  },
  {
    name: 'as/_other.scss',
    data: '@mixin c() {c: value}\n@mixin d() {d: value}\n@mixin e() {e: value}\n',
  },
  {
    name: 'as/output.css',
    data: 'a {\n  c-c: value;\n  d-d: value;\n  e-e: value;\n}\n',
  },
  {
    name: 'through_import/input.scss',
    data: '@use "sass:meta";\n@use "core_functions/meta/module_mixins/utils";\n@use "used";\n\n@include utils.print-mixin-map(meta.module-mixins("used"));\n',
  },
  {
    name: 'through_import/_used.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'through_import/_imported.scss',
    data: '@mixin b() {b: value}\n@mixin c() {c: value}\n@mixin d() {d: value}\n',
  },
  {
    name: 'through_import/output.css',
    data: 'a {\n  b-b: value;\n  c-c: value;\n  d-d: value;\n}\n',
  },
  {
    name: 'through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'core_module/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\n\n// We don\'t want to print every mixin name in this module, since that would\n// make this test brittle when new mixins are added. Instead we just test\n// that a couple mixins work.\n\n$mixins: meta.module-mixins("meta");\na {\n  load-css-exists: map.has-key($mixins, "load-css");\n}\n',
  },
  {
    name: 'core_module/output.css',
    data: 'a {\n  load-css-exists: true;\n}\n',
  },
  {
    name: 'through_forward/bare/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\n@use "used";\n\n@include utils.print-mixin-map(meta.module-mixins("used"));\n',
  },
  {
    name: 'through_forward/bare/_used.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'through_forward/bare/_forwarded.scss',
    data: '@mixin b() {b: value}\n@mixin c() {c: value}\n@mixin d() {d: value}\n',
  },
  {
    name: 'through_forward/bare/output.css',
    data: 'a {\n  b-b: value;\n  c-c: value;\n  d-d: value;\n}\n',
  },
  {
    name: 'through_forward/as/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\n@use "used";\n\n@include utils.print-mixin-map(meta.module-mixins("used"));\n',
  },
  {
    name: 'through_forward/as/_used.scss',
    data: '@forward "forwarded" as b-*;\n',
  },
  {
    name: 'through_forward/as/_forwarded.scss',
    data: '@mixin c() {c: value}\n@mixin d() {d: value}\n@mixin e() {e: value}\n',
  },
  {
    name: 'through_forward/as/output.css',
    data: 'a {\n  b-c-c: value;\n  b-d-d: value;\n  b-e-e: value;\n}\n',
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\n@use "used";\n\n@include utils.print-mixin-map(meta.module-mixins("used"));\n',
  },
  {
    name: 'through_forward/show/_used.scss',
    data: '@forward "forwarded" show b, c;\n',
  },
  {
    name: 'through_forward/show/_forwarded.scss',
    data: '@mixin b() {b: value}\n@mixin c() {c: value}\n@mixin d() {d: value}\n',
  },
  {
    name: 'through_forward/show/output.css',
    data: 'a {\n  b-b: value;\n  c-c: value;\n}\n',
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "../../utils";\n@use "used";\n\n@include utils.print-mixin-map(meta.module-mixins("used"));\n',
  },
  {
    name: 'through_forward/hide/_used.scss',
    data: '@forward "forwarded" hide b, c;\n',
  },
  {
    name: 'through_forward/hide/_forwarded.scss',
    data: '@mixin b() {b: value}\n@mixin c() {c: value}\n@mixin d() {d: value}\n',
  },
  {
    name: 'through_forward/hide/output.css',
    data: 'a {\n  d-d: value;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use "core_functions/meta/module_mixins/utils";\n@use "other";\n\n@include utils.print-mixin-map(meta.module-mixins($module: "other"));\n',
  },
  {
    name: 'named/_other.scss',
    data: '@mixin b() {b: value}\n@mixin c() {c: value}\n@mixin d() {d: value}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b-b: value;\n  c-c: value;\n  d-d: value;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:meta";\n$a: meta.module-mixins(1);\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $module: 1 is not a string.\n  ,\n2 | $a: meta.module-mixins(1);\n  |     ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:5  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\n$a: meta.module-mixins();\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $module.\n  ,--> input.scss\n2 | $a: meta.module-mixins();\n  |     ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function module-mixins($module) {\n  |           ====================== declaration\n  '\n  input.scss 2:5  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\n$a: meta.module-mixins("meta", "c");\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | $a: meta.module-mixins("meta", "c");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:meta\n1 | @function module-mixins($module) {\n  |           ====================== declaration\n  \'\n  input.scss 2:5  root stylesheet\n',
  },
  {
    name: 'error/missing/input.scss',
    data: '@use "sass:meta";\n$a: meta.module-mixins("other");\n',
  },
  {
    name: 'error/missing/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n2 | $a: meta.module-mixins("other");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:5  root stylesheet\n',
  },
  {
    name: 'error/dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "other-module";\n\n$a: meta.module-mixins("other_module");\n',
  },
  {
    name: 'error/dash_sensitive/_other-module.scss',
    data: '// This module defines no mixins.\n',
  },
  {
    name: 'error/dash_sensitive/error',
    data: 'Error: There is no module with namespace "other_module".\n  ,\n4 | $a: meta.module-mixins("other_module");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:5  root stylesheet\n',
  },
  {
    name: 'error/global/input.scss',
    data: '@use "sass:meta";\n@use "other" as *;\n\n$a: meta.module-mixins("other");\n',
  },
  {
    name: 'error/global/_other.scss',
    data: '// This module defines no mixins.\n',
  },
  {
    name: 'error/global/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n4 | $a: meta.module-mixins("other");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:5  root stylesheet\n',
  },
  {
    name: 'error/before_load/input.scss',
    data: '@use "sass:meta";\n\n$a: meta.module-mixins("other");\n\n@use "other";\n',
  },
  {
    name: 'error/before_load/_other.scss',
    data: '// This module defines no mixins.\n',
  },
  {
    name: 'error/before_load/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n3 | $a: meta.module-mixins("other");\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:5  root stylesheet\n',
  },
]
