// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/unify/error.hrx

export default [
  {
    name: 'selector1/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("&", "c")}\n',
  },
  {
    name: 'selector1/parent/error',
    data: 'Error: $selector1: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.unify("&", "c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'selector1/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("[c", "d")}\n',
  },
  {
    name: 'selector1/invalid/error',
    data: 'Error: $selector1: expected more input.\n  ,\n1 | [c\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.unify("[c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'selector1/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(1, "c")}\n',
  },
  {
    name: 'selector1/type/error',
    data: 'Error: $selector1: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.unify(1, "c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'selector2/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "&")}\n',
  },
  {
    name: 'selector2/parent/error',
    data: 'Error: $selector2: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.unify("c", "&")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'selector2/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "[d")}\n',
  },
  {
    name: 'selector2/invalid/error',
    data: 'Error: $selector2: expected more input.\n  ,\n1 | [d\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.unify("c", "[d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'selector2/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", 1)}\n',
  },
  {
    name: 'selector2/type/error',
    data: 'Error: $selector2: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.unify("c", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong_name/input.scss',
    data: '@use "sass:selector";\na {b: selector.selector-unify(".c", ".d")}\n',
  },
  {
    name: 'wrong_name/error',
    data: 'Error: Undefined function.\n  ,\n2 | a {b: selector.selector-unify(".c", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
