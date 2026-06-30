// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3_linear/oklab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0 0 0), oklab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 1 1 1), oklab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.5 0.5 0.5), oklab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklab(79.3700525984% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.2 0.4 0.8), oklab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklab(72.6776426801% -0.0374141809 -0.1088046304);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -1 0.4 2), oklab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklab(38.7754419937% -2.1877445581 -0.4122088742);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -999999 0 0), oklab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz -486570.4620772681 -228974.3350951847 0.0000000001) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.4), oklab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklab(56.6425373683% -0.0373900665 -0.0535263799 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.0), oklab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklab(56.6425373683% -0.0373900665 -0.0535263799 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear none 0.2 0.3), oklab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklab(53.4259235831% -0.1040953535 -0.0684449379);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 none 0.3), oklab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklab(38.9886281594% 0.1244730264 -0.1712881884);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 none), oklab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklab(53.2843793949% -0.1024723411 0.1284163638);\n}\n',
  },
]
