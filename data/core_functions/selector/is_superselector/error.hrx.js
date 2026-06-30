export default [
  {
    name: 'super/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("&", "c")}\n',
  },
  {
    name: 'super/parent/error',
    data: 'Error: $super: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.is-superselector("&", "c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'super/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("[c", "d")}\n',
  },
  {
    name: 'super/invalid/error',
    data: 'Error: $super: expected more input.\n  ,\n1 | [c\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.is-superselector("[c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'super/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(1, "c")}\n',
  },
  {
    name: 'super/type/error',
    data: 'Error: $super: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.is-superselector(1, "c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'sub/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "&")}\n',
  },
  {
    name: 'sub/parent/error',
    data: 'Error: $sub: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.is-superselector("c", "&")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'sub/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "[d")}\n',
  },
  {
    name: 'sub/invalid/error',
    data: 'Error: $sub: expected more input.\n  ,\n1 | [d\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.is-superselector("c", "[d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'sub/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", 1)}\n',
  },
  {
    name: 'sub/type/error',
    data: 'Error: $sub: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.is-superselector("c", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "d", "e")}\n',
  },
  {
    name: 'too_many_args/error',
    data: 'Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: selector.is-superselector("c", "d", "e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:selector\n1 | @function is-superselector($super, $sub) {\n  |           ============================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c")}\n',
  },
  {
    name: 'too_few_args/error',
    data: 'Error: Missing argument $sub.\n  ,--> input.scss\n2 | a {b: selector.is-superselector("c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:selector\n1 | @function is-superselector($super, $sub) {\n  |           ============================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
