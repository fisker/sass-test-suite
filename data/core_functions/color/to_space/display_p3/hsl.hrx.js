// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3/hsl.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0 0 0), hsl)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: hsl(0, 0%, 0%);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 1 1 1), hsl)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: hsl(0, 0%, 100%);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.5 0.5 0.5), hsl)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: hsl(0, 0%, 50%);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.2 0.4 0.8), hsl)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: hsl(214.974668252, 77.667451385%, 46.5940983001%);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -1 0.4 2), hsl)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(210.5153182162, 325.7395089334%, 48.9349840904%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -999999 0 0), hsl)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(356.7852726724, 165.043052964%, -41057989.10847678%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.4), hsl)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: hsla(205.417452683, 67.7488400949%, 18.4043245596%, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.0), hsl)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: hsla(205.417452683, 67.7488400949%, 18.4043245596%, 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 none 0.2 0.3), hsl)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: hsl(196.0636856013, 172.1527011916%, 11.3581215767%);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 none 0.3), hsl)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: hsl(262.3902012265, 103.5328302701%, 15.4158592357%);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 none), hsl)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: hsl(96.0435532608, 143.3480015017%, 8.3456369204%);\n}\n',
  },
]
