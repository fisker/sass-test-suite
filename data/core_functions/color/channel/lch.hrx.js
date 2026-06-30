// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/lch.hrx

export default [
  {
    name: 'local/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(lch(50 80% 0.5turn), "lightness")}\n',
  },
  {
    name: 'local/lightness/output.css',
    data: 'a {\n  b: 50%;\n}\n',
  },
  {
    name: 'local/a/input.scss',
    data: '@use "sass:color";\na {b: color.channel(lch(50 80% 0.5turn), "chroma")}\n',
  },
  {
    name: 'local/a/output.css',
    data: 'a {\n  b: 120;\n}\n',
  },
  {
    name: 'local/b/input.scss',
    data: '@use "sass:color";\na {b: color.channel(lch(50 80% 0.5turn), "hue")}\n',
  },
  {
    name: 'local/b/output.css',
    data: 'a {\n  b: 180deg;\n}\n',
  },
  {
    name: 'foreign/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "lightness", $space: lch)}\n',
  },
  {
    name: 'foreign/lightness/output.css',
    data: 'a {\n  b: 83.7872528656%;\n}\n',
  },
  {
    name: 'foreign/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "chroma", $space: lch)}\n',
  },
  {
    name: 'foreign/chroma/output.css',
    data: 'a {\n  b: 24.7242595195;\n}\n',
  },
  {
    name: 'foreign/hue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "hue", $space: lch)}\n',
  },
  {
    name: 'foreign/hue/output.css',
    data: 'a {\n  b: 8.7459803895deg;\n}\n',
  },
]
