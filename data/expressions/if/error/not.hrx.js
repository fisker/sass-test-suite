export default [
  {
    name: 'empty/input.scss',
    data: 'a {b: if(not: c)}\n',
  },
  {
    name: 'empty/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: if(not: c)}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'not/input.scss',
    data: 'a {b: if(not not css(): c)}\n',
  },
  {
    name: 'not/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(not not css(): c)}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'and/input.scss',
    data: 'a {b: if(not css(1) and css(2): c)}\n',
  },
  {
    name: 'and/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(not css(1) and css(2): c)}\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'or/input.scss',
    data: 'a {b: if(not css(1) or css(2): c)}\n',
  },
  {
    name: 'or/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(not css(1) or css(2): c)}\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'else/input.scss',
    data: 'a {b: if(not else: c)}\n',
  },
  {
    name: 'else/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(not else: c)}\n  |                  ^\n  \'\n  input.scss 1:18  root stylesheet\n',
  },
]
