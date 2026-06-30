// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/prophoto_rgb/srgb_linear.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0 0 0), srgb-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 1 1 1), srgb-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb-linear 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.5 0.5 0.5), srgb-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2871745887 0.2871745887 0.2871745887);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.2 0.4 0.8), srgb-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb-linear -0.232837807 0.2221355079 0.7475773304);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb -1 0.4 2), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb-linear -3.2423661674 0.4553849808 4.0248155294);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb -999999 0 0), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb-linear -128360522797.99591 14437901609.733408 540024616.0904481);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 0.3 / 0.4), srgb-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb-linear -0.0430382059 0.0640182408 0.1244386226 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 0.3 / 0.0), srgb-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb-linear -0.0430382059 0.0640182408 0.1244386226 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb none 0.2 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(srgb-linear none 0.0676448843 0.1245742709);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 none 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(srgb-linear -0.0028805786 none 0.1328972872);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 none), srgb-linear)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(srgb-linear -0.0079148637 0.0643522253 none);\n}\n',
  },
]
