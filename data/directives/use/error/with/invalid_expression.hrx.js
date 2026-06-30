// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/with/invalid_expression.hrx

export default [
  {
    name: 'error/input.scss',
    data: '@use "other" with ($a: 1px + 1em);\n',
  },
  {
    name: 'error/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'error/error',
    data: 'Error: 1px and 1em have incompatible units.\n  ,\n1 | @use "other" with ($a: 1px + 1em);\n  |                        ^^^^^^^^^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'variable_defined_later/input.scss',
    data: '@use "other" with ($a: $b);\n$b: c;\n',
  },
  {
    name: 'variable_defined_later/_other.scss',
    data: '$a: d !default;\n',
  },
  {
    name: 'variable_defined_later/error',
    data: 'Error: Undefined variable.\n  ,\n1 | @use "other" with ($a: $b);\n  |                        ^^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'module_loaded_later/input.scss',
    data: '@use "configured" with ($a: other.$b);\n@use "other";\n',
  },
  {
    name: 'module_loaded_later/_configured.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'module_loaded_later/_other.scss',
    data: '$b: d;\n',
  },
  {
    name: 'module_loaded_later/error',
    data: 'Error: There is no module with the namespace "other".\n  ,\n1 | @use "configured" with ($a: other.$b);\n  |                             ^^^^^^^^\n  \'\n  input.scss 1:29  root stylesheet\n',
  },
]
