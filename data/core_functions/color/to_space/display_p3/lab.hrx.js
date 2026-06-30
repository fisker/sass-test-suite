// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3/lab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0 0 0), lab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 1 1 1), lab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.5 0.5 0.5), lab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lab(53.3889647411% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.2 0.4 0.8), lab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lab(44.25592932% 9.6200905548 -62.9637824368);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -1 0.4 2), lab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lab(49.5672259701% 56.9674744357 -222.3639264513);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -999999 0 0), lab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz -107482877956690.4 -50580177881913.99 3039800.685913086) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.4), lab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lab(20.127570568% -5.1428777609 -20.6370940019 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.0), lab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lab(20.127570568% -5.1428777609 -20.6370940019 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 none 0.2 0.3), lab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lab(19.1369530209% -11.4360315052 -22.3500016909);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 none 0.3), lab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: lab(6.5882355616% 31.9260289697 -43.3240229048);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 none), lab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lab(18.0687084518% -22.5066779572 28.5560007052);\n}\n',
  },
]
