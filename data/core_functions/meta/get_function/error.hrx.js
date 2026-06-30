// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/get_function/error.hrx

export default [
  {
    name: 'argument/type/name/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-function(2px)}\n',
  },
  {
    name: 'argument/type/name/error',
    data: "Error: $name: 2px is not a string.\n  ,\n2 | a {b: meta.get-function(2px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'argument/type/module/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-function(c, $module: 1)}\n',
  },
  {
    name: 'argument/type/module/error',
    data: "Error: $module: 1 is not a string.\n  ,\n2 | a {b: meta.get-function(c, $module: 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'argument/function_ref/input.scss',
    data: '@use "sass:meta";\n@function foo() {\n  @return null;\n}\n\n$foo-ref: meta.get-function(foo);\na {b: meta.get-function($foo-ref)}\n',
  },
  {
    name: 'argument/function_ref/error',
    data: 'Error: $name: get-function("foo") is not a string.\n  ,\n7 | a {b: meta.get-function($foo-ref)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 7:7  root stylesheet\n',
  },
  {
    name: 'argument/too_few/input.scss',
    data: 'a {b: get-function()}\n',
  },
  {
    name: 'argument/too_few/error',
    data: "Error: Missing argument $name.\n  ,--> input.scss\n1 | a {b: get-function()}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function get-function($name, $css: false, $module: null) {\n  |           =============================================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'argument/too_many/input.scss',
    data: 'a {b: get-function(c, true, d, e)}\n',
  },
  {
    name: 'argument/too_many/error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n1 | a {b: get-function(c, true, d, e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function get-function($name, $css: false, $module: null) {\n  |           =============================================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'non_existent/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-function(does-not-exist)}\n',
  },
  {
    name: 'non_existent/error',
    data: "Error: Function not found: does-not-exist\n  ,\n2 | a {b: meta.get-function(does-not-exist)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  b: meta.call(meta.get-function(d));\n}\n',
  },
  {
    name: 'through_forward/show/_midstream.scss',
    data: '@forward "upstream" show c;\n',
  },
  {
    name: 'through_forward/show/_upstream.scss',
    data: '@function d() {@return c}\n',
  },
  {
    name: 'through_forward/show/error',
    data: "Error: Function not found: d\n  ,\n4 |   b: meta.call(meta.get-function(d));\n  |                ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 4:16  root stylesheet\n",
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  b: meta.call(meta.get-function(c));\n}\n',
  },
  {
    name: 'through_forward/hide/_midstream.scss',
    data: '@forward "upstream" hide c;\n',
  },
  {
    name: 'through_forward/hide/_upstream.scss',
    data: '@function c() {@return c}\n',
  },
  {
    name: 'through_forward/hide/error',
    data: "Error: Function not found: c\n  ,\n4 |   b: meta.call(meta.get-function(c));\n  |                ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 4:16  root stylesheet\n",
  },
  {
    name: 'division/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-function(rgb) / meta.get-function(lighten)}\n',
  },
  {
    name: 'division/error',
    data: 'Error: get-function("rgb") isn\'t a valid CSS value.\n  ,\n2 | a {b: meta.get-function(rgb) / meta.get-function(lighten)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'function_exists/input.scss',
    data: '@use "sass:meta";\n\n@function add-two($v) {\n  @return $v + 2;\n}\n\n$add-two-fn: meta.get-function(add-two);\n\n.error {\n  error: meta.get-function($add-two-fn);\n}\n',
  },
  {
    name: 'function_exists/error',
    data: 'Error: $name: get-function("add-two") is not a string.\n   ,\n10 |   error: meta.get-function($add-two-fn);\n   |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   \'\n  input.scss 10:10  root stylesheet\n',
  },
  {
    name: 'conflict/input.scss',
    data: '@use "sass:meta";\n@use "other1" as *;\n@use "other2" as *;\n\na {b: meta.get-function(member)}\n',
  },
  {
    name: 'conflict/other1.scss',
    data: '@function member() {@return from other1}\n',
  },
  {
    name: 'conflict/other2.scss',
    data: '@function member() {@return from other2}\n',
  },
  {
    name: 'conflict/error',
    data: 'Error: This function is available from multiple global modules.\n    ,\n2   | @use "other1" as *;\n    | ================== includes function\n3   | @use "other2" as *;\n    | ================== includes function\n... |\n5   | a {b: meta.get-function(member)}\n    |       ^^^^^^^^^^^^^^^^^^^^^^^^^ function use\n    \'\n  input.scss 5:7  root stylesheet\n',
  },
  {
    name: 'module/undefined/input.scss',
    data: '@use "sass:color";\n@use "sass:meta";\na {b: meta.get-function("c", $module: "color")}\n',
  },
  {
    name: 'module/undefined/error',
    data: 'Error: Function not found: "c"\n  ,\n3 | a {b: meta.get-function("c", $module: "color")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'module/non_existent/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-function("c", $module: "d")}\n',
  },
  {
    name: 'module/non_existent/error',
    data: 'Error: There is no module with the namespace "d".\n  ,\n2 | a {b: meta.get-function("c", $module: "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'module/built_in_but_not_loaded/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-function("red", $module: "color")}\n',
  },
  {
    name: 'module/built_in_but_not_loaded/error',
    data: 'Error: There is no module with the namespace "color".\n  ,\n2 | a {b: meta.get-function("red", $module: "color")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'module/dash_sensitive/input.scss',
    data: '@use "sass:color" as a-b;\n@use "sass:meta";\nc {d: meta.get-function("c", $module: "a_b")}\n',
  },
  {
    name: 'module/dash_sensitive/error',
    data: 'Error: There is no module with the namespace "a_b".\n  ,\n3 | c {d: meta.get-function("c", $module: "a_b")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'module/and_css/input.scss',
    data: '@use "sass:color";\n@use "sass:meta";\na {b: meta.get-function("red", $css: true, $module: "color")}\n',
  },
  {
    name: 'module/and_css/error',
    data: 'Error: $css and $module may not both be passed at once.\n  ,\n3 | a {b: meta.get-function("red", $css: true, $module: "color")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
]
