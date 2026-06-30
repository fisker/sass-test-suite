// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/xyz.hrx

export default [
  {
    name: 'local/x/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(xyz-d65 -0.2 0.5 1.8), "x")}\n',
  },
  {
    name: 'local/x/output.css',
    data: 'a {\n  b: -0.2;\n}\n',
  },
  {
    name: 'local/y/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(xyz-d65 -0.2 0.5 1.8), "y")}\n',
  },
  {
    name: 'local/y/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'local/z/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(xyz-d65 -0.2 0.5 1.8), "z")}\n',
  },
  {
    name: 'local/z/output.css',
    data: 'a {\n  b: 1.8;\n}\n',
  },
  {
    name: 'foreign/x/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "x", $space: xyz)}\n',
  },
  {
    name: 'foreign/x/output.css',
    data: 'a {\n  b: 0.7086623629;\n}\n',
  },
  {
    name: 'foreign/y/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "y", $space: xyz)}\n',
  },
  {
    name: 'foreign/y/output.css',
    data: 'a {\n  b: 0.6327286137;\n}\n',
  },
  {
    name: 'foreign/z/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "z", $space: xyz)}\n',
  },
  {
    name: 'foreign/z/output.css',
    data: 'a {\n  b: 0.6498196913;\n}\n',
  },
]
