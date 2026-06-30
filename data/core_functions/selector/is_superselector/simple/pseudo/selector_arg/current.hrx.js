// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/pseudo/selector_arg/current.hrx

export default [
  {
    name: 'superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":current(c d, e f, g h)", ":current(c d.i, e j f)")}\n',
  },
  {
    name: 'superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":current(c d.i, e j f)", ":current(c d, e f, g h)")}\n',
  },
  {
    name: 'subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":current(c d, e f)", ":current(c d, e f)")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'bare_sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":current(c d, e f)", "c d, e f")}\n',
  },
  {
    name: 'bare_sub/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/superset/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.is-superselector(\n      ":-pfx-current(c d, e f, g h)",\n      ":-pfx-current(c d.i, e j f)");\n}\n',
  },
  {
    name: 'prefix/superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/subset/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.is-superselector(\n      ":-pfx-current(c d.i, e j f)",\n      ":-pfx-current(c d, e f, g h)");\n}\n',
  },
  {
    name: 'prefix/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-current(c d, e f)", ":-pfx-current(c d, e f)")}\n',
  },
  {
    name: 'prefix/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
