export default [
  {
    name: 'wrong_name/input.scss',
    data: '@use "sass:selector";\na {b: selector.selector-nest(c, d)}\n',
  },
  {
    name: 'wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: selector.selector-nest(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'parent/first_arg_suffix/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("&c")}\n',
  },
  {
    name: 'parent/first_arg_suffix/error',
    data: "Error: A top-level selector may not contain a parent selector with a suffix.\n  ,\n1 | &c\n  | ^^\n  '\n  - 1:1  root stylesheet\n",
  },
  {
    name: 'parent/non_initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "[d]&")}\n',
  },
  {
    name: 'parent/non_initial/error',
    data: 'Error: "&" may only used at the beginning of a compound selector.\n  ,\n1 | [d]&\n  |    ^\n  \'\n  - 1:4  root stylesheet\n  ,\n2 | a {b: selector.nest("c", "[d]&")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'parent/prefix/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "d&")}\n',
  },
  {
    name: 'parent/prefix/error',
    data: 'Error: "&" may only used at the beginning of a compound selector.\n  ,\n1 | d&\n  |  ^\n  \'\n  - 1:2  root stylesheet\n  ,\n2 | a {b: selector.nest("c", "d&")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'invalid/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("[c")}\n',
  },
  {
    name: 'invalid/initial/error',
    data: 'Error: expected more input.\n  ,\n1 | [c\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.nest("[c")}\n  |       ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'invalid/later/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "[d")}\n',
  },
  {
    name: 'invalid/later/error',
    data: 'Error: expected more input.\n  ,\n1 | [d\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.nest("c", "[d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'type/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest(1)}\n',
  },
  {
    name: 'type/initial/error',
    data: "Error: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.nest(1)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'type/later/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", 1)}\n',
  },
  {
    name: 'type/later/error',
    data: 'Error: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.nest("c", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest()}\n\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: $selectors: At least one selector must be passed.\n  ,\n2 | a {b: selector.nest()}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
