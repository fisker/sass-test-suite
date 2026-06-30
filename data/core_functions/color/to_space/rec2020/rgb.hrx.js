// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rec2020/rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0 0 0), rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 1 1 1), rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.5 0.5 0.5), rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: rgb(139.3788156739, 139.3788156739, 139.3788156739);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.2 0.4 0.8), rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: hsl(200.8128966593, 189.0732219315%, 29.5081773497%);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -1 0.4 2), rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(204.9795970204, 570.1567645938%, 29.20918492%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 -999999 0 0), rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(351.6022221471, 202.9643125658%, -14161586.907056699%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.4), rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: hsla(194.5479244469, 123.11735267%, 16.5168092719%, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 0.3 / 0.0), rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: hsla(194.5479244469, 123.11735267%, 16.5168092719%, 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 none 0.2 0.3), rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: rgb(0, 70.4374731297, 94.1362889109);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 none 0.3), rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: rgb(48.0971037271, 0, 96.1865319755);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(rec2020 0.1 0.2 none), rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: rgb(14.8533924164, 69.337066059, 0);\n}\n',
  },
]
