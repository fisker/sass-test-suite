// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lab/xyz.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(0% 0 0), xyz)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(100% 0 0), xyz)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz 0.9504559271 1 1.0890577508);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 0 0), xyz)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz 0.1750611682 0.1841865185 0.2005897556);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 50 -75), xyz)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz 0.3154783677 0.1924410425 0.9230896852);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lab(0% -150 150), $lightness: -50%), xyz)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz -0.0931334424 -0.0559710307 -0.1664628061);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% -999999 0), xyz)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz -236.5825482412 7.2139420412 -2.8507109462);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.4), xyz)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz 0.0162916633 0.0107263739 -0.0090046167 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.0), xyz)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz 0.0162916633 0.0107263739 -0.0090046167 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(none 20 30), xyz)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(xyz 0.0037273525 -0.0004749534 -0.0210835883);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% none 30), xyz)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(xyz 0.0096869946 0.0109224783 -0.0090897368);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 none), xyz)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(xyz 0.0173069918 0.0110640949 0.0123481274);\n}\n',
  },
]
