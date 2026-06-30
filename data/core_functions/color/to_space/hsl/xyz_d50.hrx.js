// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hsl/xyz_d50.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 0%), xyz-d50)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz-d50 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 100%), xyz-d50)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz-d50 0.9642956764 1 0.8251046025);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 50%), xyz-d50)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz-d50 0.2063989463 0.2140411405 0.1766063301);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(80deg 30% 60%), xyz-d50)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz-d50 0.37190333 0.4355459142 0.1913805991);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20.123456789deg 30.987654321% 60.192837465%), xyz-d50)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(xyz-d50 0.3452978329 0.3170012803 0.1725389126);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 200% -50%), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz-d50 -1.08485158 -0.5684806881 0.1152232851);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 999999% 50%), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz-d50 176160479.28127974 73395911.69654827 -468942304.8608692);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.4), xyz-d50)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0743501157 0.0659597326 0.0403572779 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.0), xyz-d50)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0743501157 0.0659597326 0.0403572779 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(none 20% 30%), xyz-d50)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0712660027 0.0602192369 0.0395798961);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg none 30%), xyz-d50)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0706240085 0.0732389559 0.0604297996);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% none), xyz-d50)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(xyz-d50 0 0 0);\n}\n',
  },
]
