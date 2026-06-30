// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/class.hrx

export default [
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(".c", ".c")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(".c", ".d")}\n',
  },
  {
    name: 'unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
