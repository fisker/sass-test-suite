// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/nest/format.hrx

export default [
  {
    name: 'format/README.md',
    data: 'These specs verify that all the arguments to `selector-nest()` can take the\nparsed selector format, and that the function returns a selector in that format.\nThe full set of possible input formats is tested with `selector-parse()`; this\nspec just verifies one example for each parameter.\n',
  },
  {
    name: 'format/input/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest((c, d e), "f")}\n',
  },
  {
    name: 'format/input/initial/output.css',
    data: 'a {\n  b: c f, d e f;\n}\n',
  },
  {
    name: 'format/input/later/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", (d, e f))}\n',
  },
  {
    name: 'format/input/later/output.css',
    data: 'a {\n  b: c d, c e f;\n}\n',
  },
]
