// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/error/member/inaccessible.hrx

export default [
  {
    name: 'local/variable/input.scss',
    data: '@forward "other";\n\na {b: $c};\n',
  },
  {
    name: 'local/variable/_other.scss',
    data: '$c: d;\n',
  },
  {
    name: 'local/variable/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: $c};\n  |       ^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'local/function/input.scss',
    data: '@forward "other";\n\n// This is technically not a compile error, since `-member()` is treated as\n// plain CSS, but it\'s included here for consistency with the other specs.\na {b: c()};\n',
  },
  {
    name: 'local/function/_other.scss',
    data: '@function c() {@return d}\n',
  },
  {
    name: 'local/function/output.css',
    data: 'a {\n  b: c();\n}\n',
  },
  {
    name: 'local/mixin/input.scss',
    data: '@forward "other";\n\n@include a;\n',
  },
  {
    name: 'local/mixin/_other.scss',
    data: '@mixin a {b {c: d}}\n',
  },
  {
    name: 'local/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include a;\n  | ^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'private/variable/input.scss',
    data: '@use "midstream" as *;\n\na {b: $-c};\n',
  },
  {
    name: 'private/variable/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'private/variable/_upstream.scss',
    data: '$-c: d;\n',
  },
  {
    name: 'private/variable/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: $-c};\n  |       ^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'private/function/input.scss',
    data: '@use "midstream" as *;\n\n// This is technically not a compile error, since `-member()` is treated as\n// plain CSS, but it\'s included here for consistency with the other specs.\na {b: -c()};\n',
  },
  {
    name: 'private/function/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'private/function/_upstream.scss',
    data: '@function -c() {@return d}\n',
  },
  {
    name: 'private/function/output.css',
    data: 'a {\n  b: -c();\n}\n',
  },
  {
    name: 'private/mixin/input.scss',
    data: '@use "midstream" as *;\n\n@include -a;\n',
  },
  {
    name: 'private/mixin/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'private/mixin/_upstream.scss',
    data: '@mixin -a {b {c: d}}\n',
  },
  {
    name: 'private/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include -a;\n  | ^^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'hidden/variable/input.scss',
    data: '@use "midstream" as *;\n\na {b: $c}\n',
  },
  {
    name: 'hidden/variable/_midstream.scss',
    data: '@forward "upstream" hide $c;\n',
  },
  {
    name: 'hidden/variable/_upstream.scss',
    data: '$c: d;\n',
  },
  {
    name: 'hidden/variable/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: $c}\n  |       ^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'hidden/mixin/input.scss',
    data: '@use "midstream" as *;\n\n@include a;\n',
  },
  {
    name: 'hidden/mixin/_midstream.scss',
    data: '@forward "upstream" hide a;\n',
  },
  {
    name: 'hidden/mixin/_upstream.scss',
    data: '@mixin a {b {c: d}}\n',
  },
  {
    name: 'hidden/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include a;\n  | ^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'hidden/as/different_separator/input.scss',
    data: '@use "midstream" as *;\n\n@include a;\n',
  },
  {
    name: 'hidden/as/different_separator/_midstream.scss',
    data: '@forward "upstream" as b-* hide b_a;\n',
  },
  {
    name: 'hidden/as/different_separator/_upstream.scss',
    data: '@as a {b {c: d}}\n',
  },
  {
    name: 'hidden/as/different_separator/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include a;\n  | ^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'hidden/as/same_separator/input.scss',
    data: '@use "midstream" as *;\n\n@include a;\n',
  },
  {
    name: 'hidden/as/same_separator/_midstream.scss',
    data: '@forward "upstream" as b-* hide b-a;\n',
  },
  {
    name: 'hidden/as/same_separator/_upstream.scss',
    data: '@as a {b {c: d}}\n',
  },
  {
    name: 'hidden/as/same_separator/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include a;\n  | ^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'not_shown/variable/input.scss',
    data: '@use "midstream" as *;\n\na {b: $c}\n',
  },
  {
    name: 'not_shown/variable/_midstream.scss',
    data: '@forward "upstream" show $d;\n',
  },
  {
    name: 'not_shown/variable/_upstream.scss',
    data: '$c: e;\n',
  },
  {
    name: 'not_shown/variable/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: $c}\n  |       ^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'not_shown/mixin/input.scss',
    data: '@use "midstream" as *;\n\n@include a;\n',
  },
  {
    name: 'not_shown/mixin/_midstream.scss',
    data: '@forward "upstream" show b;\n',
  },
  {
    name: 'not_shown/mixin/_upstream.scss',
    data: '@mixin a {c {d: e}}\n',
  },
  {
    name: 'not_shown/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include a;\n  | ^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'not_shown/wrong_type/variable/input.scss',
    data: '@use "midstream" as *;\n\na {b: $c}\n',
  },
  {
    name: 'not_shown/wrong_type/variable/_midstream.scss',
    data: '@forward "upstream" show c;\n',
  },
  {
    name: 'not_shown/wrong_type/variable/_upstream.scss',
    data: '$c: e;\n',
  },
  {
    name: 'not_shown/wrong_type/variable/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: $c}\n  |       ^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'not_shown/wrong_type/mixin/input.scss',
    data: '@use "midstream" as *;\n\n@include a;\n',
  },
  {
    name: 'not_shown/wrong_type/mixin/_midstream.scss',
    data: '@forward "upstream" show $a;\n',
  },
  {
    name: 'not_shown/wrong_type/mixin/_upstream.scss',
    data: '@mixin a {c {d: e}}\n',
  },
  {
    name: 'not_shown/wrong_type/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include a;\n  | ^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'not_shown/as/mixin/input.scss',
    data: '@use "midstream" as *;\n\n@include b-a;\n',
  },
  {
    name: 'not_shown/as/mixin/_midstream.scss',
    data: '@forward "upstream" as b-* show a;\n',
  },
  {
    name: 'not_shown/as/mixin/_upstream.scss',
    data: '@mixin a {c {d: e}}\n',
  },
  {
    name: 'not_shown/as/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include b-a;\n  | ^^^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
]
