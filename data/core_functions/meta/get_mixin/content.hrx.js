export default [
  {
    name: 'passes_content/input.scss',
    data: '@use "sass:meta";\n\n@mixin a {\n  b {@content}\n}\n\na {\n  @include meta.apply(meta.get-mixin("a")) {\n    b: red;\n  }\n}\n',
  },
  {
    name: 'passes_content/output.css',
    data: 'a b {\n  b: red;\n}\n',
  },
  {
    name: 'passes_empty_content/input.scss',
    data: '@use "sass:meta";\n\n@mixin a {@content;}\n\na {\n  @include meta.apply(meta.get-mixin("a")) {}\n}\n',
  },
  {
    name: 'passes_empty_content/output.css',
    data: '',
  },
  {
    name: 'scope/redeclare/vars/input.scss',
    data: '@use "sass:meta";\n@mixin a($param: param) {\n  $in-mixin: in-mixin;\n  @content;\n  param: $param;\n  in-mixin: $in-mixin;\n}\n\n$global: global;\n\na {\n  $in-style-rule: in-style-rule;\n  @include meta.apply(meta.get-mixin("a")) {\n    $param: in-include;\n    $in-mixin: in-include;\n    $global: in-include;\n    $in-style-rule: in-include;\n  }\n  global: $global;\n  in-style-rule: $in-style-rule;\n}\n',
  },
  {
    name: 'scope/redeclare/vars/output.css',
    data: 'a {\n  param: param;\n  in-mixin: in-mixin;\n  global: global;\n  in-style-rule: in-include;\n}\n',
  },
  {
    name: 'scope/redeclare/using/input.scss',
    data: '@use "sass:meta";\n@mixin a($a: param) {@content(content-arg);}\n\n$a: global;\n\na {\n  $a: in-style-rule;\n  @include meta.apply(meta.get-mixin("a")) using ($a) {\n    in-content-body: $a;\n    $a: in-content-body;\n  }\n  in-style-rule: $a;\n}\n',
  },
  {
    name: 'scope/redeclare/using/output.css',
    data: 'a {\n  in-content-body: content-arg;\n  in-style-rule: in-style-rule;\n}\n',
  },
  {
    name: 'scope/fall_through/input.scss',
    data: '@use "sass:meta";\n$global: global;\n\n@mixin a {\n  @content(content-rule-a);\n  global: $global;\n}\n\n@mixin b {\n  $global: in-mixin-b;\n  @include meta.apply(meta.get-mixin(a)) using ($content-arg) {\n    @content($content-arg);\n  }\n}\n\n@mixin c {\n  $global: in-mixin-c;\n  @include meta.apply(meta.get-mixin(b)) using ($content-arg) {\n    @content($content-arg);\n  }\n}\n\na {\n  $global: in-style-rule;\n  @include meta.apply(meta.get-mixin(c)) using ($content-arg) {\n    in-content-body: $content-arg;\n  }\n}\n',
  },
  {
    name: 'scope/fall_through/output.css',
    data: 'a {\n  in-content-body: content-rule-a;\n  global: global;\n}\n',
  },
  {
    name: 'error/denies_content/user_defined/input.scss',
    data: '@use "sass:meta";\n@mixin a {}\n\na {\n  @include meta.apply(meta.get-mixin("a")) {}\n}\n',
  },
  {
    name: 'error/denies_content/user_defined/error',
    data: 'Error: Mixin doesn\'t accept a content block.\n    ,\n2   | @mixin a {}\n    |        = declaration\n... |\n5   |   @include meta.apply(meta.get-mixin("a")) {}\n    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n    \'\n  input.scss 5:3  root stylesheet\n',
  },
  {
    name: 'error/denies_content/builtin/input.scss',
    data: '@use "sass:meta";\n\na {\n  @include meta.apply(meta.get-mixin(load-css, meta), "a") {\n    a: b;\n  }\n}\n',
  },
  {
    name: 'error/denies_content/builtin/error',
    data: "Error: Mixin doesn't accept a content block.\n  ,--> input.scss\n4 |   @include meta.apply(meta.get-mixin(load-css, meta), \"a\") {\n  |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @mixin load-css($url, $with: null) {\n  |        =========================== declaration\n  '\n  input.scss 4:3  root stylesheet\n",
  },
]
