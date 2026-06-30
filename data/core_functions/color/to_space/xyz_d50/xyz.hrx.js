// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz_d50/xyz.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0 0 0), xyz)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 1 1 1), xyz)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz 0.9956342097 1.0026671299 1.3221722918);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.5 0.5 0.5), xyz)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz 0.4978171049 0.501333565 0.6610861459);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.2 0.4 0.8), xyz)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz 0.2324626969 0.4151573703 1.0585524842);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -1 0.4 2), xyz)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz -0.8381943171 0.474450751 2.6402147779);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -999999 0 0), xyz)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz -955472.4660146538 28369.6809641542 -12314.0025504671);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.4), xyz)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz 0.1099054241 0.205474541 0.3962396495 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.0), xyz)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz 0.1099054241 0.205474541 0.3962396495 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 none 0.2 0.3), xyz)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(xyz none 0.208311512 0.395008248);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 none 0.3), xyz)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(xyz 0.1145251151 none 0.4003411794);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 none), xyz)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(xyz 0.0909276512 0.1991621087 none);\n}\n',
  },
]
