// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz/srgb_linear.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0 0 0), srgb-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 1 1 1), srgb-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb-linear 1.204976004 0.9482789226 0.9086246351);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.5 0.5 0.5), srgb-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb-linear 0.602488002 0.4741394613 0.4543123175);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.2 0.4 0.8), srgb-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb-linear -0.3656478909 0.5897823193 0.7751124438);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -1 0.4 2), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb-linear -4.8531447335 1.8027407517 1.9767221652);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -999999 0 0), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb-linear -3240966.700934579 969242.6670372436 -55630.0240669139);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.4), srgb-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb-linear -0.1329628694 0.2907356539 0.2818590705 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.0), srgb-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb-linear -0.1329628694 0.2907356539 0.2818590705 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz none 0.2 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(srgb-linear none 0.3876600175 0.2762960625);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 none 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(srgb-linear 0.1745137661 none 0.3226544622);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 none), srgb-linear)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0166203587 0.2782691367 none);\n}\n',
  },
]
