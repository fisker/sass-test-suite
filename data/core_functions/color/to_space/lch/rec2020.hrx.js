// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/rec2020.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), rec2020)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(rec2020 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), rec2020)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(rec2020 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), rec2020)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(rec2020 0.4141328903 0.4141328903 0.4141328903);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), rec2020)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(rec2020 0.0987940535 0.0323770888 0.0206839256);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), rec2020)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(rec2020 0.1021786723 0.0319354657 0.0196866185);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), rec2020)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(rec2020 0.3729067583 -0.2515671342 -0.0365252061);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), rec2020)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(rec2020 38725.5976285713 -26052.9381914356 6353.219962186);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), rec2020)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(rec2020 0.0987940535 0.0323770888 0.0206839256 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), rec2020)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(rec2020 0.0987940535 0.0323770888 0.0206839256 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), rec2020)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(rec2020 0.0374222506 -0.0134835285 -0.0293129957);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), rec2020)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(rec2020 0.0506708967 0.0506708967 0.0506708967);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), rec2020)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(rec2020 0.1006265985 0.0294359094 0.0515937784);\n}\n',
  },
]
