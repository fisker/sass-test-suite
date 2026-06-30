// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/member/before_use.hrx

export default [
  {
    name: 'variable_use/input.scss',
    data: '$variable: other.$member;\n@use "other";\n',
  },
  {
    name: 'variable_use/other.scss',
    data: '$member: value;\n',
  },
  {
    name: 'variable_use/error',
    data: 'Error: There is no module with the namespace "other".\n  ,\n1 | $variable: other.$member;\n  |            ^^^^^^^^^^^^^\n  \'\n  input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'variable_declaration/input.scss',
    data: 'other.$member: value;\n@use "other";\n',
  },
  {
    name: 'variable_declaration/other.scss',
    data: '$member: value;\n',
  },
  {
    name: 'variable_declaration/error',
    data: 'Error: There is no module with the namespace "other".\n  ,\n1 | other.$member: value;\n  | ^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'variable_declaration_without_namespace/input.scss',
    data: '$member: from input;\n\n@use "other" as *;\n\na {b: $member}\n',
  },
  {
    name: 'variable_declaration_without_namespace/other.scss',
    data: '$member: from other;\n',
  },
  {
    name: 'variable_declaration_without_namespace/error',
    data: 'Error: This module and the new module both define a variable named "$member".\n  ,\n3 | @use "other" as *;\n  | ^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:1  root stylesheet\n',
  },
  {
    name: 'function/input.scss',
    data: '$variable: other.member();\n@use "other";\n',
  },
  {
    name: 'function/other.scss',
    data: '@function member() {@return null}\n',
  },
  {
    name: 'function/error',
    data: 'Error: There is no module with the namespace "other".\n  ,\n1 | $variable: other.member();\n  |            ^^^^^^^^^^^^^^\n  \'\n  input.scss 1:12  root stylesheet\n',
  },
]
