// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/simple/attribute.hrx

export default [
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("[c=d]", "[c=d]", "e")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: [c=d], e;\n}\n',
  },
  {
    name: 'unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("[c=d]", "[e=d]", "f")}\n',
  },
  {
    name: 'unequal/name/output.css',
    data: 'a {\n  b: [c=d];\n}\n',
  },
  {
    name: 'unequal/value/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("[c=d]", "[c=e]", "f")}\n',
  },
  {
    name: 'unequal/value/output.css',
    data: 'a {\n  b: [c=d];\n}\n',
  },
  {
    name: 'unequal/operator/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("[c=d]", "[c^=d]", "f")}\n',
  },
  {
    name: 'unequal/operator/output.css',
    data: 'a {\n  b: [c=d];\n}\n',
  },
]
