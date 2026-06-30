// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz/rec2020.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0 0 0), rec2020)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(rec2020 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 1 1 1), rec2020)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(rec2020 1.0517415202 0.9828015442 0.9579473111);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.5 0.5 0.5), rec2020)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(rec2020 0.7433125628 0.6928455465 0.6746511829);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.2 0.4 0.8), rec2020)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(rec2020 -0.0073399546 0.7239127682 0.8607584595);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -1 0.4 2), rec2020)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(rec2020 -1.5202475993 1.156770634 1.350426083);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -999999 0 0), rec2020)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(rec2020 -702.5226404146 458.9706861542 -89.4449238228);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.4), rec2020)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(rec2020 0.1079117715 0.501698873 0.516462928 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.0), rec2020)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(rec2020 0.1079117715 0.501698873 0.516462928 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz none 0.2 0.3), rec2020)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(rec2020 none 0.5663964614 0.5146878151);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 none 0.3), rec2020)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(rec2020 0.2830292386 none 0.5249837189);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 none), rec2020)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(rec2020 0.2916789955 0.496779191 none);\n}\n',
  },
]
