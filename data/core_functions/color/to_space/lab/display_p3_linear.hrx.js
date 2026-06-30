export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(0% 0 0), display-p3-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(display-p3-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(100% 0 0), display-p3-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(display-p3-linear 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 0 0), display-p3-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.1841865185 0.1841865185 0.1841865185);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 50 -75), display-p3-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.23566973 0.099330787 0.879940124);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lab(0% -150 150), $lightness: -50%), display-p3-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(display-p3-linear -0.1130610827 -0.0253375925 -0.1583606814);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% -999999 0), display-p3-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(display-p3-linear -595.488788855 208.8910233756 -11.7578022511);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.4), display-p3-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0342590994 0.0051805075 -0.0088494437 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.0), display-p3-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0342590994 0.0051805075 -0.0088494437 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(none 20 30), display-p3-linear)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0182270941 -0.0044270743 -0.020004771);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% none 30), display-p3-linear)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0176420089 0.0110026625 -0.0091825814);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 none), display-p3-linear)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0278772897 0.0054380443 0.0115933369);\n}\n',
  },
]
