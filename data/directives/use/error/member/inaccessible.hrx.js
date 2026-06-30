export default [
  {
    name: 'transitive/variable/input.scss',
    data: '@use "midstream" as *;\n\na {b: $upstream};\n',
  },
  {
    name: 'transitive/variable/midstream.scss',
    data: '@use "upstream" as *;\n',
  },
  {
    name: 'transitive/variable/upstream.scss',
    data: '$upstream: value;\n',
  },
  {
    name: 'transitive/variable/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: $upstream};\n  |       ^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'transitive/function/input.scss',
    data: '@use "midstream" as *;\n\n// This is technically not a compile error, since `-member()` is treated as\n// plain CSS, but it\'s included here for consistency with the other specs.\na {b: upstream()};\n',
  },
  {
    name: 'transitive/function/midstream.scss',
    data: '@use "upstream" as *;\n',
  },
  {
    name: 'transitive/function/upstream.scss',
    data: '@function upstream() {@return value}\n',
  },
  {
    name: 'transitive/function/output.css',
    data: 'a {\n  b: upstream();\n}\n',
  },
  {
    name: 'transitive/mixin/input.scss',
    data: '@use "midstream" as *;\n\n@include upstream;\n',
  },
  {
    name: 'transitive/mixin/midstream.scss',
    data: '@use "upstream" as *;\n',
  },
  {
    name: 'transitive/mixin/upstream.scss',
    data: '@mixin upstream {a {b: c}}\n',
  },
  {
    name: 'transitive/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include upstream;\n  | ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'transitive_from_import/variable/input.scss',
    data: '@import "midstream";\n\na {b: $upstream};\n',
  },
  {
    name: 'transitive_from_import/variable/midstream.scss',
    data: '@use "upstream" as *;\n',
  },
  {
    name: 'transitive_from_import/variable/upstream.scss',
    data: '$upstream: value;\n',
  },
  {
    name: 'transitive_from_import/variable/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: Undefined variable.\n  ,\n3 | a {b: $upstream};\n  |       ^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'transitive_from_import/function/input.scss',
    data: '@import "midstream";\n\n// This is technically not a compile error, since `upstream()` is treated as\n// plain CSS, but it\'s included here for consistency with the other specs.\na {b: upstream()};\n',
  },
  {
    name: 'transitive_from_import/function/midstream.scss',
    data: '@use "upstream" as *;\n',
  },
  {
    name: 'transitive_from_import/function/upstream.scss',
    data: '@function upstream() {@return value}\n',
  },
  {
    name: 'transitive_from_import/function/output.css',
    data: 'a {\n  b: upstream();\n}\n',
  },
  {
    name: 'transitive_from_import/function/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'transitive_from_import/mixin/input.scss',
    data: '@import "midstream";\n\n@include upstream;\n',
  },
  {
    name: 'transitive_from_import/mixin/midstream.scss',
    data: '@use "upstream" as *;\n',
  },
  {
    name: 'transitive_from_import/mixin/upstream.scss',
    data: '@mixin upstream {a {b: c}}\n',
  },
  {
    name: 'transitive_from_import/mixin/error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "midstream";\n  |         ^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: Undefined mixin.\n  ,\n3 | @include upstream;\n  | ^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'private/variable/input.scss',
    data: '@use "other" as *;\n\na {b: $-member};\n',
  },
  {
    name: 'private/variable/other.scss',
    data: '$-member: value;\n',
  },
  {
    name: 'private/variable/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: $-member};\n  |       ^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'private/function/input.scss',
    data: '@use "other" as *;\n\n// This is technically not a compile error, since `-member()` is treated as\n// plain CSS, but it\'s included here for consistency with the other specs.\na {b: -member()};\n',
  },
  {
    name: 'private/function/other.scss',
    data: '@function -member() {@return value}\n',
  },
  {
    name: 'private/function/output.css',
    data: 'a {\n  b: -member();\n}\n',
  },
  {
    name: 'private/mixin/input.scss',
    data: '@use "other" as *;\n\n@include -member;\n',
  },
  {
    name: 'private/mixin/other.scss',
    data: '@mixin -member {a {b: c}}\n',
  },
  {
    name: 'private/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include -member;\n  | ^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
]
