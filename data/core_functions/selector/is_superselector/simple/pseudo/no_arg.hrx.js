// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/pseudo/no_arg.hrx

export default [
  {
    name: 'class/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":c", ":c")}\n',
  },
  {
    name: 'class/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'class/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":c", ":d")}\n',
  },
  {
    name: 'class/unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'class/and_element/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":c", "::c")}\n',
  },
  {
    name: 'class/and_element/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'element/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::c", "::c")}\n',
  },
  {
    name: 'element/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'element/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::c", "::d")}\n',
  },
  {
    name: 'element/unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'element/and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::c", ":c")}\n',
  },
  {
    name: 'element/and_class/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
