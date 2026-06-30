// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/misc/error-directive.hrx

export default [
  {
    name: 'input.scss',
    data: '@error "Buckle your seatbelt Dorothy, \'cause Kansas is going bye-bye"\n',
  },
  {
    name: 'error',
    data: 'Error: "Buckle your seatbelt Dorothy, \'cause Kansas is going bye-bye"\n  ,\n1 | @error "Buckle your seatbelt Dorothy, \'cause Kansas is going bye-bye"\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
]
