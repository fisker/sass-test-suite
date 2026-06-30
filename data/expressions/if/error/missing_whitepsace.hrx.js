export default [
  {
    name: 'after_not/input.scss',
    data: 'a {b: if(not(css()): d)}\n',
  },
  {
    name: 'after_not/error',
    data: 'Error: Whitespace is required between "not" and "("\n  ,\n1 | a {b: if(not(css()): d)}\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
  {
    name: 'after_and/full/input.scss',
    data: 'a {b: if(css(1) and(css(2)): d)}\n',
  },
  {
    name: 'after_and/full/error',
    data: 'Error: Whitespace is required between "and" and "("\n  ,\n1 | a {b: if(css(1) and(css(2)): d)}\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'after_and/raw/input.scss',
    data: 'a {b: if(var(--clause-and) css(1) and(css(2)): d)}\n',
  },
  {
    name: 'after_and/raw/error',
    data: 'Error: Whitespace is required between "and" and "("\n  ,\n1 | a {b: if(var(--clause-and) css(1) and(css(2)): d)}\n  |                                      ^\n  \'\n  input.scss 1:38  root stylesheet\n',
  },
  {
    name: 'after_or/full/input.scss',
    data: 'a {b: if(css(1) or(css(2)): d)}\n',
  },
  {
    name: 'after_or/full/error',
    data: 'Error: Whitespace is required between "and" and "("\n  ,\n1 | a {b: if(css(1) or(css(2)): d)}\n  |                   ^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
  {
    name: 'after_or/raw/input.scss',
    data: 'a {b: if(var(--clause-or) css(1) or(css(2)): d)}\n',
  },
  {
    name: 'after_or/raw/error',
    data: 'Error: Whitespace is required between "or" and "("\n  ,\n1 | a {b: if(var(--clause-or) css(1) or(css(2)): d)}\n  |                                    ^\n  \'\n  input.scss 1:36  root stylesheet\n',
  },
]
