// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/error.hrx

export default [
  {
    name: 'selector/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("&", "c", "d")}\n',
  },
  {
    name: 'selector/parent/error',
    data: 'Error: $selector: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.extend("&", "c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'selector/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("[c", "d", "e")}\n',
  },
  {
    name: 'selector/invalid/error',
    data: 'Error: $selector: expected more input.\n  ,\n1 | [c\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.extend("[c", "d", "e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'selector/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(1, "c", "d")}\n',
  },
  {
    name: 'selector/type/error',
    data: 'Error: $selector: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.extend(1, "c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extendee/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "&", "d")}\n',
  },
  {
    name: 'extendee/parent/error',
    data: 'Error: $extendee: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.extend("c", "&", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extendee/complex/string/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "d e", "f")}\n',
  },
  {
    name: 'extendee/complex/string/error',
    data: 'Error: Can\'t extend complex selector d e.\n  ,\n2 | a {b: selector.extend("c", "d e", "f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extendee/complex/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", d e, "f")}\n',
  },
  {
    name: 'extendee/complex/list/error',
    data: 'Error: Can\'t extend complex selector d e.\n  ,\n2 | a {b: selector.extend("c", d e, "f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extendee/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "[d", "e")}\n',
  },
  {
    name: 'extendee/invalid/error',
    data: 'Error: $extendee: expected more input.\n  ,\n1 | [d\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.extend("c", "[d", "e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extendee/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", 1, "d")}\n',
  },
  {
    name: 'extendee/type/error',
    data: 'Error: $extendee: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.extend("c", 1, "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extender/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "d", "&")}\n',
  },
  {
    name: 'extender/parent/error',
    data: 'Error: $extender: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.extend("c", "d", "&")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extender/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "d", "[e")}\n',
  },
  {
    name: 'extender/invalid/error',
    data: 'Error: $extender: expected more input.\n  ,\n1 | [e\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.extend("c", "d", "[e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extender/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "d", 1)}\n',
  },
  {
    name: 'extender/type/error',
    data: 'Error: $extender: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.extend("c", "d", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'wrong_name/input.scss',
    data: '@use "sass:selector";\na {b: selector.selector-extend(c, c, d)}\n',
  },
  {
    name: 'wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: selector.selector-extend(c, c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "d", "e", "f")}\n',
  },
  {
    name: 'too_many_args/error',
    data: 'Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: selector.extend("c", "d", "e", "f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:selector\n1 | @function extend($selector, $extendee, $extender) {\n  |           ======================================= declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "d")}\n',
  },
  {
    name: 'too_few_args/error',
    data: 'Error: Missing argument $extender.\n  ,--> input.scss\n2 | a {b: selector.extend("c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:selector\n1 | @function extend($selector, $extendee, $extender) {\n  |           ======================================= declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
