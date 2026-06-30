export default [
  {
    name: 'empty/input.scss',
    data: 'a {b: if((): c)}\n',
  },
  {
    name: 'empty/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: if((): c)}\n  |           ^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'else/input.scss',
    data: 'a {b: if((else): c)}\n',
  },
  {
    name: 'else/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if((else): c)}\n  |               ^\n  \'\n  input.scss 1:15  root stylesheet\n',
  },
]
