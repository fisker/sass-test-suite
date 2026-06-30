export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n$continue: true;\r\n$root_default: initial;\r\n$root_implicit: initial;\r\n$root_explicit: initial !global;\r\n\r\n@for $outer from 1 to 2 {\r\n  $root_implicit: outer;\r\n  $root_explicit: outer !global;\r\n  $root_default: outer !default;\r\n  $local_implicit: outer;\r\n  $local_explicit: outer !global;\r\n  $local_default: outer !default;\r\n  @for $inner from 3 to 4 {\r\n    $root_implicit: inner;\r\n    $root_explicit: inner !global;\r\n    $root_default: inner !default;\r\n    $local_implicit: inner;\r\n    $local_explicit: inner !global;\r\n    $local_default: inner !default;\r\n  }\r\n}\r\n\r\nresult {\r\n  @if meta.variable-exists(outer) {\r\n    outer: $outer;\r\n  }\r\n  @if meta.variable-exists(inner) {\r\n    inner: $inner;\r\n  }\r\n  root_default: $root_default;\r\n  root_implicit: $root_implicit;\r\n  root_explicit: $root_explicit;\r\n  @if meta.variable-exists(local_default) {\r\n    local_default: $local_default;\r\n  }\r\n  @if meta.variable-exists(local_implicit) {\r\n    local_implicit: $local_implicit;\r\n  }\r\n  @if meta.variable-exists(local_explicit) {\r\n    local_explicit: $local_explicit;\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'result {\n  root_default: initial;\n  root_implicit: inner;\n  root_explicit: inner;\n  local_explicit: inner;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [new-global]: As of Dart Sass 2.0.0, !global assignments won't be able to declare new variables.\n\nSince this assignment is at the root of the stylesheet, the !global flag is\nunnecessary and can safely be removed.\n\n  ,\n5 | $root_explicit: initial !global;\r\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 5:1  root stylesheet\n\nDEPRECATION WARNING [new-global]: As of Dart Sass 2.0.0, !global assignments won't be able to declare new variables.\n\nRecommendation: add `$local_explicit: null` at the stylesheet root.\n\n   ,\n12 |   $local_explicit: outer !global;\r\n   |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   '\n    input.scss 12:3  root stylesheet\n",
  },
]
