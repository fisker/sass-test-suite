export default [
  {
    name: 'empty/input.scss',
    data: '@use "sass:meta";\n@use "other";\n\na {b: meta.inspect(meta.module-variables("other"))}\n',
  },
  {
    name: 'empty/_other.scss',
    data: '// This module defines no variables.\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: '@use "sass:meta";\n@use "other";\n\na {b: meta.inspect(meta.module-variables("other"))}\n',
  },
  {
    name: 'multiple/_other.scss',
    data: '$c: c value;\n$d: d value;\n$e: e value;\n',
  },
  {
    name: 'multiple/output.css',
    data: 'a {\n  b: ("c": c value, "d": d value, "e": e value);\n}\n',
  },
  {
    name: 'dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "other";\n\na {b: meta.inspect(meta.module-variables("other"))}\n',
  },
  {
    name: 'dash_sensitive/_other.scss',
    data: '$c-d: c-d value;\n$e_f: e_f value;\n',
  },
  {
    name: 'dash_sensitive/output.css',
    data: 'a {\n  b: ("c-d": c-d value, "e-f": e_f value);\n}\n',
  },
  {
    name: 'as/input.scss',
    data: '@use "sass:meta";\n@use "other" as a;\n\nb {c: meta.inspect(meta.module-variables("a"))}\n',
  },
  {
    name: 'as/_other.scss',
    data: '$d: d value;\n$e: e value;\n$f: f value;\n',
  },
  {
    name: 'as/output.css',
    data: 'b {\n  c: ("d": d value, "e": e value, "f": f value);\n}\n',
  },
  {
    name: 'through_import/input.scss',
    data: '@use "sass:meta";\n@use "used";\n\na {b: meta.inspect(meta.module-variables("used"))}\n',
  },
  {
    name: 'through_import/_used.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'through_import/_imported.scss',
    data: '$c: c value;\n$d: d value;\n$e: e value;\n',
  },
  {
    name: 'through_import/output.css',
    data: 'a {\n  b: ("c": c value, "d": d value, "e": e value);\n}\n',
  },
  {
    name: 'through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'core_module/input.scss',
    data: '@use "sass:meta";\n\na {b: meta.inspect(meta.module-variables("meta"))}\n',
  },
  {
    name: 'core_module/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'through_forward/bare/input.scss',
    data: '@use "sass:meta";\n@use "used";\n\na {b: meta.inspect(meta.module-variables("used"))}\n',
  },
  {
    name: 'through_forward/bare/_used.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'through_forward/bare/_forwarded.scss',
    data: '$c: c value;\n$d: d value;\n$e: e value;\n',
  },
  {
    name: 'through_forward/bare/output.css',
    data: 'a {\n  b: ("c": c value, "d": d value, "e": e value);\n}\n',
  },
  {
    name: 'through_forward/as/input.scss',
    data: '@use "sass:meta";\n@use "used";\n\na {b: meta.inspect(meta.module-variables("used"))}\n',
  },
  {
    name: 'through_forward/as/_used.scss',
    data: '@forward "forwarded" as c-*;\n',
  },
  {
    name: 'through_forward/as/_forwarded.scss',
    data: '$d: d value;\n$e: e value;\n$f: f value;\n',
  },
  {
    name: 'through_forward/as/output.css',
    data: 'a {\n  b: ("c-d": d value, "c-e": e value, "c-f": f value);\n}\n',
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "used";\n\na {b: meta.inspect(meta.module-variables("used"))}\n',
  },
  {
    name: 'through_forward/show/_used.scss',
    data: '@forward "forwarded" show $c, $d;\n',
  },
  {
    name: 'through_forward/show/_forwarded.scss',
    data: '$c: c value;\n$d: d value;\n$e: e value;\n',
  },
  {
    name: 'through_forward/show/output.css',
    data: 'a {\n  b: ("c": c value, "d": d value);\n}\n',
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "used";\n\na {b: meta.inspect(meta.module-variables("used"))}\n',
  },
  {
    name: 'through_forward/hide/_used.scss',
    data: '@forward "forwarded" hide $c, $d;\n',
  },
  {
    name: 'through_forward/hide/_forwarded.scss',
    data: '$c: c value;\n$d: d value;\n$e: e value;\n',
  },
  {
    name: 'through_forward/hide/output.css',
    data: 'a {\n  b: ("e": e value);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use "other";\n\na {b: meta.inspect(meta.module-variables($module: "other"))}\n',
  },
  {
    name: 'named/_other.scss',
    data: '$c: c value;\n$d: d value;\n$e: e value;\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: ("c": c value, "d": d value, "e": e value);\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(meta.module-variables(1))}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $module: 1 is not a string.\n  ,\n2 | a {b: meta.inspect(meta.module-variables(1))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:20  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(meta.module-variables())}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $module.\n  ,--> input.scss\n2 | a {b: meta.inspect(meta.module-variables())}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function module-variables($module) {\n  |           ========================= declaration\n  '\n  input.scss 2:20  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(meta.module-variables("meta", "c"))}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: meta.inspect(meta.module-variables("meta", "c"))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:meta\n1 | @function module-variables($module) {\n  |           ========================= declaration\n  \'\n  input.scss 2:20  root stylesheet\n',
  },
  {
    name: 'error/missing/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(meta.module-variables("other"))}\n',
  },
  {
    name: 'error/missing/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n2 | a {b: meta.inspect(meta.module-variables("other"))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:20  root stylesheet\n',
  },
  {
    name: 'error/dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "other-module";\n\na {b: meta.inspect(meta.module-variables("other_module"))}\n',
  },
  {
    name: 'error/dash_sensitive/_other-module.scss',
    data: '// This module defines no variables.\n',
  },
  {
    name: 'error/dash_sensitive/error',
    data: 'Error: There is no module with namespace "other_module".\n  ,\n4 | a {b: meta.inspect(meta.module-variables("other_module"))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:20  root stylesheet\n',
  },
  {
    name: 'error/global/input.scss',
    data: '@use "sass:meta";\n@use "other" as *;\n\na {b: meta.inspect(meta.module-variables("other"))}\n',
  },
  {
    name: 'error/global/_other.scss',
    data: '// This module defines no variables.\n',
  },
  {
    name: 'error/global/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n4 | a {b: meta.inspect(meta.module-variables("other"))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:20  root stylesheet\n',
  },
  {
    name: 'error/before_load/input.scss',
    data: '@use "sass:meta";\n\n$variables: meta.module-variables("other");\n\n@use "other";\n',
  },
  {
    name: 'error/before_load/_other.scss',
    data: '// This module defines no variables.\n',
  },
  {
    name: 'error/before_load/error',
    data: 'Error: There is no module with namespace "other".\n  ,\n3 | $variables: meta.module-variables("other");\n  |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:13  root stylesheet\n',
  },
]
