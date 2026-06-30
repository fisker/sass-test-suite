// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/simple/pseudo/no_arg.hrx

export default [
  {
    name: 'class/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":c", ":c", "e")}\n',
  },
  {
    name: 'class/equal/output.css',
    data: 'a {\n  b: :c, e;\n}\n',
  },
  {
    name: 'class/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":c", ":d", "e")}\n',
  },
  {
    name: 'class/unequal/output.css',
    data: 'a {\n  b: :c;\n}\n',
  },
  {
    name: 'class/and_element/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":c", "::c", "e")}\n',
  },
  {
    name: 'class/and_element/output.css',
    data: 'a {\n  b: :c;\n}\n',
  },
  {
    name: 'element/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::c", "::c", "e")}\n',
  },
  {
    name: 'element/equal/output.css',
    data: 'a {\n  b: ::c, e;\n}\n',
  },
  {
    name: 'element/unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::c", "::d", "e")}\n',
  },
  {
    name: 'element/unequal/output.css',
    data: 'a {\n  b: ::c;\n}\n',
  },
  {
    name: 'element/and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::c", ":c", "e")}\n',
  },
  {
    name: 'element/and_class/output.css',
    data: 'a {\n  b: ::c;\n}\n',
  },
]
