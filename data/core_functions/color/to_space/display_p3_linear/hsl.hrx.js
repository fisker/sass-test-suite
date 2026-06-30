export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0 0 0), hsl)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: hsl(0, 0%, 0%);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 1 1 1), hsl)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: hsl(0, 0%, 100%);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.5 0.5 0.5), hsl)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: hsl(0, 0%, 73.5356983052%);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.2 0.4 0.8), hsl)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: hsl(210.8995407892, 77.4665072553%, 67.8915160094%);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -1 0.4 2), hsl)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(196.5412734015, 909.4415388743%, 13.9290938037%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -999999 0 0), hsl)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(356.7844906486, 165.0029138842%, -13697.7855994258%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.4), hsl)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: hsla(202.040183322, 31.6511999115%, 45.1325807768%, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.0), hsl)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: hsla(202.040183322, 31.6511999115%, 45.1325807768%, 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear none 0.2 0.3), hsl)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: hsl(187.3682558048, 230.0217528421%, 18.0556689104%);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 none 0.3), hsl)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: hsl(279.7647236052, 119.0885815094%, 27.7341794019%);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 none), hsl)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: hsl(77.1972503288, 181.3073182011%, 17.3912222966%);\n}\n',
  },
]
