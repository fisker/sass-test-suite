// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rec2020/xyz_d50.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0 0 0), xyz-d50)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz-d50 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 1 1 1), xyz-d50)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz-d50 0.9642956764 1 0.8251046025);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.5 0.5 0.5), xyz-d50)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2504463303 0.2597194371 0.2142957029);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.2 0.4 0.8), xyz-d50)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz-d50 0.1461303676 0.1615955499 0.5152185696);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -1 0.4 2), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz-d50 -0.1181465111 0.0299487833 3.363289424);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -999999 0 0), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz-d50 -11757457714802.084 -4871490904380.732 33734088609.397465);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.4), xyz-d50)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0375225748 0.0485727436 0.0855889676 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.0), xyz-d50)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0375225748 0.0485727436 0.0855889676 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 none 0.2 0.3), xyz-d50)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(xyz-d50 none 0.0422970228 0.0856324257);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 none 0.3), xyz-d50)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0283237743 none 0.0839247274);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 none), xyz-d50)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0243454002 0.0437664763 none);\n}\n',
  },
]
