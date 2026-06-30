// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/srgb/oklab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0 0 0), oklab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 1 1 1), oklab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.5 0.5 0.5), oklab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklab(59.8180730527% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.2 0.4 0.8), oklab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklab(53.2482562144% -0.0225118436 -0.1663491839);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -1 0.4 2), oklab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklab(49.0997071072% -2.0235857629 -0.6049595305);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -999999 0 0), oklab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz -91096581353071.47 -46971674760177.46 -4270152250925.215) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.4), oklab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklab(31.3834100712% -0.0190902787 -0.0525285359 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.0), oklab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklab(31.3834100712% -0.0190902787 -0.0525285359 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb none 0.2 0.3), oklab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklab(30.4674632444% -0.0359109246 -0.0568929249);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 none 0.3), oklab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklab(21.1364004374% 0.0335334963 -0.1181436332);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 none), oklab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklab(28.8978413919% -0.0558272242 0.05963976);\n}\n',
  },
]
