// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/with/core_module.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color" with ($a: b);\n',
  },
  {
    name: 'error',
    data: 'Error: Built-in modules can\'t be configured.\n  ,\n1 | @use "sass:color" with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
]
