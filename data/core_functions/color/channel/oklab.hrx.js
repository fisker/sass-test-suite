export default [
  {
    name: 'local/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(oklab(0.5 -1 50%), "lightness")}\n',
  },
  {
    name: 'local/lightness/output.css',
    data: 'a {\n  b: 50%;\n}\n',
  },
  {
    name: 'local/a/input.scss',
    data: '@use "sass:color";\na {b: color.channel(oklab(0.5 -1 50%), "a")}\n',
  },
  {
    name: 'local/a/output.css',
    data: 'a {\n  b: -1;\n}\n',
  },
  {
    name: 'local/b/input.scss',
    data: '@use "sass:color";\na {b: color.channel(oklab(0.5 -1 50%), "b")}\n',
  },
  {
    name: 'local/b/output.css',
    data: 'a {\n  b: 0.2;\n}\n',
  },
  {
    name: 'foreign/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "lightness", $space: oklab)}\n',
  },
  {
    name: 'foreign/lightness/output.css',
    data: 'a {\n  b: 86.7738450841%;\n}\n',
  },
  {
    name: 'foreign/a/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "a", $space: oklab)}\n',
  },
  {
    name: 'foreign/a/output.css',
    data: 'a {\n  b: 0.072980372;\n}\n',
  },
  {
    name: 'foreign/b/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "b", $space: oklab)}\n',
  },
  {
    name: 'foreign/b/output.css',
    data: 'a {\n  b: 0.0090714168;\n}\n',
  },
]
