// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/a98_rgb/display_p3.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0 0 0), display-p3)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(display-p3 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 1 1 1), display-p3)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(display-p3 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.5 0.5 0.5), display-p3)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(display-p3 0.5039928958 0.5039928958 0.5039928958);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.2 0.4 0.8), display-p3)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(display-p3 0.1198075605 0.3936533835 0.7891199167);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -1 0.4 2), display-p3)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(display-p3 -1.0713648823 0.3146416114 1.8898918553);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb -999999 0 0), display-p3)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(display-p3 -352050.1162090242 -92416.3092975226 -70070.8047882944);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 0.3 / 0.4), display-p3)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(display-p3 0.0376331272 0.1827194825 0.2895249614 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 0.3 / 0.0), display-p3)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(display-p3 0.0376331272 0.1827194825 0.2895249614 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb none 0.2 0.3), display-p3)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(display-p3 none 0.1816774074 0.2892067467);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 none 0.3), display-p3)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(display-p3 0.080586652 none 0.2878991958);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(a98-rgb 0.1 0.2 none), display-p3)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(display-p3 0.0376331272 0.1827194825 none);\n}\n',
  },
]
