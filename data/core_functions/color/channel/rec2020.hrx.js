// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/rec2020.hrx

export default [
  {
    name: 'local/red/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(rec2020 0.2 0.5 0.8), "red")}\n',
  },
  {
    name: 'local/red/output.css',
    data: 'a {\n  b: 0.2;\n}\n',
  },
  {
    name: 'local/green/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(rec2020 0.2 0.5 0.8), "green")}\n',
  },
  {
    name: 'local/green/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'local/blue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(rec2020 0.2 0.5 0.8), "blue")}\n',
  },
  {
    name: 'local/blue/output.css',
    data: 'a {\n  b: 0.8;\n}\n',
  },
  {
    name: 'foreign/red/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "red", $space: rec2020)}\n',
  },
  {
    name: 'foreign/red/output.css',
    data: 'a {\n  b: 0.9098509852;\n}\n',
  },
  {
    name: 'foreign/green/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "green", $space: rec2020)}\n',
  },
  {
    name: 'foreign/green/output.css',
    data: 'a {\n  b: 0.747938727;\n}\n',
  },
  {
    name: 'foreign/blue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "blue", $space: rec2020)}\n',
  },
  {
    name: 'foreign/blue/output.css',
    data: 'a {\n  b: 0.7726929727;\n}\n',
  },
]
