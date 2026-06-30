// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklab/srgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(0% 0 0), srgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(100% 0 0), srgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0 0), srgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb 0.388572859 0.388572859 0.388572859);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0.2 -0.3), srgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb 0.5825328101 -0.3031010436 1.0153388554);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklab(0% -2 2), $lightness: -50%), srgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb -2.4568464522 2.5780112249 -4.9406967313);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% -999999 0), srgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb -18956885.022046793 11755005.08950827 1575235.545128226);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.4), srgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb 0.2526613219 -0.0872393592 -0.2448119157 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.0), srgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb 0.2526613219 -0.0872393592 -0.2448119157 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(none 0.2 0.3), srgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(srgb -0.0386443168 0.1463213616 -0.3713891078);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% none 0.3), srgb)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(srgb 0.106088871 0.0486334871 -0.2236185191);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 none), srgb)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(srgb 0.1600386899 -0.0720166235 0.0074363885);\n}\n',
  },
]
