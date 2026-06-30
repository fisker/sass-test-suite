// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/parse/named.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\na {b: selector.parse($selector: "c")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
