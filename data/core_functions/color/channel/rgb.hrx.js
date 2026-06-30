// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/rgb.hrx

export default [
  {
    name: 'local/red/input.scss',
    data: '@use "sass:color";\na {b: color.channel(#abcdef, "red")}\n',
  },
  {
    name: 'local/red/output.css',
    data: 'a {\n  b: 171;\n}\n',
  },
  {
    name: 'local/green/input.scss',
    data: '@use "sass:color";\na {b: color.channel(#abcdef, "green")}\n',
  },
  {
    name: 'local/green/output.css',
    data: 'a {\n  b: 205;\n}\n',
  },
  {
    name: 'local/blue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(#abcdef, "blue")}\n',
  },
  {
    name: 'local/blue/output.css',
    data: 'a {\n  b: 239;\n}\n',
  },
  {
    name: 'foreign/red/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "red")}\n',
  },
  {
    name: 'foreign/red/output.css',
    data: 'a {\n  b: 255;\n}\n',
  },
  {
    name: 'foreign/green/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "green")}\n',
  },
  {
    name: 'foreign/green/output.css',
    data: 'a {\n  b: 192;\n}\n',
  },
  {
    name: 'foreign/blue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "blue")}\n',
  },
  {
    name: 'foreign/blue/output.css',
    data: 'a {\n  b: 203;\n}\n',
  },
]
