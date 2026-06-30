// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklab/oklab.hrx

export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0.2 -0.3), oklab)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: oklab(50% 0.2 -0.3);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklab(0% -2 2), $lightness: -50%), oklab)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz -7.6342505681 1.7017041167 -38.7847424763) 100%, black);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(none 0.2 0.3), oklab)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: oklab(none 0.2 0.3);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% none 0.3), oklab)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: oklab(10% none 0.3);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 none), oklab)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: oklab(10% 0.2 none);\n}\n',
  },
]
