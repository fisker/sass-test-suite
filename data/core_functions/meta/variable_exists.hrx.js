// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/variable_exists.hrx

export default [
  {
    name: 'global/input.scss',
    data: '@use "sass:meta";\n$global-variable: null;\n\na {b: meta.variable-exists(global-variable)}\n',
  },
  {
    name: 'global/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'local/input.scss',
    data: '@use "sass:meta";\na {\n  $local-variable: null;\n  b: meta.variable-exists(local-variable);\n}\n',
  },
  {
    name: 'local/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'dash_insensitive/dash_to_underscore/input.scss',
    data: '@use "sass:meta";\n$a_b: null;\n\nc {d: meta.variable-exists(a-b)}\n',
  },
  {
    name: 'dash_insensitive/dash_to_underscore/output.css',
    data: 'c {\n  d: true;\n}\n',
  },
  {
    name: 'dash_insensitive/underscore_to_dash/input.scss',
    data: '@use "sass:meta";\n$a-b: null;\n\nc {d: meta.variable-exists(a_b)}\n',
  },
  {
    name: 'dash_insensitive/underscore_to_dash/output.css',
    data: 'c {\n  d: true;\n}\n',
  },
  {
    name: 'through_import/input.scss',
    data: '@use "sass:meta";\n@import "other";\na {b: meta.variable-exists(global-variable)}\n',
  },
  {
    name: 'through_import/other.scss',
    data: '$global-variable: null;\n',
  },
  {
    name: 'through_import/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'through_use/input.scss',
    data: '@use "sass:meta";\n@use "other" as *;\na {b: meta.variable-exists(global-variable)}\n',
  },
  {
    name: 'through_use/other.scss',
    data: '$global-variable: null;\n',
  },
  {
    name: 'through_use/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'through_forward/as/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  with-prefix: meta.variable-exists(b-c);\n  without-prefix: meta.variable-exists(c);\n}\n',
  },
  {
    name: 'through_forward/as/_midstream.scss',
    data: '@forward "upstream" as b-*;\n',
  },
  {
    name: 'through_forward/as/_upstream.scss',
    data: '$c: null;\n',
  },
  {
    name: 'through_forward/as/output.css',
    data: 'a {\n  with-prefix: true;\n  without-prefix: false;\n}\n',
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  shown: meta.variable-exists(b);\n  not-shown: meta.variable-exists(c);\n}\n',
  },
  {
    name: 'through_forward/show/_midstream.scss',
    data: '@forward "upstream" show $b;\n',
  },
  {
    name: 'through_forward/show/_upstream.scss',
    data: '$b: null;\n$c: null;\n',
  },
  {
    name: 'through_forward/show/output.css',
    data: 'a {\n  shown: true;\n  not-shown: false;\n}\n',
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  hidden: meta.variable-exists(b);\n  not-hidden: meta.variable-exists(c);\n}\n',
  },
  {
    name: 'through_forward/hide/_midstream.scss',
    data: '@forward "upstream" hide $b;\n',
  },
  {
    name: 'through_forward/hide/_upstream.scss',
    data: '$b: null;\n$c: null;\n',
  },
  {
    name: 'through_forward/hide/output.css',
    data: 'a {\n  hidden: false;\n  not-hidden: true;\n}\n',
  },
  {
    name: 'non_existent/input.scss',
    data: '@use "sass:meta";\na {\n  b: meta.variable-exists(non-existent);\n}\n',
  },
  {
    name: 'non_existent/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'keyword/input.scss',
    data: '@use "sass:meta";\na {b: meta.variable-exists($name: foo)}\n',
  },
  {
    name: 'keyword/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'error/argument/type/input.scss',
    data: '@use "sass:meta";\na {b: meta.variable-exists(12px)}\n',
  },
  {
    name: 'error/argument/type/error',
    data: "Error: $name: 12px is not a string.\n  ,\n2 | a {b: meta.variable-exists(12px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/argument/too_few/input.scss',
    data: '@use "sass:meta";\na {b: meta.variable-exists()}\n',
  },
  {
    name: 'error/argument/too_few/error',
    data: "Error: Missing argument $name.\n  ,--> input.scss\n2 | a {b: meta.variable-exists()}\n  |       ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function variable-exists($name) {\n  |           ====================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/argument/too_many/input.scss',
    data: '@use "sass:meta";\na {b: meta.variable-exists(foo, bar)}\n',
  },
  {
    name: 'error/argument/too_many/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: meta.variable-exists(foo, bar)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function variable-exists($name) {\n  |           ====================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'conflict/input.scss',
    data: '@use "sass:meta";\n@use "other1" as *;\n@use "other2" as *;\n\na {b: meta.variable-exists(member)}\n',
  },
  {
    name: 'conflict/other1.scss',
    data: '$member: from other1;\n',
  },
  {
    name: 'conflict/other2.scss',
    data: '$member: from other2;\n',
  },
  {
    name: 'conflict/error',
    data: 'Error: This variable is available from multiple global modules.\n    ,\n2   | @use "other1" as *;\n    | ================== includes variable\n3   | @use "other2" as *;\n    | ================== includes variable\n... |\n5   | a {b: meta.variable-exists(member)}\n    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ variable use\n    \'\n  input.scss 5:7  root stylesheet\n',
  },
]
