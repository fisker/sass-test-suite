// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/format.hrx

export default [
  {
    name: 'input/non_string/README.md',
    data: 'These specs verify that all the arguments to `selector-extend()` can take the\nparsed selector format, and that the function returns a selector in that format.\nThe full set of possible input formats is tested with `selector-parse()`; this\nspec just verifies one example for each parameter.\n',
  },
  {
    name: 'input/non_string/selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend((c, d c), "c", "e")}\n',
  },
  {
    name: 'input/non_string/selector/output.css',
    data: 'a {\n  b: c, e, d c;\n}\n',
  },
  {
    name: 'input/non_string/extendee/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c.d", (c, ".d"), ".e")}\n',
  },
  {
    name: 'input/non_string/extendee/output.css',
    data: 'a {\n  b: c.d, .e;\n}\n',
  },
  {
    name: 'input/non_string/extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "c", (d, e f))}\n',
  },
  {
    name: 'input/non_string/extender/output.css',
    data: 'a {\n  b: c, d, e f;\n}\n',
  },
  {
    name: 'input/multiple_extendees/compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c.d", "c.d", ".e")}\n',
  },
  {
    name: 'input/multiple_extendees/compound/output.css',
    data: 'a {\n  b: c.d, .e;\n}\n',
  },
  {
    name: 'input/multiple_extendees/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c.d", "c, .d", ".e")}\n',
  },
  {
    name: 'input/multiple_extendees/list/output.css',
    data: 'a {\n  b: c.d, .e;\n}\n',
  },
  {
    name: 'input/multiple_extendees/list_of_compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c.d.e.f", "c.d, .e.f", ".g")}\n',
  },
  {
    name: 'input/multiple_extendees/list_of_compound/output.css',
    data: 'a {\n  b: c.d.e.f, .g;\n}\n',
  },
  {
    name: 'output/input.scss',
    data: '@use "sass:selector";\n$result: selector.extend("c d, e f", "g", "g");\na {\n  result: $result;\n  structure: $result == ("c" "d", "e" "f");\n}\n',
  },
  {
    name: 'output/output.css',
    data: 'a {\n  result: c d, e f;\n  structure: true;\n}\n',
  },
]
