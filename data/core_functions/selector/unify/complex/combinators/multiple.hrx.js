export default [
  {
    name: 'isolated/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c > .d + .e", ".f .g ~ .h")}\n',
  },
  {
    name: 'isolated/output.css',
    data: 'a {\n  b: .f .c > .g ~ .d + .e.h, .f .c > .g.d + .e.h;\n}\n',
  },
  {
    name: 'in_a_row/README.md',
    data: "The specific semantics of combinators isn't considered when handling multiple\ncombinators in a row, so we choose combinators for these specs effectively at\nrandom. Any of these specs should pass with any combination of combinators.\n",
  },
  {
    name: 'in_a_row/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c + ~ > .d", ".e + ~ > .f")}\n',
  },
  {
    name: 'in_a_row/same/output.css',
    data: '',
  },
  {
    name: 'in_a_row/same/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: .c + ~ > .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify(".c + ~ > .d", ".e + ~ > .f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $selector2: .e + ~ > .f is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify(".c + ~ > .d", ".e + ~ > .f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'in_a_row/supersequence/contiguous/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c + ~ > .d", ".e > + ~ > > .f")}\n',
  },
  {
    name: 'in_a_row/supersequence/contiguous/output.css',
    data: '',
  },
  {
    name: 'in_a_row/supersequence/contiguous/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: .c + ~ > .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify(".c + ~ > .d", ".e > + ~ > > .f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $selector2: .e > + ~ > > .f is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify(".c + ~ > .d", ".e > + ~ > > .f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'in_a_row/supersequence/non_contiguous/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c + ~ > .d", ".e + > ~ ~ > .f")}\n',
  },
  {
    name: 'in_a_row/supersequence/non_contiguous/output.css',
    data: '',
  },
  {
    name: 'in_a_row/supersequence/non_contiguous/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: .c + ~ > .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify(".c + ~ > .d", ".e + > ~ ~ > .f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $selector2: .e + > ~ ~ > .f is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify(".c + ~ > .d", ".e + > ~ ~ > .f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'in_a_row/different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(".c + ~ > .d", ".e + > ~ ~ .f"))}\n',
  },
  {
    name: 'in_a_row/different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'in_a_row/different/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: .c + ~ > .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n3 | a {b: meta.inspect(selector.unify(".c + ~ > .d", ".e + > ~ ~ .f"))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:20  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $selector2: .e + > ~ ~ .f is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n3 | a {b: meta.inspect(selector.unify(".c + ~ > .d", ".e + > ~ ~ .f"))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:20  root stylesheet\n',
  },
]
