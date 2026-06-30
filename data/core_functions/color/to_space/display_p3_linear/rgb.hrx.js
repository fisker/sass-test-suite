// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3_linear/rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0 0 0), rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 1 1 1), rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.5 0.5 0.5), rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: rgb(187.5160306784, 187.5160306784, 187.5160306784);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.2 0.4 0.8), rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: rgb(109.6963970696, 171.2215276397, 236.5503345783);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -1 0.4 2), rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(196.5412734015, 909.4415388743%, 13.9290938037%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -999999 0 0), rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(356.7844906486, 165.0029138842%, -13697.7855994258%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.4), rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: rgba(78.6613223953, 124.7530916647, 151.5148395665, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.0), rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: rgba(78.6613223953, 124.7530916647, 151.5148395665, 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear none 0.2 0.3), rgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: rgb(0, 125.9369265301, 151.9484693152);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 none 0.3), rgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: rgb(98.1356471296, 0, 154.9441716243);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 none), rgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: rgb(78.6613223953, 124.7530916647, 0);\n}\n',
  },
]
