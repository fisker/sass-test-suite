// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/prophoto_rgb/display_p3_linear.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0 0 0), display-p3-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(display-p3-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 1 1 1), display-p3-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(display-p3-linear 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.5 0.5 0.5), display-p3-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2871745887 0.2871745887 0.2871745887);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.2 0.4 0.8), display-p3-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(display-p3-linear -0.1520627404 0.2070330332 0.6927886175);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb -1 0.4 2), display-p3-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(display-p3-linear -2.5858747083 0.3326410939 3.6422553118);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb -999999 0 0), display-p3-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(display-p3-linear -103008371657.95668 9697822314.33923 -655765110.1322829);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 0.3 / 0.4), display-p3-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(display-p3-linear -0.0240316151 0.0604645878 0.1172033968 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 0.3 / 0.0), display-p3-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(display-p3-linear -0.0240316151 0.0604645878 0.1172033968 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb none 0.2 0.3), display-p3-linear)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(display-p3-linear none 0.062900575 0.1170386757);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 none 0.3), display-p3-linear)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(display-p3-linear -0.0030723285 none 0.1206696813);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 none), display-p3-linear)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.004915293 0.0619533772 none);\n}\n',
  },
]
