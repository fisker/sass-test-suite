// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/append.hrx

export default [
  {
    name: 'classes/single/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c", ".d")}\n',
  },
  {
    name: 'classes/single/output.css',
    data: 'a {\n  b: .c.d;\n}\n',
  },
  {
    name: 'classes/double/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c, .d", ".e, .f")}\n',
  },
  {
    name: 'classes/double/output.css',
    data: 'a {\n  b: .c.e, .c.f, .d.e, .d.f;\n}\n',
  },
  {
    name: 'suffix/single/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c", "d")}\n',
  },
  {
    name: 'suffix/single/output.css',
    data: 'a {\n  b: .cd;\n}\n',
  },
  {
    name: 'suffix/multiple/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c, .d", "e, f")}\n',
  },
  {
    name: 'suffix/multiple/output.css',
    data: 'a {\n  b: .ce, .cf, .de, .df;\n}\n',
  },
  {
    name: 'suffix/descendant/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("c d", "e f")}\n',
  },
  {
    name: 'suffix/descendant/output.css',
    data: 'a {\n  b: c de f;\n}\n',
  },
  {
    name: 'one_arg/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c.d")}\n',
  },
  {
    name: 'one_arg/output.css',
    data: 'a {\n  b: .c.d;\n}\n',
  },
  {
    name: 'many_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c", ".d", ".e")}\n',
  },
  {
    name: 'many_args/output.css',
    data: 'a {\n  b: .c.d.e;\n}\n',
  },
  {
    name: 'format/README.md',
    data: 'These specs verify that all the arguments to `selector-append()` can take the\nparsed selector format, and that the function returns a selector in that format.\nThe full set of possible input formats is tested with `selector-parse()`; this\nspec just verifies one example for each parameter.\n',
  },
  {
    name: 'format/input/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.append((c, d e), f)}\n',
  },
  {
    name: 'format/input/initial/output.css',
    data: 'a {\n  b: cf, d ef;\n}\n',
  },
  {
    name: 'format/input/later/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(c, (d, e f))}\n',
  },
  {
    name: 'format/input/later/output.css',
    data: 'a {\n  b: cd, ce f;\n}\n',
  },
  {
    name: 'format/output/input.scss',
    data: '@use "sass:selector";\n$result: selector.append("c d, e f", "g");\na {\n  result: $result;\n  structure: $result == ("c" "dg", "e" "fg");\n}\n',
  },
  {
    name: 'format/output/output.css',
    data: 'a {\n  result: c dg, e fg;\n  structure: true;\n}\n',
  },
  {
    name: 'combinator/initial_leading/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("> c", "d")}\n',
  },
  {
    name: 'combinator/initial_leading/output.css',
    data: 'a {\n  b: > cd;\n}\n',
  },
  {
    name: 'combinator/final_trailing/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("c", "d ~")}\n',
  },
  {
    name: 'combinator/final_trailing/output.css',
    data: 'a {\n  b: cd ~;\n}\n',
  },
  {
    name: 'combinator/multiple/middle/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("c > > d", "e")}\n',
  },
  {
    name: 'combinator/multiple/middle/output.css',
    data: 'a {\n  b: c > > de;\n}\n',
  },
  {
    name: 'combinator/multiple/initial_leading/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("~ ~ c", "d")}\n',
  },
  {
    name: 'combinator/multiple/initial_leading/output.css',
    data: 'a {\n  b: ~ ~ cd;\n}\n',
  },
  {
    name: 'combinator/multiple/final_trailing/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("c", "d + >")}\n',
  },
  {
    name: 'combinator/multiple/final_trailing/output.css',
    data: 'a {\n  b: cd + >;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:selector";\na {b: selector.selector-append(c, d)}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: selector.selector-append(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c", "*")}\n',
  },
  {
    name: 'error/universal/error',
    data: 'Error: Can\'t append * to .c.\n  ,\n2 | a {b: selector.append(".c", "*")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/combinator/leading/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c", "> .d")}\n',
  },
  {
    name: 'error/combinator/leading/error',
    data: 'Error: Can\'t append > .d to .c.\n  ,\n2 | a {b: selector.append(".c", "> .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/combinator/trailing/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c ~", ".d")}\n',
  },
  {
    name: 'error/combinator/trailing/error',
    data: 'Error: Selector ".c ~" can\'t be used as a parent in a compound selector.\n  ,\n1 | .c ~\n  | ^^^^ outer selector\n  \'\n  ,--> input.scss\n2 | a {b: selector.append(".c ~", ".d")}\n  |       ============================= parent selector\n  \'\n  - 1:1  root stylesheet\n',
  },
  {
    name: 'error/combinator/only/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c", ">", ".d")}\n',
  },
  {
    name: 'error/combinator/only/error',
    data: 'Error: Can\'t append > to .c.\n  ,\n2 | a {b: selector.append(".c", ">", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/namespace/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("c", "|d")}\n',
  },
  {
    name: 'error/namespace/error',
    data: 'Error: Can\'t append |d to c.\n  ,\n2 | a {b: selector.append("c", "|d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.append(".c", "&")}\n',
  },
  {
    name: 'error/parent/error',
    data: 'Error: Parent selectors aren\'t allowed here.\n  ,\n1 | &\n  | ^\n  \'\n  - 1:1  root stylesheet\n  ,\n2 | a {b: selector.append(".c", "&")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/invalid/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("[c", "d")}\n',
  },
  {
    name: 'error/invalid/error',
    data: 'Error: expected more input.\n  ,\n1 | [c\n  |   ^\n  \'\n  - 1:3  root stylesheet\n  ,\n2 | a {b: selector.append("[c", "d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.append("c", 1)}\n',
  },
  {
    name: 'error/type/error',
    data: 'Error: 1 is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | a {b: selector.append("c", 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:selector";\na {b: selector.append()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: $selectors: At least one selector must be passed.\n  ,\n2 | a {b: selector.append()}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
