// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz/lab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0 0 0), lab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 1 1 1), lab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 1 1 1) 100%, black);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.5 0.5 0.5), lab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lab(76.1608841835% 7.1944893389 4.6048603909);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.2 0.4 0.8), lab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lab(68.6381340629% -79.8035401529 -34.4873470111);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -1 0.4 2), lab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lab(64.3546378926% -4876.8569771732 -106.5787284462);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -999999 0 0), lab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz -999999 0 0.000000002) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.4), lab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lab(51.373608379% -60.0251143111 -14.0399860293 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.0), lab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lab(51.373608379% -60.0251143111 -14.0399860293 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz none 0.2 0.3), lab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lab(51.0322781723% -262.2343975897 -14.80446365);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 none 0.3), lab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 0.1 0 0.3) 100%, black);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 none), lab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lab(51.9556818936% -50.8750926576 85.6399941916);\n}\n',
  },
]
