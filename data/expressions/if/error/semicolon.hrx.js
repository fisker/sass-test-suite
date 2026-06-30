// https://github.com/sass/sass-spec/blob/HEAD/spec/expressions/if/error/semicolon.hrx

export default [
  {
    name: 'multiple/middle/input.scss',
    data: 'a {b: if(css(1): c;; css(2): d)}\n',
  },
  {
    name: 'multiple/middle/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: if(css(1): c;; css(2): d)}\n  |                    ^\n  '\n  input.scss 1:20  root stylesheet\n",
  },
  {
    name: 'multiple/end/input.scss',
    data: 'a {b: if(css(): c;;)}\n',
  },
  {
    name: 'multiple/end/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: if(css(): c;;)}\n  |                   ^\n  '\n  input.scss 1:19  root stylesheet\n",
  },
  {
    name: 'comma/input.scss',
    data: 'a {b: if(css(1): c, css(2): d)}\n',
  },
  {
    name: 'comma/error',
    data: 'Error: expected ")".\n  ,\n1 | a {b: if(css(1): c, css(2): d)}\n  |                           ^\n  \'\n  input.scss 1:27  root stylesheet\n',
  },
]
