// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/nest/many_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\na {b: selector.nest("c", "d", "e", "f", "g")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c d e f g;\n}\n',
  },
]
