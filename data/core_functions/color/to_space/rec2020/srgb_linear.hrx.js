// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rec2020/srgb_linear.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0 0 0), srgb-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 1 1 1), srgb-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb-linear 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.5 0.5 0.5), srgb-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2597194371 0.2597194371 0.2597194371);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.2 0.4 0.8), srgb-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb-linear -0.0561682415 0.1838568265 0.6975942253);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -1 0.4 2), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb-linear -2.0689650071 0.28550882 4.7113611346);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -999999 0 0), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb-linear -28986940627436.953 2174258821934.0952 316855134441.09607);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.4), srgb-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb-linear -0.0029553011 0.0592131472 0.111863462 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.0), srgb-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb-linear -0.0029553011 0.0592131472 0.111863462 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 none 0.2 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(srgb-linear none 0.0620141462 0.1122716521);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 none 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0296680112 none 0.1174471704);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 none), srgb-linear)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(srgb-linear 0.004719249 0.0600927379 none);\n}\n',
  },
]
