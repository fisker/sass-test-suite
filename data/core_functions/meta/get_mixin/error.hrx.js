// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/get_mixin/error.hrx

export default [
  {
    name: 'argument/type/name/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-mixin(2px)}\n',
  },
  {
    name: 'argument/type/name/error',
    data: "Error: $name: 2px is not a string.\n  ,\n2 | a {b: meta.get-mixin(2px)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'argument/type/module/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-mixin(c, $module: 1)}\n',
  },
  {
    name: 'argument/type/module/error',
    data: "Error: $module: 1 is not a string.\n  ,\n2 | a {b: meta.get-mixin(c, $module: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'argument/mixin_ref/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n\n$a-ref: meta.get-mixin(a);\na {b: meta.get-mixin($a-ref)}\n',
  },
  {
    name: 'argument/mixin_ref/error',
    data: 'Error: $name: get-mixin("a") is not a string.\n  ,\n5 | a {b: meta.get-mixin($a-ref)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 5:7  root stylesheet\n',
  },
  {
    name: 'argument/too_few/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-mixin()}\n',
  },
  {
    name: 'argument/too_few/error',
    data: "Error: Missing argument $name.\n  ,--> input.scss\n2 | a {b: meta.get-mixin()}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function get-mixin($name, $module: null) {\n  |           =============================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'argument/too_many/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(meta.get-mixin(c, true, d, e))}\n',
  },
  {
    name: 'argument/too_many/error',
    data: "Error: Only 2 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: meta.inspect(meta.get-mixin(c, true, d, e))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function get-mixin($name, $module: null) {\n  |           =============================== declaration\n  '\n  input.scss 2:20  root stylesheet\n",
  },
  {
    name: 'non_existent/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-mixin(does-not-exist)}\n',
  },
  {
    name: 'non_existent/error',
    data: "Error: Mixin not found: does-not-exist\n  ,\n2 | a {b: meta.get-mixin(does-not-exist)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  @include meta.apply(meta.get-mixin(d));\n}\n',
  },
  {
    name: 'through_forward/show/_midstream.scss',
    data: '@forward "upstream" show c;\n',
  },
  {
    name: 'through_forward/show/_upstream.scss',
    data: '@mixin d() {a: c}\n',
  },
  {
    name: 'through_forward/show/error',
    data: "Error: Mixin not found: d\n  ,\n4 |   @include meta.apply(meta.get-mixin(d));\n  |                       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 4:23  root stylesheet\n",
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  @include meta.apply(meta.get-mixin(c));\n}\n',
  },
  {
    name: 'through_forward/hide/_midstream.scss',
    data: '@forward "upstream" hide c;\n',
  },
  {
    name: 'through_forward/hide/_upstream.scss',
    data: '@mixin c() {a: c}\n',
  },
  {
    name: 'through_forward/hide/error',
    data: "Error: Mixin not found: c\n  ,\n4 |   @include meta.apply(meta.get-mixin(c));\n  |                       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 4:23  root stylesheet\n",
  },
  {
    name: 'conflict/input.scss',
    data: '@use "sass:meta";\n@use "other1" as *;\n@use "other2" as *;\n\na {b: meta.get-mixin(member)}\n',
  },
  {
    name: 'conflict/other1.scss',
    data: '@mixin member() {a: other1}\n',
  },
  {
    name: 'conflict/other2.scss',
    data: '@mixin member() {a: other2}\n',
  },
  {
    name: 'conflict/error',
    data: 'Error: This mixin is available from multiple global modules.\n    ,\n2   | @use "other1" as *;\n    | ================== includes mixin\n3   | @use "other2" as *;\n    | ================== includes mixin\n... |\n5   | a {b: meta.get-mixin(member)}\n    |       ^^^^^^^^^^^^^^^^^^^^^^ mixin use\n    \'\n  input.scss 5:7  root stylesheet\n',
  },
  {
    name: 'module/undefined/input.scss',
    data: '@use "sass:meta";\n@use "sass:color";\na {b: meta.get-mixin("c", $module: "color")}\n',
  },
  {
    name: 'module/undefined/error',
    data: 'Error: Mixin not found: "c"\n  ,\n3 | a {b: meta.get-mixin("c", $module: "color")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'module/non_existent/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-mixin("c", $module: "d")}\n',
  },
  {
    name: 'module/non_existent/error',
    data: 'Error: There is no module with the namespace "d".\n  ,\n2 | a {b: meta.get-mixin("c", $module: "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'module/built_in_but_not_loaded/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-mixin("red", $module: "color")}\n',
  },
  {
    name: 'module/built_in_but_not_loaded/error',
    data: 'Error: There is no module with the namespace "color".\n  ,\n2 | a {b: meta.get-mixin("red", $module: "color")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'module/dash_sensitive/input.scss',
    data: '@use "sass:meta";\n@use "sass:color" as a-b;\nc {d: meta.get-mixin("c", $module: "a_b")}\n',
  },
  {
    name: 'module/dash_sensitive/error',
    data: 'Error: There is no module with the namespace "a_b".\n  ,\n3 | c {d: meta.get-mixin("c", $module: "a_b")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
]
