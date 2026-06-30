// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/display_p3_linear.hrx

export default [
  {
    name: 'local/red/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(display-p3-linear 0.2 0.5 0.8), "red")}\n',
  },
  {
    name: 'local/red/output.css',
    data: 'a {\n  b: 0.2;\n}\n',
  },
  {
    name: 'local/green/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(display-p3-linear 0.2 0.5 0.8), "green")}\n',
  },
  {
    name: 'local/green/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'local/blue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(display-p3-linear 0.2 0.5 0.8), "blue")}\n',
  },
  {
    name: 'local/blue/output.css',
    data: 'a {\n  b: 0.8;\n}\n',
  },
  {
    name: 'foreign/red/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "red", $space: display-p3-linear)}\n',
  },
  {
    name: 'foreign/red/output.css',
    data: 'a {\n  b: 0.9160449504;\n}\n',
  },
  {
    name: 'foreign/green/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "green", $space: display-p3-linear)}\n',
  },
  {
    name: 'foreign/green/output.css',
    data: 'a {\n  b: 0.5428121603;\n}\n',
  },
  {
    name: 'foreign/blue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "blue", $space: display-p3-linear)}\n',
  },
  {
    name: 'foreign/blue/output.css',
    data: 'a {\n  b: 0.5990085465;\n}\n',
  },
]
