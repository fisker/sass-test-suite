// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/nest/one_arg.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
