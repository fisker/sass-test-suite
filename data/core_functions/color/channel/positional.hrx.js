// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/positional.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.channel(oklch(60% 70% 0.6turn), "red", rgb)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: -143.1028856642;\n}\n',
  },
]
