// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/unify/simple/id.hrx

export default [
  {
    name: 'same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("#c", "#c")}\n',
  },
  {
    name: 'same/output.css',
    data: 'a {\n  b: #c;\n}\n',
  },
  {
    name: 'different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("#c", "#d"))}\n',
  },
  {
    name: 'different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
]
