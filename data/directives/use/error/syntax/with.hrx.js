export default [
  {
    name: 'empty/input.scss',
    data: '@use "other" with ();\n',
  },
  {
    name: 'empty/error',
    data: 'Error: expected "$".\n  ,\n1 | @use "other" with ();\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'missing_keyword/input.scss',
    data: '@use "other" with (a);\n',
  },
  {
    name: 'missing_keyword/error',
    data: 'Error: expected "$".\n  ,\n1 | @use "other" with (a);\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'missing_value/input.scss',
    data: '@use "other" with ($a);\n',
  },
  {
    name: 'missing_value/error',
    data: 'Error: expected ":".\n  ,\n1 | @use "other" with ($a);\n  |                      ^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
  {
    name: 'space_after_dollar/input.scss',
    data: '@use "other" with ($ a: b);\n',
  },
  {
    name: 'space_after_dollar/error',
    data: 'Error: Expected identifier.\n  ,\n1 | @use "other" with ($ a: b);\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'namespace_variable/input.scss',
    data: '@use "other" with (a.$b: c);\n',
  },
  {
    name: 'namespace_variable/error',
    data: 'Error: expected "$".\n  ,\n1 | @use "other" with (a.$b: c);\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'extra_comma/input.scss',
    data: '@use "other" with ($a: b,,);\n',
  },
  {
    name: 'extra_comma/error',
    data: 'Error: expected ")".\n  ,\n1 | @use "other" with ($a: b,,);\n  |                          ^\n  \'\n  input.scss 1:26  root stylesheet\n',
  },
  {
    name: 'default/input.scss',
    data: '@use "other" with ($a: b !default);\n',
  },
  {
    name: 'default/error',
    data: 'Error: expected ")".\n  ,\n1 | @use "other" with ($a: b !default);\n  |                          ^\n  \'\n  input.scss 1:26  root stylesheet\n',
  },
  {
    name: 'no_arguments/input.scss',
    data: '@use "other" with;\n',
  },
  {
    name: 'no_arguments/error',
    data: 'Error: expected "(".\n  ,\n1 | @use "other" with;\n  |                  ^\n  \'\n  input.scss 1:18  root stylesheet\n',
  },
  {
    name: 'before_as/input.scss',
    data: '@use "other" with ($a: b) as c;\n\n',
  },
  {
    name: 'before_as/error',
    data: 'Error: expected ";".\n  ,\n1 | @use "other" with ($a: b) as c;\n  |                           ^\n  \'\n  input.scss 1:27  root stylesheet\n',
  },
]
