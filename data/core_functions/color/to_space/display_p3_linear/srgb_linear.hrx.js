// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3_linear/srgb_linear.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0 0 0), srgb-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 1 1 1), srgb-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb-linear 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.5 0.5 0.5), srgb-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb-linear 0.5 0.5 0.5);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.2 0.4 0.8), srgb-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb-linear 0.1550119647 0.4084113909 0.843236951);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -1 0.4 2), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb-linear -1.3149162468 0.4588797366 2.1847303367);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -999999 0 0), srgb-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb-linear -1224938.9513403836 42056.9126527335 19637.5349527798);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.4), srgb-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0775059824 0.2042056955 0.3117911155 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.0), srgb-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0775059824 0.2042056955 0.3117911155 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear none 0.2 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(srgb-linear none 0.2084113909 0.3137548709);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 none 0.3), srgb-linear)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(srgb-linear 0.1224940176 none 0.3275183246);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 none), srgb-linear)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(srgb-linear 0.0775059824 0.2042056955 none);\n}\n',
  },
]
