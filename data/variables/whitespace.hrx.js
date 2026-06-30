export default [
  {
    name: 'before_colon/scss/input.scss',
    data: '$a\n  : b\n',
  },
  {
    name: 'before_colon/scss/output.css',
    data: '',
  },
  {
    name: 'before_colon/sass/input.sass',
    data: '$a\n  : b\n',
  },
  {
    name: 'before_colon/sass/output.css',
    data: '',
  },
  {
    name: 'after_colon/scss/input.scss',
    data: '$a:\n  b\n',
  },
  {
    name: 'after_colon/scss/output.css',
    data: '',
  },
  {
    name: 'after_colon/sass/input.sass',
    data: '$a:\n  b\n',
  },
  {
    name: 'after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'before_default/scss/input.scss',
    data: '$a: b\n  !default;\n',
  },
  {
    name: 'before_default/scss/output.css',
    data: '',
  },
  {
    name: 'between_double_default/scss/input.scss',
    data: '$a: b !default\n  !default;\n',
  },
  {
    name: 'between_double_default/scss/output.css',
    data: '',
  },
  {
    name: 'between_double_default/scss/warning',
    data: "DEPRECATION WARNING [duplicate-var-flags]: !default should only be written once for each variable.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n2 |   !default;\n  |   ^^^^^^^^\n  '\n    input.scss 2:3  root stylesheet\n",
  },
  {
    name: 'before_global/scss/input.scss',
    data: '$a: b\n  !global;\n',
  },
  {
    name: 'before_global/scss/output.css',
    data: '',
  },
  {
    name: 'before_global/scss/warning',
    data: "DEPRECATION WARNING [new-global]: As of Dart Sass 2.0.0, !global assignments won't be able to declare new variables.\n\nSince this assignment is at the root of the stylesheet, the !global flag is\nunnecessary and can safely be removed.\n\n  ,\n1 | / $a: b\n2 | |   !global;\n  | '---------^\n  '\n    input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'error/before_default/sass/input.sass',
    data: '$a: b\n  !default\n',
  },
  {
    name: 'error/before_default/sass/error',
    data: "Error: Nothing may be indented beneath a variable declaration.\n  ,\n2 |   !default\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
  {
    name: 'error/between_double_default/sass/input.sass',
    data: '$a: b !default\n  !default\n',
  },
  {
    name: 'error/between_double_default/sass/error',
    data: "Error: Nothing may be indented beneath a variable declaration.\n  ,\n2 |   !default\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
  {
    name: 'error/before_global/sass/input.sass',
    data: '$a: b\n  !global\n',
  },
  {
    name: 'error/before_global/sass/error',
    data: "Error: Nothing may be indented beneath a variable declaration.\n  ,\n2 |   !global\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
]
