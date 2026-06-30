// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/member/missing.hrx

export default [
  {
    name: 'namespaced/variable_use/input.scss',
    data: '@use "other";\n\na {b: other.$member}\n',
  },
  {
    name: 'namespaced/variable_use/other.scss',
    data: '',
  },
  {
    name: 'namespaced/variable_use/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: other.$member}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'namespaced/variable_declaration/input.scss',
    data: '@use "other";\n\nother.$member: value;\n',
  },
  {
    name: 'namespaced/variable_declaration/other.scss',
    data: '',
  },
  {
    name: 'namespaced/variable_declaration/error',
    data: "Error: Undefined variable.\n  ,\n3 | other.$member: value;\n  | ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'namespaced/function/input.scss',
    data: '@use "other";\n\na {b: other.member()}\n',
  },
  {
    name: 'namespaced/function/other.scss',
    data: '',
  },
  {
    name: 'namespaced/function/error',
    data: "Error: Undefined function.\n  ,\n3 | a {b: other.member()}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'namespaced/mixin/input.scss',
    data: '@use "other";\n\n@include other.member;\n',
  },
  {
    name: 'namespaced/mixin/other.scss',
    data: '',
  },
  {
    name: 'namespaced/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include other.member;\n  | ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
  {
    name: 'global/variable/input.scss',
    data: '@use "other";\n\na {b: $member}\n',
  },
  {
    name: 'global/variable/other.scss',
    data: '',
  },
  {
    name: 'global/variable/error',
    data: "Error: Undefined variable.\n  ,\n3 | a {b: $member}\n  |       ^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'global/mixin/input.scss',
    data: '@use "other";\n\n@include member;\n',
  },
  {
    name: 'global/mixin/other.scss',
    data: '',
  },
  {
    name: 'global/mixin/error',
    data: "Error: Undefined mixin.\n  ,\n3 | @include member;\n  | ^^^^^^^^^^^^^^^\n  '\n  input.scss 3:1  root stylesheet\n",
  },
]
