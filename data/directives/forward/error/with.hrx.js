// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/error/with.hrx

export default [
  {
    name: 'undefined/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'undefined/_midstream.scss',
    data: '@forward "upstream" with ($a: b);\n',
  },
  {
    name: 'undefined/_upstream.scss',
    data: '// This file defines no variables.\n',
  },
  {
    name: 'undefined/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @forward "upstream" with ($a: b);\n  |                           ^^^^^\n  \'\n  _midstream.scss 1:27  @use\n  input.scss 1:1        root stylesheet\n',
  },
  {
    name: 'not_default/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'not_default/_midstream.scss',
    data: '@forward "upstream" with ($a: b);\n',
  },
  {
    name: 'not_default/_upstream.scss',
    data: '$a: c;\n',
  },
  {
    name: 'not_default/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @forward "upstream" with ($a: b);\n  |                           ^^^^^\n  \'\n  _midstream.scss 1:27  @use\n  input.scss 1:1        root stylesheet\n',
  },
  {
    name: 'namespace/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'namespace/_downstream.scss',
    data: '@forward "midstream" with ($a: b);\n',
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
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @forward "midstream" with ($a: b);\n  |                            ^^^^^\n  \'\n  _downstream.scss 1:28  @use\n  input.scss 1:1         root stylesheet\n',
  },
  {
    name: 'nested/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'nested/_midstream.scss',
    data: '@forward "upstream" with ($a: b);\n',
  },
  {
    name: 'nested/_upstream.scss',
    data: 'c {$a: d !default}\n',
  },
  {
    name: 'nested/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @forward "upstream" with ($a: b);\n  |                           ^^^^^\n  \'\n  _midstream.scss 1:27  @use\n  input.scss 1:1        root stylesheet\n',
  },
  {
    name: 'conflict/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'conflict/_downstream.scss',
    data: '@forward "midstream" with ($a: b);\n',
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
    data: 'Error: This variable is available from multiple global modules.\n    ,\n1   | @use "left" as *;\n    | ================ includes variable\n2   | @use "right" as *;\n    | ================= includes variable\n... |\n4   | $a: c !default;\n    | ^^^^^^^^^^^^^^ variable use\n    \'\n  _midstream.scss 4:1   @forward\n  _downstream.scss 1:1  @use\n  input.scss 1:1        root stylesheet\n',
  },
  {
    name: 'invalid_expression/error/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'invalid_expression/error/_midstream.scss',
    data: '@forward "upstream" with ($a: 1px + 1em);\n',
  },
  {
    name: 'invalid_expression/error/_upstream.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'invalid_expression/error/error',
    data: 'Error: 1px and 1em have incompatible units.\n  ,\n1 | @forward "upstream" with ($a: 1px + 1em);\n  |                               ^^^^^^^^^\n  \'\n  _midstream.scss 1:31  @use\n  input.scss 1:1        root stylesheet\n',
  },
  {
    name: 'invalid_expression/variable_defined_later/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'invalid_expression/variable_defined_later/_midstream.scss',
    data: '@forward "upstream" with ($a: $b);\n$b: c;\n',
  },
  {
    name: 'invalid_expression/variable_defined_later/_upstream.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'invalid_expression/variable_defined_later/error',
    data: 'Error: Undefined variable.\n  ,\n1 | @forward "upstream" with ($a: $b);\n  |                               ^^\n  \'\n  _midstream.scss 1:31  @use\n  input.scss 1:1        root stylesheet\n',
  },
  {
    name: 'invalid_expression/module_loaded_later/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'invalid_expression/module_loaded_later/_midstream.scss',
    data: '@forward "configured" with ($a: upstream.$b);\n@use "upstream";\n',
  },
  {
    name: 'invalid_expression/module_loaded_later/_configured.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'invalid_expression/module_loaded_later/_upstream.scss',
    data: '$b: d;\n',
  },
  {
    name: 'invalid_expression/module_loaded_later/error',
    data: 'Error: There is no module with the namespace "upstream".\n  ,\n1 | @forward "configured" with ($a: upstream.$b);\n  |                                 ^^^^^^^^^^^\n  \'\n  _midstream.scss 1:33  @use\n  input.scss 1:1        root stylesheet\n',
  },
  {
    name: 'repeated_variable/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'repeated_variable/_other.scss',
    data: '@forward "upstream" with ($a: b, $a: c);\n',
  },
  {
    name: 'repeated_variable/error',
    data: 'Error: The same variable may only be configured once.\n  ,\n1 | @forward "upstream" with ($a: b, $a: c);\n  |                                  ^^^^^\n  \'\n  _other.scss 1:34  @use\n  input.scss 1:1    root stylesheet\n',
  },
  {
    name: 'core_module/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'core_module/_other.scss',
    data: '@forward "sass:color" with ($a: b);\n',
  },
  {
    name: 'core_module/error',
    data: 'Error: Built-in modules can\'t be configured.\n  ,\n1 | @forward "sass:color" with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  _other.scss 1:1  @use\n  input.scss 1:1   root stylesheet\n',
  },
  {
    name: 'private/README.md',
    data: 'These will be errors in Dart Sass 2.0.0.\n',
  },
  {
    name: 'private/matching/dash/input.scss',
    data: '@forward "other" with ($-a: b);\n',
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
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n1 | @forward "other" with ($-a: b);\n  |                        ^^^\n  \'\n    input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'private/matching/underscore/input.scss',
    data: '@forward "other" with ($_a: b);\n',
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
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n1 | @forward "other" with ($_a: b);\n  |                        ^^^\n  \'\n    input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'private/different/input.scss',
    data: '@forward "other" with ($-a: b);\n',
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
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n1 | @forward "other" with ($-a: b);\n  |                        ^^^\n  \'\n    input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'multi_configuration/README.md',
    data: "The same file can't be configured multiple times, even if the configuration is\nidentical.\n",
  },
  {
    name: 'multi_configuration/one_file/input.scss',
    data: '@forward "other" with ($a: b);\n@forward "other" with ($a: b);\n',
  },
  {
    name: 'multi_configuration/one_file/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_configuration/one_file/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,\n1 | @forward "other" with ($a: b);\n  | ============================= original load\n2 | @forward "other" with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'multi_configuration/multi_file/input.scss',
    data: '@use "left";\n@use "right";\n',
  },
  {
    name: 'multi_configuration/multi_file/_left.scss',
    data: '@forward "other" with ($a: b);\n',
  },
  {
    name: 'multi_configuration/multi_file/_right.scss',
    data: '@forward "other" with ($a: b);\n',
  },
  {
    name: 'multi_configuration/multi_file/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_configuration/multi_file/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,--> _right.scss\n1 | @forward "other" with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  ,--> _left.scss\n1 | @forward "other" with ($a: b);\n  | ============================= original load\n  \'\n  _right.scss 1:1  @use\n  input.scss 2:1   root stylesheet\n',
  },
  {
    name: 'multi_configuration/unconfigured_first/input.scss',
    data: '@forward "other";\n@forward "other" with ($a: b);\n',
  },
  {
    name: 'multi_configuration/unconfigured_first/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_configuration/unconfigured_first/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,\n1 | @forward "other";\n  | ================ original load\n2 | @forward "other" with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'multi_configuration/through_forward/input.scss',
    data: '@use "upstream";\n@forward "midstream" with ($a: b, $c: d);\n',
  },
  {
    name: 'multi_configuration/through_forward/_midstream.scss',
    data: '@forward "upstream";\n\n$a: e !default;\n',
  },
  {
    name: 'multi_configuration/through_forward/_upstream.scss',
    data: '// This only throws an error because it defines a configurable variable.\n$c: f !default;\n',
  },
  {
    name: 'multi_configuration/through_forward/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,--> _midstream.scss\n1 | @forward "upstream";\n  | ^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  ,--> input.scss\n1 | @use "upstream";\n  | =============== original load\n2 | @forward "midstream" with ($a: b, $c: d);\n  | ======================================== configuration\n  \'\n  _midstream.scss 1:1  @forward\n  input.scss 2:1       root stylesheet\n',
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@forward "midstream" with ($a: b);\n',
  },
  {
    name: 'through_forward/show/_midstream.scss',
    data: '@forward "upstream" show $b;\n',
  },
  {
    name: 'through_forward/show/_upstream.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'through_forward/show/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @forward "midstream" with ($a: b);\n  |                            ^^^^^\n  \'\n  input.scss 1:28  root stylesheet\n',
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@forward "midstream" with ($a: b);\n',
  },
  {
    name: 'through_forward/hide/_midstream.scss',
    data: '@forward "upstream" hide $a;\n',
  },
  {
    name: 'through_forward/hide/_upstream.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'through_forward/hide/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @forward "midstream" with ($a: b);\n  |                            ^^^^^\n  \'\n  input.scss 1:28  root stylesheet\n',
  },
  {
    name: 'through_forward/as/input.scss',
    data: '@forward "midstream" with ($a: b);\n',
  },
  {
    name: 'through_forward/as/_midstream.scss',
    data: '@forward "upstream" as c-*;\n',
  },
  {
    name: 'through_forward/as/_upstream.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'through_forward/as/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @forward "midstream" with ($a: b);\n  |                            ^^^^^\n  \'\n  input.scss 1:28  root stylesheet\n',
  },
  {
    name: 'through_forward/with/input.scss',
    data: '@forward "midstream" with ($a: b);\n',
  },
  {
    name: 'through_forward/with/_midstream.scss',
    data: '@forward "upstream" with ($a: c);\n',
  },
  {
    name: 'through_forward/with/_upstream.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'through_forward/with/error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @forward "midstream" with ($a: b);\n  |                            ^^^^^\n  \'\n  input.scss 1:28  root stylesheet\n',
  },
]
