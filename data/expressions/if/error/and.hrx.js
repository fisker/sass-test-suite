// https://github.com/sass/sass-spec/blob/HEAD/spec/expressions/if/error/and.hrx

export default [
  {
    name: 'empty/input.scss',
    data: 'a {b: if(css(1) and: c)}\n',
  },
  {
    name: 'empty/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: if(css(1) and: c)}\n  |                    ^\n  '\n  input.scss 1:20  root stylesheet\n",
  },
  {
    name: 'or/input.scss',
    data: 'a {b: if(css(1) and css(2) or css(3): c)}\n',
  },
  {
    name: 'or/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(css(1) and css(2) or css(3): c)}\n  |                            ^\n  \'\n  input.scss 1:28  root stylesheet\n',
  },
  {
    name: 'not/input.scss',
    data: 'a {b: if(css(1) and not css(2): c)}\n',
  },
  {
    name: 'not/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(css(1) and not css(2): c)}\n  |                        ^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'else/input.scss',
    data: 'a {b: if(css() and else: c)}\n',
  },
  {
    name: 'else/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(css() and else: c)}\n  |                        ^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
]
