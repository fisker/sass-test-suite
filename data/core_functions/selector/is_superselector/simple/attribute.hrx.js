// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/attribute.hrx

export default [
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("[c=d]", "[c=d]")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("[c=d]", "[e=d]")}\n',
  },
  {
    name: 'unequal/name/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unequal/value/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("[c=d]", "[c=e]")}\n',
  },
  {
    name: 'unequal/value/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unequal/operator/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("[c=d]", "[c^=d]")}\n',
  },
  {
    name: 'unequal/operator/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
