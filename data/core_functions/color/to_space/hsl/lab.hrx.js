// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hsl/lab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 0%), lab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 100%), lab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 50%), lab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lab(53.3889647411% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(80deg 30% 60%), lab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lab(71.9297767616% -15.056348508 28.7197360328);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20.123456789deg 30.987654321% 60.192837465%), lab)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: lab(63.0942649983% 14.1332827511 17.6588648805);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 200% -50%), lab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz -1.0161268876 -0.540961491 0.1515884565) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 999999% 50%), lab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 136956388.39988723 59264689.52803929 -623200798.6169883) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.4), lab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lab(30.8688486066% 10.7899742234 7.6662278505 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.0), lab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lab(30.8688486066% 10.7899742234 7.6662278505 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(none 20% 30%), lab)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: lab(29.467709003% 13.8451863493 5.7231513228);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg none 30%), lab)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: lab(32.5331750598% 0 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% none), lab)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: lab(none 0 0);\n}\n',
  },
]
