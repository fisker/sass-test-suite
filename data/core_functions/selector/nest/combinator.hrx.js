// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/nest/combinator.hrx

export default [
  {
    name: 'leading/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("> c", "d")}\n',
  },
  {
    name: 'leading/initial/output.css',
    data: 'a {\n  b: > c d;\n}\n',
  },
  {
    name: 'leading/final/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "+ d")}\n',
  },
  {
    name: 'leading/final/output.css',
    data: 'a {\n  b: c + d;\n}\n',
  },
  {
    name: 'trailing/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c ~", "d")}\n',
  },
  {
    name: 'trailing/initial/output.css',
    data: 'a {\n  b: c ~ d;\n}\n',
  },
  {
    name: 'trailing/final/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "d >")}\n',
  },
  {
    name: 'trailing/final/output.css',
    data: 'a {\n  b: c d >;\n}\n',
  },
  {
    name: 'multiple/middle/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c > > d", "e")}\n',
  },
  {
    name: 'multiple/middle/output.css',
    data: 'a {\n  b: c > > d e;\n}\n',
  },
  {
    name: 'multiple/leading/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("~ ~ c", "d")}\n',
  },
  {
    name: 'multiple/leading/initial/output.css',
    data: 'a {\n  b: ~ ~ c d;\n}\n',
  },
  {
    name: 'multiple/leading/final/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "+ > d")}\n',
  },
  {
    name: 'multiple/leading/final/output.css',
    data: 'a {\n  b: c + > d;\n}\n',
  },
  {
    name: 'multiple/trailing/initial/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c > ~", "d")}\n',
  },
  {
    name: 'multiple/trailing/initial/output.css',
    data: 'a {\n  b: c > ~ d;\n}\n',
  },
  {
    name: 'multiple/trailing/final/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "d + >")}\n',
  },
  {
    name: 'multiple/trailing/final/output.css',
    data: 'a {\n  b: c d + >;\n}\n',
  },
  {
    name: 'only/before/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("~", "c")}\n',
  },
  {
    name: 'only/before/output.css',
    data: 'a {\n  b: ~ c;\n}\n',
  },
  {
    name: 'only/after/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "+")}\n',
  },
  {
    name: 'only/after/output.css',
    data: 'a {\n  b: c +;\n}\n',
  },
  {
    name: 'only/between/input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", ">", "d")}\n',
  },
  {
    name: 'only/between/output.css',
    data: 'a {\n  b: c > d;\n}\n',
  },
]
