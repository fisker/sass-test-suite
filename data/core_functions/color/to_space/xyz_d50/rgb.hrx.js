// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz_d50/rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0 0 0), rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 1 1 1), rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: hsl(72.6622302958, 128.9066481357%, 104.4631089642%);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.5 0.5 0.5), rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: rgb(189.6903079461, 185.0514318275, 207.0327542814);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.2 0.4 0.8), rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: hsl(187.9353554297, 490.1229331153%, 17.2918334784%);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -1 0.4 2), rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(3.9698519642, 796.3834139233%, -21.9385057601%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -999999 0 0), rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(329.431996419, 420.4439814741%, -10316.9080915762%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.4), rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: hsla(184.0103843189, 495.2078632431%, 10.9589006248%, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.0), rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: hsla(184.0103843189, 495.2078632431%, 10.9589006248%, 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 none 0.2 0.3), rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: rgb(0, 168.3310327198, 164.9124102862);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 none 0.3), rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: rgb(113.3463666573, 0, 175.0222017144);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 none), rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: hsl(128.9663541465, 142.6286256266%, 23.5199973212%);\n}\n',
  },
]
