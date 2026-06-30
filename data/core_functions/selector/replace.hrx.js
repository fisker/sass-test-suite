export default [
  {
    name: 'README.md',
    data: "`selector-replace()` is expected to have all the same complexity of behavior as\n`selector-extend()`, but to avoid unnecessary duplication those specs aren't\nrepeated here. Instead, these specs cover the major differences between the two\nfunctions.\n",
  },
  {
    name: 'simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "c", "d")}\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c.d", "c", "e")}\n',
  },
  {
    name: 'compound/output.css',
    data: 'a {\n  b: e.d;\n}\n',
  },
  {
    name: 'complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c d", "d", "e f")}\n',
  },
  {
    name: 'complex/output.css',
    data: 'a {\n  b: c e f, e c f;\n}\n',
  },
  {
    name: 'selector_pseudo/is/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace(":is(c)", "c", "d")}\n',
  },
  {
    name: 'selector_pseudo/is/output.css',
    data: 'a {\n  b: :is(d);\n}\n',
  },
  {
    name: 'selector_pseudo/where/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace(":where(c)", "c", "d")}\n',
  },
  {
    name: 'selector_pseudo/where/output.css',
    data: 'a {\n  b: :where(d);\n}\n',
  },
  {
    name: 'selector_pseudo/matches/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace(":matches(c)", "c", "d")}\n',
  },
  {
    name: 'selector_pseudo/matches/output.css',
    data: 'a {\n  b: :matches(d);\n}\n',
  },
  {
    name: 'selector_pseudo/not/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace(":not(c)", "c", "d")}\n',
  },
  {
    name: 'selector_pseudo/not/output.css',
    data: 'a {\n  b: :not(d);\n}\n',
  },
  {
    name: 'no_op/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "d", "e")}\n',
  },
  {
    name: 'no_op/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'partial_no_op/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c, d", "d", "e")}\n',
  },
  {
    name: 'partial_no_op/output.css',
    data: 'a {\n  b: c, e;\n}\n',
  },
  {
    name: 'format/input/non_string/README.md',
    data: 'These specs verify that all the arguments to `selector-extend()` can take the\nparsed selector format, and that the function returns a selector in that format.\nThe full set of possible input formats is tested with `selector-parse()`; this\nspec just verifies one example for each parameter.\n',
  },
  {
    name: 'format/input/non_string/selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace((c, d c), "c", "e")}\n',
  },
  {
    name: 'format/input/non_string/selector/output.css',
    data: 'a {\n  b: e, d e;\n}\n',
  },
  {
    name: 'format/input/non_string/extendee/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c.d", (c, ".d"), ".e")}\n',
  },
  {
    name: 'format/input/non_string/extendee/output.css',
    data: 'a {\n  b: .e;\n}\n',
  },
  {
    name: 'format/input/non_string/extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "c", (d, e f))}\n',
  },
  {
    name: 'format/input/non_string/extender/output.css',
    data: 'a {\n  b: d, e f;\n}\n',
  },
  {
    name: 'format/input/multiple_extendees/compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c.d", "c.d", ".e")}\n',
  },
  {
    name: 'format/input/multiple_extendees/compound/output.css',
    data: 'a {\n  b: .e;\n}\n',
  },
  {
    name: 'format/input/multiple_extendees/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c.d", "c, .d", ".e")}\n',
  },
  {
    name: 'format/input/multiple_extendees/list/output.css',
    data: 'a {\n  b: .e;\n}\n',
  },
  {
    name: 'format/input/multiple_extendees/list_of_compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c.d.e.f", "c.d, .e.f", ".g")}\n',
  },
  {
    name: 'format/input/multiple_extendees/list_of_compound/output.css',
    data: 'a {\n  b: .g;\n}\n',
  },
  {
    name: 'format/output/input.scss',
    data: '@use "sass:selector";\n$result: selector.replace("c d, e f", "g", "g");\na {\n  result: $result;\n  structure: $result == ("c" "d", "e" "f");\n}\n',
  },
  {
    name: 'format/output/output.css',
    data: 'a {\n  result: c d, e f;\n  structure: true;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace($selector: "c.d", $original: "c", $replacement: "e")}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: e.d;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:selector";\na {b: selector.selector-replace(c, c, d)}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: selector.selector-replace(c, c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/selector/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("&", "c", "d")}\n',
  },
  {
    name: 'error/selector/parent/error',
    data: 'Error: $selector: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.replace("&", "c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/selector/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("[c", "d", "e")}\n',
  },
  {
    name: 'error/selector/invalid/error',
    data: 'Error: $selector: expected more input.\n  ,\n1 | [c\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.replace("[c", "d", "e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/selector/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace(1, "c", "d")}\n',
  },
  {
    name: 'error/selector/type/error',
    data: 'Error: $selector: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.replace(1, "c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/extendee/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "&", "d")}\n',
  },
  {
    name: 'error/extendee/parent/error',
    data: 'Error: $original: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.replace("c", "&", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/extendee/complex/string/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "d e", "f")}\n',
  },
  {
    name: 'error/extendee/complex/string/error',
    data: 'Error: Can\'t extend complex selector d e.\n  ,\n2 | a {b: selector.replace("c", "d e", "f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/extendee/complex/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", d e, "f")}\n',
  },
  {
    name: 'error/extendee/complex/list/error',
    data: 'Error: Can\'t extend complex selector d e.\n  ,\n2 | a {b: selector.replace("c", d e, "f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/extendee/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "[d", "e")}\n',
  },
  {
    name: 'error/extendee/invalid/error',
    data: 'Error: $original: expected more input.\n  ,\n1 | [d\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.replace("c", "[d", "e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/extendee/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", 1, "d")}\n',
  },
  {
    name: 'error/extendee/type/error',
    data: 'Error: $original: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.replace("c", 1, "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/extender/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "d", "&")}\n',
  },
  {
    name: 'error/extender/parent/error',
    data: 'Error: $replacement: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.replace("c", "d", "&")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/extender/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "d", "[e")}\n',
  },
  {
    name: 'error/extender/invalid/error',
    data: 'Error: $replacement: expected more input.\n  ,\n1 | [e\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.replace("c", "d", "[e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/extender/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "d", 1)}\n',
  },
  {
    name: 'error/extender/type/error',
    data: 'Error: $replacement: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.replace("c", "d", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "d", "e", "f")}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 3 arguments allowed, but 4 were passed.\n  ,--> input.scss\n2 | a {b: selector.replace("c", "d", "e", "f")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:selector\n1 | @function replace($selector, $original, $replacement) {\n  |           =========================================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.replace("c", "d")}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: 'Error: Missing argument $replacement.\n  ,--> input.scss\n2 | a {b: selector.replace("c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:selector\n1 | @function replace($selector, $original, $replacement) {\n  |           =========================================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
