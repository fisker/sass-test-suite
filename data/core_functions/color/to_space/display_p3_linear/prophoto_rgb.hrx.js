// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3_linear/prophoto_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0 0 0), prophoto-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 1 1 1), prophoto-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(prophoto-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.5 0.5 0.5), prophoto-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.6803950001 0.6803950001 0.6803950001);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.2 0.4 0.8), prophoto-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.5450485778 0.5974943606 0.8713553452);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -1 0.4 2), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(prophoto-rgb -0.4497730039 0.5428684489 1.4378624302);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -999999 0 0), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(prophoto-rgb -1669.1709023002 -541.2680316437 53.0706141682);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.4), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.351476417 0.4029892249 0.5076952049 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.0), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.351476417 0.4029892249 0.5076952049 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear none 0.2 0.3), prophoto-rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(prophoto-rgb none 0.3933326079 0.507816807);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 none 0.3), prophoto-rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.2926205478 none 0.4979202048);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 none), prophoto-rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.2873427759 0.3922074244 none);\n}\n',
  },
]
