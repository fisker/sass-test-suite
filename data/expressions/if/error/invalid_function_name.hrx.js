export default [
  {
    name: 'not/lowercase/input.scss',
    data: 'a {b: if(not not(): d)}\n',
  },
  {
    name: 'not/lowercase/error',
    data: 'Error: Whitespace is required between "not" and "("\n  ,\n1 | a {b: if(not not(): d)}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'not/uppercase/input.scss',
    data: 'a {b: if(not NOT(): d)}\n',
  },
  {
    name: 'not/uppercase/error',
    data: 'Error: Whitespace is required between "NOT" and "("\n  ,\n1 | a {b: if(not NOT(): d)}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'and/lowercase/input.scss',
    data: 'a {b: if(not and(): d)}\n',
  },
  {
    name: 'and/lowercase/error',
    data: 'Error: Whitespace is required between "and" and "("\n  ,\n1 | a {b: if(not and(): d)}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'and/uppercase/input.scss',
    data: 'a {b: if(not AND(): d)}\n',
  },
  {
    name: 'and/uppercase/error',
    data: 'Error: Whitespace is required between "AND" and "("\n  ,\n1 | a {b: if(not AND(): d)}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'or/lowercase/input.scss',
    data: 'a {b: if(not or(): d)}\n',
  },
  {
    name: 'or/lowercase/error',
    data: 'Error: Whitespace is required between "or" and "("\n  ,\n1 | a {b: if(not or(): d)}\n  |                ^\n  \'\n  input.scss 1:16  root stylesheet\n',
  },
  {
    name: 'or/uppercase/input.scss',
    data: 'a {b: if(not OR(): d)}\n',
  },
  {
    name: 'or/uppercase/error',
    data: 'Error: Whitespace is required between "OR" and "("\n  ,\n1 | a {b: if(not OR(): d)}\n  |                ^\n  \'\n  input.scss 1:16  root stylesheet\n',
  },
]
