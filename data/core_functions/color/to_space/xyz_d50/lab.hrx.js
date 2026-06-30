// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz_d50/lab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0 0 0), lab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 1 1 1), lab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lab(100% 6.096419139 -13.2359011077);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.5 0.5 0.5), lab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lab(76.0692610142% 4.8387310772 -10.505341671);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.2 0.4 0.8), lab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lab(69.4695307685% -72.4361685024 -50.5894155557);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -1 0.4 2), lab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lab(69.4695307685% -4337.1188269787 -121.2991404532);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -999999 0 0), lab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: lab(0% -4037677156.674863 0);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.4), lab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lab(51.8372115265% -57.4926250406 -25.7864288134 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.0), lab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lab(51.8372115265% -57.4926250406 -25.7864288134 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 none 0.2 0.3), lab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lab(51.8372115265% -223.4362565799 -25.7864288134);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 none 0.3), lab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: lab(0% 165.9436315393 -115.1609314454);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 none), lab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lab(51.8372115265% -57.4926250406 89.374502632);\n}\n',
  },
]
