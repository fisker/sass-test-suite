export default [
  {
    name: 'local/red/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(a98-rgb 0.2 0.5 0.8), "red")}\n',
  },
  {
    name: 'local/red/output.css',
    data: 'a {\n  b: 0.2;\n}\n',
  },
  {
    name: 'local/green/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(a98-rgb 0.2 0.5 0.8), "green")}\n',
  },
  {
    name: 'local/green/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'local/blue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(color(a98-rgb 0.2 0.5 0.8), "blue")}\n',
  },
  {
    name: 'local/blue/output.css',
    data: 'a {\n  b: 0.8;\n}\n',
  },
  {
    name: 'foreign/red/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "red", $space: a98-rgb)}\n',
  },
  {
    name: 'foreign/red/output.css',
    data: 'a {\n  b: 0.9363244101;\n}\n',
  },
  {
    name: 'foreign/green/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "green", $space: a98-rgb)}\n',
  },
  {
    name: 'foreign/green/output.css',
    data: 'a {\n  b: 0.7473920857;\n}\n',
  },
  {
    name: 'foreign/blue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "blue", $space: a98-rgb)}\n',
  },
  {
    name: 'foreign/blue/output.css',
    data: 'a {\n  b: 0.7893042668;\n}\n',
  },
]
