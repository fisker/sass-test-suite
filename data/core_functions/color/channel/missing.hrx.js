// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/missing.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.channel(rgb(255 none 255), "green")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 0;\n}\n\n',
  },
]
