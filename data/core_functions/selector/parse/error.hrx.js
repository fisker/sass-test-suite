// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/parse/error.hrx

export default [
  {
    name: 'parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("&")}\n',
  },
  {
    name: 'parent/error',
    data: "Error: $selector: Parent selectors aren't allowed here.\n  ,\n1 | &\n  | ^\n  '\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.parse(\"&\")}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'parse/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("[c")}\n',
  },
  {
    name: 'parse/invalid/error',
    data: 'Error: $selector: expected more input.\n  ,\n1 | [c\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.parse("[c")}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'parse/extra/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("c {")}\n',
  },
  {
    name: 'parse/extra/error',
    data: 'Error: $selector: expected selector.\n  ,\n1 | c {\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.parse("c {")}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_nested/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\na {b: selector.parse((list.append((), list.append((), c)),))}\n',
  },
  {
    name: 'too_nested/error',
    data: "Error: $selector: (c,) is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n3 | a {b: selector.parse((list.append((), list.append((), c)),))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'inner_comma/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(((c,),))}\n',
  },
  {
    name: 'inner_comma/error',
    data: "Error: $selector: ((c,),) is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.parse(((c,),))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'outer_space/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\na {b: selector.parse(list.append((), list.append((), c)))}\n',
  },
  {
    name: 'outer_space/error',
    data: "Error: $selector: (c) is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n3 | a {b: selector.parse(list.append((), list.append((), c)))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'slash_list/top_level/input.scss',
    data: '@use "sass:selector";\n@use "sass:list";\na {b: selector.parse(list.slash(c d, e f))}\n',
  },
  {
    name: 'slash_list/top_level/error',
    data: "Error: $selector: (c d / e f) is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n3 | a {b: selector.parse(list.slash(c d, e f))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'slash_list/in_comma_list/input.scss',
    data: '@use "sass:selector";\n@use "sass:list";\na {b: selector.parse((list.slash(c, d), list.slash(e, f)))}\n',
  },
  {
    name: 'slash_list/in_comma_list/error',
    data: "Error: $selector: (c / d, e / f) is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n3 | a {b: selector.parse((list.slash(c, d), list.slash(e, f)))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:7  root stylesheet\n",
  },
  {
    name: 'type/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(1)}\n',
  },
  {
    name: 'type/error',
    data: "Error: $selector: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.parse(1)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'wrong_name/input.scss',
    data: '@use "sass:selector";\na {b: selector.selector-parse(".c.d")}\n',
  },
  {
    name: 'wrong_name/error',
    data: 'Error: Undefined function.\n  ,\n2 | a {b: selector.selector-parse(".c.d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(c, d)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: selector.parse(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:selector\n1 | @function parse($selector) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse()}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $selector.\n  ,--> input.scss\n2 | a {b: selector.parse()}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:selector\n1 | @function parse($selector) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
