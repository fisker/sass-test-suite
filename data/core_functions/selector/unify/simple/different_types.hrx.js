// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/unify/simple/different_types.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "#d")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c#d;\n}\n',
  },
]
