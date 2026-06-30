// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/a98_rgb/lab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0 0 0), lab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 1 1 1), lab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.5 0.5 0.5), lab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lab(53.7880481926% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.2 0.4 0.8), lab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lab(42.9339299516% 6.5030561424 -63.5427502212);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -1 0.4 2), lab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lab(30.0623308533% 38.5823326773 -241.4998540297);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -999999 0 0), lab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz -9041452038524.754 -4661998707364.328 -423818064305.84766) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 0.3 / 0.4), lab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lab(17.7387491045% -7.186319424 -22.7371258976 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 0.3 / 0.0), lab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lab(17.7387491045% -7.186319424 -22.7371258976 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb none 0.2 0.3), lab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lab(16.8147782656% -12.534270074 -24.2693697193);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 none 0.3), lab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: lab(5.8200823344% 29.1326658037 -42.4044732971);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 none), lab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lab(15.5541953165% -27.655552781 23.2496799552);\n}\n',
  },
]
