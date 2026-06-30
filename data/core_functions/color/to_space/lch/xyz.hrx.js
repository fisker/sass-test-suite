// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lch/xyz.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), xyz)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), xyz)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz 0.9504559271 1 1.0890577508);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), xyz)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz 0.1750611682 0.1841865185 0.2005897556);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), xyz)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz 0.0159493149 0.0109793933 0.0050787218);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), xyz)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(xyz 0.0164399081 0.0111233378 0.0048408272);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), xyz)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz 0.0846054544 -0.0138950708 -0.0108304931);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), xyz)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz 7373327412.161998 -218927236.2695362 95026466.80033655);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), xyz)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz 0.0159493149 0.0109793933 0.0050787218 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), xyz)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz 0.0159493149 0.0109793933 0.0050787218 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), xyz)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(xyz 0.0037635667 -0.0002331742 -0.006995371);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), xyz)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(xyz 0.0107023231 0.0112601993 0.0122630073);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), xyz)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(xyz 0.0173069918 0.0110640949 0.0123481274);\n}\n',
  },
]
