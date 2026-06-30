// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/is_powerless/named.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless($color: red, $channel: "a", $space: lab)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
