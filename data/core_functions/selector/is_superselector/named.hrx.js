// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/named.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector($super: "c", $sub: "c.d")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
