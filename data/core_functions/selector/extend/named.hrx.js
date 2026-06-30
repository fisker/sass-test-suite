// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/named.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\na {b: selector.extend($selector: "c.d", $extendee: "c", $extender: "e")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c.d, e.d;\n}\n',
  },
]
