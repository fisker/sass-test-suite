// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/simple/placeholder.hrx

export default [
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("%c", "%c", "e")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: %c, e;\n}\n',
  },
  {
    name: 'unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("%c", "%d", "e")}\n',
  },
  {
    name: 'unequal/output.css',
    data: 'a {\n  b: %c;\n}\n',
  },
]
