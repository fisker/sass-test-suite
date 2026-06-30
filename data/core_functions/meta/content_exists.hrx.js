export default [
  {
    name: 'false/top_level/input.scss',
    data: '@use "sass:meta";\n@mixin a {\n  b {c: meta.content-exists()}\n}\n@include a;\n',
  },
  {
    name: 'false/top_level/output.css',
    data: 'b {\n  c: false;\n}\n',
  },
  {
    name: 'false/through_content/input.scss',
    data: '@use "sass:meta";\n@mixin call-content {\n  @content;\n}\n\n@mixin print-content-exists {\n  a {b: meta.content-exists()}\n}\n\n@include call-content {\n  @include print-content-exists;\n}\n',
  },
  {
    name: 'false/through_content/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'true/empty/input.scss',
    data: '@use "sass:meta";\n@mixin a {\n  b {c: meta.content-exists()}\n  @content;\n}\n@include a {}\n',
  },
  {
    name: 'true/empty/output.css',
    data: 'b {\n  c: true;\n}\n',
  },
  {
    name: 'true/non_empty/input.scss',
    data: '@use "sass:meta";\n@mixin a {\n  b {c: meta.content-exists()}\n  @content;\n}\n@include a {\n  d {e: f}\n}\n',
  },
  {
    name: 'true/non_empty/output.css',
    data: 'b {\n  c: true;\n}\n\nd {\n  e: f;\n}\n',
  },
  {
    name: 'controls/true/input.scss',
    data: '@use "sass:meta";\n// Regression test for sass/libsass#2842\n@mixin test-content-exists() {\n  @if meta.content-exists() {\n    @content;\n  }\n  @else {\n    content-exists: false;\n  }\n}\n\na {\n  @include test-content-exists() {\n    content: present;\n  }\n}\n',
  },
  {
    name: 'controls/true/output.css',
    data: 'a {\n  content: present;\n}\n',
  },
  {
    name: 'controls/false/input.scss',
    data: '@use "sass:meta";\n// Regression test for sass/libsass#2842\n@mixin test-content-exists() {\n  @if meta.content-exists() {\n    @content;\n  }\n  @else {\n    content-exists: false;\n  }\n}\n\na {\n  @include test-content-exists();\n}\n',
  },
  {
    name: 'controls/false/output.css',
    data: 'a {\n  content-exists: false;\n}\n',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\n@mixin a {\n  b {c: meta.content-exists(1)}\n}\n@include a;\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 0 arguments allowed, but 1 was passed.\n  ,--> input.scss\n3 |   b {c: meta.content-exists(1)}\n  |         ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function content-exists() {\n  |           ================ declaration\n  '\n  input.scss 3:9  a()\n  input.scss 5:1  root stylesheet\n",
  },
  {
    name: 'error/outside_mixin/input.scss',
    data: '@use "sass:meta";\na {b: meta.content-exists()}\n',
  },
  {
    name: 'error/outside_mixin/error',
    data: "Error: content-exists() may only be called within a mixin.\n  ,\n2 | a {b: meta.content-exists()}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/in_content/input.scss',
    data: '@use "sass:meta";\n@mixin call-content {\n  @content;\n}\n\n@include call-content {\n  a {b: meta.content-exists()}\n}\n',
  },
  {
    name: 'error/in_content/error',
    data: "Error: content-exists() may only be called within a mixin.\n  ,\n7 |   a {b: meta.content-exists()}\n  |         ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 7:9  @content\n  input.scss 3:3  call-content()\n  input.scss 6:1  root stylesheet\n",
  },
  {
    name: 'error/in_function_called_by_mixin/input.scss',
    data: '@use "sass:meta";\n@function call-content-exists() {\n  @return meta.content-exists();\n}\n\n@mixin call-function {\n  a {b: call-content-exists()};\n}\n\n@include call-function;\n',
  },
  {
    name: 'error/in_function_called_by_mixin/error',
    data: "Error: content-exists() may only be called within a mixin.\n  ,\n3 |   @return meta.content-exists();\n  |           ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:11  call-content-exists()\n  input.scss 7:9   call-function()\n  input.scss 10:1  root stylesheet\n",
  },
]
