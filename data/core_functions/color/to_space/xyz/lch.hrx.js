// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz/lch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0 0 0), lch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 1 1 1), lch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 1 1 1) 100%, black);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.5 0.5 0.5), lch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lch(76.1608841835% 8.541979634 32.621430668deg);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.2 0.4 0.8), lch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lch(68.6381340629% 86.9366558179 203.3717362956deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -1 0.4 2), lch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lch(64.3546378926% 4878.0214227861 181.2519414622deg);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -999999 0 0), lch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz -999998.9999993658 0.000000211 0.0000133413) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.4), lch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lch(51.373608379% 61.6452395223 193.1649108151deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.0), lch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lch(51.373608379% 61.6452395223 193.1649108151deg / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz none 0.2 0.3), lch)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lch(51.0322781723% 262.6519587272 183.231207866deg);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 none 0.3), lch)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 0.1 0 0.3) 100%, black);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 none), lch)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lch(51.9556818936% 99.6116642671 120.7127528375deg);\n}\n',
  },
]
