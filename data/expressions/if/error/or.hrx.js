export default [
  {
    name: 'empty/input.scss',
    data: 'a {b: if(css(1) or: c)}\n',
  },
  {
    name: 'empty/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: if(css(1) or: c)}\n  |                   ^\n  '\n  input.scss 1:19  root stylesheet\n",
  },
  {
    name: 'and/input.scss',
    data: 'a {b: if(css(1) or css(2) and css(3): c)}\n',
  },
  {
    name: 'and/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(css(1) or css(2) and css(3): c)}\n  |                           ^\n  \'\n  input.scss 1:27  root stylesheet\n',
  },
  {
    name: 'not/input.scss',
    data: 'a {b: if(css(1) or not css(2): c)}\n',
  },
  {
    name: 'not/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(css(1) or not css(2): c)}\n  |                       ^\n  \'\n  input.scss 1:23  root stylesheet\n',
  },
  {
    name: 'else/input.scss',
    data: 'a {b: if(css(1) or else: c)}\n',
  },
  {
    name: 'else/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(css(1) or else: c)}\n  |                        ^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
]
