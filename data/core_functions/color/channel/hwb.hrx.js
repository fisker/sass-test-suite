export default [
  {
    name: 'local/hue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hwb(10 30% 40%), "hue")}\n',
  },
  {
    name: 'local/hue/output.css',
    data: 'a {\n  b: 10deg;\n}\n',
  },
  {
    name: 'local/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hwb(10deg 30% 40%), "whiteness")}\n',
  },
  {
    name: 'local/whiteness/output.css',
    data: 'a {\n  b: 30%;\n}\n',
  },
  {
    name: 'local/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hwb(10deg 30% 40%), "blackness")}\n',
  },
  {
    name: 'local/blackness/output.css',
    data: 'a {\n  b: 40%;\n}\n',
  },
  {
    name: 'local/normalized/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hwb(10deg 70% 50%), "whiteness")}\n',
  },
  {
    name: 'local/normalized/whiteness/output.css',
    data: 'a {\n  b: 58.3333333333%;\n}\n',
  },
  {
    name: 'local/normalized/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(hwb(10deg 70% 50%), "blackness")}\n',
  },
  {
    name: 'local/normalized/blackness/output.css',
    data: 'a {\n  b: 41.6666666667%;\n}\n',
  },
  {
    name: 'foreign/hue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "hue", $space: hwb)}\n',
  },
  {
    name: 'foreign/hue/output.css',
    data: 'a {\n  b: 349.5238095238deg;\n}\n',
  },
  {
    name: 'foreign/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "whiteness", $space: hwb)}\n',
  },
  {
    name: 'foreign/whiteness/output.css',
    data: 'a {\n  b: 75.2941176471%;\n}\n',
  },
  {
    name: 'foreign/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "blackness", $space: hwb)}\n',
  },
  {
    name: 'foreign/blackness/output.css',
    data: 'a {\n  b: 0%;\n}\n',
  },
]
