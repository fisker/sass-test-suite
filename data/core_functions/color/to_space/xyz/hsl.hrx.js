// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz/hsl.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0 0 0), hsl)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: hsl(0, 0%, 0%);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 1 1 1), hsl)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: hsl(188.6326376323, 287.948753728%, 102.1970070346%);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.5 0.5 0.5), hsl)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: hsl(8.6326376323, 19.0960524665%, 75.1815938992%);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.2 0.4 0.8), hsl)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: hsl(183.9973689591, 600.9357681928%, 12.7508937669%);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -1 0.4 2), hsl)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(0.951270101, 523.3395920082%, -31.8043324514%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -999999 0 0), hsl)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(330.5196564153, 405.9398117154%, -10761.9459979264%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.4), hsl)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: hsla(179.5022543706, 556.250481638%, 8.7700702541%, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.0), hsl)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: hsla(179.5022543706, 556.250481638%, 8.7700702541%, 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz none 0.2 0.3), hsl)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: hsl(355.8794204538, 2697.9214173204%, -2.5244914397%);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 none 0.3), hsl)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: hsl(290.3526254976, 328.3439800543%, 14.0892871543%);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 none), hsl)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: hsl(93.2964667331, 215.664278299%, 17.8710983929%);\n}\n',
  },
]
