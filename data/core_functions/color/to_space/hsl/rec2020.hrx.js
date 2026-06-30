// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hsl/rec2020.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 0%), rec2020)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(rec2020 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 100%), rec2020)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(rec2020 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 50%), rec2020)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(rec2020 0.4500400319 0.4500400319 0.4500400319);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(80deg 30% 60%), rec2020)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(rec2020 0.6252433371 0.6805013998 0.4608722597);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20.123456789deg 30.987654321% 60.192837465%), rec2020)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(rec2020 0.6312163333 0.5293329902 0.4413441586);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 200% -50%), rec2020)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(rec2020 -1.2552227887 -0.4270321041 0.3660380417);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 999999% 50%), rec2020)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(rec2020 7903.4152677186 -1170.118178736 -9706.8206181475);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.4), rec2020)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(rec2020 0.2670145784 0.2070036582 0.18272592 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.0), rec2020)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(rec2020 0.2670145784 0.2070036582 0.18272592 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(none 20% 30%), rec2020)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(rec2020 0.2619751449 0.1889937521 0.1808798805);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg none 30%), rec2020)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: color(rec2020 0.2397416118 0.2397416118 0.2397416118);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% none), rec2020)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(rec2020 0 0 0);\n}\n',
  },
]
