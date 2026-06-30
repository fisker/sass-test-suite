// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/error/with.hrx

export default [
  {
    name: 'undefined/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a: b));\n',
  },
  {
    name: 'undefined/_other.scss',
    data: '// This file defines no variables.\n',
  },
  {
    name: 'undefined/error',
    data: 'Error: $a was not declared with !default in the @used module.\n  ,\n2 | @include meta.load-css("other", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'not_default/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a: b));\n',
  },
  {
    name: 'not_default/_other.scss',
    data: '$a: c;\n',
  },
  {
    name: 'not_default/error',
    data: 'Error: $a was not declared with !default in the @used module.\n  ,\n2 | @include meta.load-css("other", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'namespace/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("midstream", $with: (a: b));\n',
  },
  {
    name: 'namespace/_midstream.scss',
    data: '@use "upstream";\nupstream.$a: c !default;\n',
  },
  {
    name: 'namespace/_upstream.scss',
    data: '$a: d;\n',
  },
  {
    name: 'namespace/error',
    data: 'Error: $a was not declared with !default in the @used module.\n  ,\n2 | @include meta.load-css("midstream", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'nested/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a: b));\n',
  },
  {
    name: 'nested/_other.scss',
    data: 'c {$a: d !default}\n',
  },
  {
    name: 'nested/error',
    data: 'Error: $a was not declared with !default in the @used module.\n  ,\n2 | @include meta.load-css("other", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'conflict/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("midstream", $with: (a: b));\n',
  },
  {
    name: 'conflict/_midstream.scss',
    data: '@use "left" as *;\n@use "right" as *;\n\n$a: c !default;\n',
  },
  {
    name: 'conflict/_left.scss',
    data: '$a: left;\n',
  },
  {
    name: 'conflict/_right.scss',
    data: '$a: right;\n',
  },
  {
    name: 'conflict/error',
    data: 'Error: This variable is available from multiple global modules.\n    ,\n1   | @use "left" as *;\n    | ================ includes variable\n2   | @use "right" as *;\n    | ================= includes variable\n... |\n4   | $a: c !default;\n    | ^^^^^^^^^^^^^^ variable use\n    \'\n  _midstream.scss 4:1  load-css()\n  input.scss 2:1       root stylesheet\n',
  },
  {
    name: 'repeated_variable/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a-b: c, a_b: c));\n',
  },
  {
    name: 'repeated_variable/_other.scss',
    data: '$a-b: c !default;\n',
  },
  {
    name: 'repeated_variable/error',
    data: 'Error: The variable $a-b was configured twice.\n  ,\n2 | @include meta.load-css("other", $with: (a-b: c, a_b: c));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'core_module/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("sass:color", $with: (a: b));\n',
  },
  {
    name: 'core_module/error',
    data: 'Error: Built-in module sass:color can\'t be configured.\n  ,\n2 | @include meta.load-css("sass:color", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'private/README.md',
    data: 'These will be errors in Dart Sass 2.0.0.\n',
  },
  {
    name: 'private/matching/dash/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: ("-a": b));\n',
  },
  {
    name: 'private/matching/dash/_other.scss',
    data: '$-a: c !default;\nd {e: $-a}\n',
  },
  {
    name: 'private/matching/dash/output.css',
    data: 'd {\n  e: b;\n}\n',
  },
  {
    name: 'private/matching/dash/warning',
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables (such as $-a) is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n2 | @include meta.load-css("other", $with: ("-a": b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'private/matching/underscore/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: ("_a": b));\n',
  },
  {
    name: 'private/matching/underscore/_other.scss',
    data: '$_a: c !default;\nd {e: $_a}\n',
  },
  {
    name: 'private/matching/underscore/output.css',
    data: 'd {\n  e: b;\n}\n',
  },
  {
    name: 'private/matching/underscore/warning',
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables (such as $-a) is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n2 | @include meta.load-css("other", $with: ("_a": b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'private/different/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: ("-a": b));\n',
  },
  {
    name: 'private/different/_other.scss',
    data: '$_a: c !default;\nd {e: $_a}\n',
  },
  {
    name: 'private/different/output.css',
    data: 'd {\n  e: b;\n}\n',
  },
  {
    name: 'private/different/warning',
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables (such as $-a) is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n2 | @include meta.load-css("other", $with: ("-a": b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'multi_configuration/README.md',
    data: "The same file can't be configured multiple times, even if the configuration is\nidentical.\n",
  },
  {
    name: 'multi_configuration/double_load/both_configured/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a: b));\n@include meta.load-css("other", $with: (a: b));\n',
  },
  {
    name: 'multi_configuration/double_load/both_configured/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_configuration/double_load/both_configured/error',
    data: 'Error: _other.scss was already loaded, so it can\'t be configured using "with".\n  ,\n2 | @include meta.load-css("other", $with: (a: b));\n  | ============================================== original load\n3 | @include meta.load-css("other", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'multi_configuration/double_load/unconfigured_first/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n@include meta.load-css("other", $with: (a: b));\n',
  },
  {
    name: 'multi_configuration/double_load/unconfigured_first/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_configuration/double_load/unconfigured_first/error',
    data: 'Error: _other.scss was already loaded, so it can\'t be configured using "with".\n  ,\n2 | @include meta.load-css("other");\n  | =============================== original load\n3 | @include meta.load-css("other", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'multi_configuration/double_load/through_forward/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("forwarded");\n@include meta.load-css("midstream", $with: (a: b, c: d));\n',
  },
  {
    name: 'multi_configuration/double_load/through_forward/_midstream.scss',
    data: '@forward "forwarded";\n\n$a: e !default;\n',
  },
  {
    name: 'multi_configuration/double_load/through_forward/_forwarded.scss',
    data: '// This only throws an error because it defines a configurable variable.\n$c: f !default;\n',
  },
  {
    name: 'multi_configuration/double_load/through_forward/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,--> _midstream.scss\n1 | @forward "forwarded";\n  | ^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  ,--> input.scss\n2 | @include meta.load-css("forwarded");\n  | =================================== original load\n3 | @include meta.load-css("midstream", $with: (a: b, c: d));\n  | ======================================================== configuration\n  \'\n  _midstream.scss 1:1  load-css()\n  input.scss 3:1       root stylesheet\n',
  },
  {
    name: 'multi_configuration/use_and_load/both_configured/input.scss',
    data: '@use "sass:meta";\n@use "other" with ($a: b);\n@include meta.load-css("other", $with: (a: b));\n',
  },
  {
    name: 'multi_configuration/use_and_load/both_configured/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_configuration/use_and_load/both_configured/error',
    data: 'Error: _other.scss was already loaded, so it can\'t be configured using "with".\n  ,\n2 | @use "other" with ($a: b);\n  | ========================= original load\n3 | @include meta.load-css("other", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'multi_configuration/use_and_load/load_first/input.scss',
    data: '// This indirection is necessary so that we can execute `meta.load-css()` before\n// we begin loading `used`.\n@use "loads";\n@use "other" with ($a: b);\n',
  },
  {
    name: 'multi_configuration/use_and_load/load_first/_loads.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a: b));\n',
  },
  {
    name: 'multi_configuration/use_and_load/load_first/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_configuration/use_and_load/load_first/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,--> input.scss\n4 | @use "other" with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  ,--> _loads.scss\n2 | @include meta.load-css("other", $with: (a: b));\n  | ============================================== original load\n  \'\n  input.scss 4:1  root stylesheet\n',
  },
  {
    name: 'multi_configuration/use_and_load/unconfigured_first/input.scss',
    data: '@use "sass:meta";\n@use "other";\n@include meta.load-css("other", $with: (a: b));\n',
  },
  {
    name: 'multi_configuration/use_and_load/unconfigured_first/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_configuration/use_and_load/unconfigured_first/error',
    data: 'Error: _other.scss was already loaded, so it can\'t be configured using "with".\n  ,\n2 | @use "other";\n  | ============ original load\n3 | @include meta.load-css("other", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'multi_configuration/use_and_load/through_forward/input.scss',
    data: '@use "sass:meta";\n@use "forwarded";\n@include meta.load-css("midstream", $with: (a: b, c: d));\n',
  },
  {
    name: 'multi_configuration/use_and_load/through_forward/_midstream.scss',
    data: '@forward "forwarded";\n\n$a: e !default;\n',
  },
  {
    name: 'multi_configuration/use_and_load/through_forward/_forwarded.scss',
    data: '// This only throws an error because it defines a configurable variable.\n$c: f !default;\n',
  },
  {
    name: 'multi_configuration/use_and_load/through_forward/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,--> _midstream.scss\n1 | @forward "forwarded";\n  | ^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  ,--> input.scss\n2 | @use "forwarded";\n  | ================ original load\n3 | @include meta.load-css("midstream", $with: (a: b, c: d));\n  | ======================================================== configuration\n  \'\n  _midstream.scss 1:1  load-css()\n  input.scss 3:1       root stylesheet\n',
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("used", $with: (a: b));\n',
  },
  {
    name: 'through_forward/show/_used.scss',
    data: '@forward "forwarded" show $b;\n',
  },
  {
    name: 'through_forward/show/_forwarded.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'through_forward/show/error',
    data: 'Error: $a was not declared with !default in the @used module.\n  ,\n2 | @include meta.load-css("used", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("used", $with: (a: b));\n',
  },
  {
    name: 'through_forward/hide/_used.scss',
    data: '@forward "forwarded" hide $a;\n',
  },
  {
    name: 'through_forward/hide/_forwarded.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'through_forward/hide/error',
    data: 'Error: $a was not declared with !default in the @used module.\n  ,\n2 | @include meta.load-css("used", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'through_forward/as/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("used", $with: (a: b));\n',
  },
  {
    name: 'through_forward/as/_used.scss',
    data: '@forward "forwarded" as c-*;\n',
  },
  {
    name: 'through_forward/as/_forwarded.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'through_forward/as/error',
    data: 'Error: $a was not declared with !default in the @used module.\n  ,\n2 | @include meta.load-css("used", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'through_forward/with/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("used", $with: (a: b));\n',
  },
  {
    name: 'through_forward/with/_used.scss',
    data: '@forward "forwarded" with ($a: c);\n',
  },
  {
    name: 'through_forward/with/_forwarded.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'through_forward/with/error',
    data: 'Error: $a was not declared with !default in the @used module.\n  ,\n2 | @include meta.load-css("used", $with: (a: b));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
]
