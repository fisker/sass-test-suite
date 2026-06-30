export default [
  {
    name: 'local/hue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hsl(10 40% 60%), "hue")}\n',
  },
  {
    name: 'local/hue/output.css',
    data: 'a {\n  b: 10deg;\n}\n',
  },
  {
    name: 'local/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hsl(10deg 40% 60%), "saturation")}\n',
  },
  {
    name: 'local/saturation/output.css',
    data: 'a {\n  b: 40%;\n}\n',
  },
  {
    name: 'local/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hsl(10deg 40% 60%), "lightness")}\n',
  },
  {
    name: 'local/lightness/output.css',
    data: 'a {\n  b: 60%;\n}\n',
  },
  {
    name: 'local/normalized/hue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hsl(540 40% 60%), "hue")}\n',
  },
  {
    name: 'local/normalized/hue/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'foreign/hue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "hue", $space: hsl)}\n',
  },
  {
    name: 'foreign/hue/output.css',
    data: 'a {\n  b: 349.5238095238deg;\n}\n',
  },
  {
    name: 'foreign/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "saturation", $space: hsl)}\n',
  },
  {
    name: 'foreign/saturation/output.css',
    data: 'a {\n  b: 100%;\n}\n',
  },
  {
    name: 'foreign/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "lightness", $space: hsl)}\n',
  },
  {
    name: 'foreign/lightness/output.css',
    data: 'a {\n  b: 87.6470588235%;\n}\n',
  },
]
