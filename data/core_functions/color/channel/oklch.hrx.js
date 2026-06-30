// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/channel/oklch.hrx

export default [
  {
    name: 'local/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(oklch(0.3 80% 30), "lightness")}\n',
  },
  {
    name: 'local/lightness/output.css',
    data: 'a {\n  b: 30%;\n}\n',
  },
  {
    name: 'local/a/input.scss',
    data: '@use "sass:color";\na {b: color.channel(oklch(0.3 80% 30), "chroma")}\n',
  },
  {
    name: 'local/a/output.css',
    data: 'a {\n  b: 0.32;\n}\n',
  },
  {
    name: 'local/b/input.scss',
    data: '@use "sass:color";\na {b: color.channel(oklch(0.3 80% 30), "hue")}\n',
  },
  {
    name: 'local/b/output.css',
    data: 'a {\n  b: 30deg;\n}\n',
  },
  {
    name: 'foreign/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "lightness", $space: oklch)}\n',
  },
  {
    name: 'foreign/lightness/output.css',
    data: 'a {\n  b: 86.7738450841%;\n}\n',
  },
  {
    name: 'foreign/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "chroma", $space: oklch)}\n',
  },
  {
    name: 'foreign/chroma/output.css',
    data: 'a {\n  b: 0.0735419968;\n}\n',
  },
  {
    name: 'foreign/hue/input.scss',
    data: '@use "sass:color";\na {b: color.channel(pink, "hue", $space: oklch)}\n',
  },
  {
    name: 'foreign/hue/output.css',
    data: 'a {\n  b: 7.0854893498deg;\n}\n',
  },
]
