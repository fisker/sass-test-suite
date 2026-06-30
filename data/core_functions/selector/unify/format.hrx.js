export default [
  {
    name: 'input/non_string/README.md',
    data: 'These specs verify that all the arguments to `selector-unify()` can take the\nparsed selector format, and that the function returns a selector in that format.\nThe full set of possible input formats is tested with `selector-parse()`; this\nspec just verifies one example for each parameter.\n',
  },
  {
    name: 'input/non_string/selector1/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify((c, d c), ".e")}\n',
  },
  {
    name: 'input/non_string/selector1/output.css',
    data: 'a {\n  b: c.e, d c.e;\n}\n',
  },
  {
    name: 'input/non_string/selector2/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".e", (c, d c))}\n',
  },
  {
    name: 'input/non_string/selector2/output.css',
    data: 'a {\n  b: c.e, d c.e;\n}\n',
  },
  {
    name: 'input/two_lists/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c, .d", ".e, .f")}\n',
  },
  {
    name: 'input/two_lists/output.css',
    data: 'a {\n  b: .c.e, .c.f, .d.e, .d.f;\n}\n',
  },
  {
    name: 'output/input.scss',
    data: '@use "sass:selector";\n$result: selector.unify("c d, e f", ".g");\na {\n  result: $result;\n  structure: $result == ("c" "d.g", "e" "f.g");\n}\n',
  },
  {
    name: 'output/output.css',
    data: 'a {\n  result: c d.g, e f.g;\n  structure: true;\n}\n',
  },
]
