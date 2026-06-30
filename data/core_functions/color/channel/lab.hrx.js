export default [
  {
    name: 'local/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(lab(50 -150 30), "lightness")}\n',
  },
  {
    name: 'local/lightness/output.css',
    data: 'a {\n  b: 50%;\n}\n',
  },
  {
    name: 'local/a/input.scss',
    data: '@use "sass:color";\na {b: color.channel(lab(50% -150 30), "a")}\n',
  },
  {
    name: 'local/a/output.css',
    data: 'a {\n  b: -150;\n}\n',
  },
  {
    name: 'local/b/input.scss',
    data: '@use "sass:color";\na {b: color.channel(lab(50% -150 30), "b")}\n',
  },
  {
    name: 'local/b/output.css',
    data: 'a {\n  b: 30;\n}\n',
  },
  {
    name: 'foreign/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "lightness", $space: lab)}\n',
  },
  {
    name: 'foreign/lightness/output.css',
    data: 'a {\n  b: 83.7872528656%;\n}\n',
  },
  {
    name: 'foreign/a/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "a", $space: lab)}\n',
  },
  {
    name: 'foreign/a/output.css',
    data: 'a {\n  b: 24.4367702881;\n}\n',
  },
  {
    name: 'foreign/b/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "b", $space: lab)}\n',
  },
  {
    name: 'foreign/b/output.css',
    data: 'a {\n  b: 3.7594237161;\n}\n',
  },
]
