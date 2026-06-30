export default [
  {
    name: 'README.md',
    data: "The specific semantics of (explicit) combinators isn't considered when handling\ninitial combinators, so we cycle through possible combinators in these specs.\nAny of these specs should pass with any combination of combinators.\n",
  },
  {
    name: 'only_one/selector1/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("> .c", ".d")}\n',
  },
  {
    name: 'only_one/selector1/output.css',
    data: 'a {\n  b: > .c.d;\n}\n',
  },
  {
    name: 'only_one/selector1/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: > .c is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify("> .c", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'only_one/selector2/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c", "~ .d")}\n',
  },
  {
    name: 'only_one/selector2/output.css',
    data: 'a {\n  b: ~ .c.d;\n}\n',
  },
  {
    name: 'only_one/selector2/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector2: ~ .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify(".c", "~ .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("+ .c", "+ .d")}\n',
  },
  {
    name: 'same/output.css',
    data: 'a {\n  b: + .c.d;\n}\n',
  },
  {
    name: 'same/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: + .c is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify("+ .c", "+ .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $selector2: + .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify("+ .c", "+ .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'supersequence/contiguous/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("+ ~ > .c", "> + ~ > > .d")}\n',
  },
  {
    name: 'supersequence/contiguous/output.css',
    data: '',
  },
  {
    name: 'supersequence/contiguous/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: + ~ > .c is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify("+ ~ > .c", "> + ~ > > .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $selector2: > + ~ > > .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify("+ ~ > .c", "> + ~ > > .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'supersequence/non_contiguous/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("+ ~ > .c", "+ > ~ ~ > .d")}\n',
  },
  {
    name: 'supersequence/non_contiguous/output.css',
    data: '',
  },
  {
    name: 'supersequence/non_contiguous/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: + ~ > .c is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify("+ ~ > .c", "+ > ~ ~ > .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $selector2: + > ~ ~ > .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.unify("+ ~ > .c", "+ > ~ ~ > .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("+ ~ > .c", "+ > ~ ~ .d"))}\n',
  },
  {
    name: 'different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'different/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector1: + ~ > .c is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n3 | a {b: meta.inspect(selector.unify("+ ~ > .c", "+ > ~ ~ .d"))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:20  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $selector2: + > ~ ~ .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n3 | a {b: meta.inspect(selector.unify("+ ~ > .c", "+ > ~ ~ .d"))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:20  root stylesheet\n',
  },
]
