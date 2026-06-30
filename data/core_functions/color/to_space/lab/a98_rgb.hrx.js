// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lab/a98_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(0% 0 0), a98-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(a98-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(100% 0 0), a98-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(a98-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 0 0), a98-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(a98-rgb 0.4633483808 0.4633483808 0.4633483808);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 50 -75), a98-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(a98-rgb 0.4993446464 0.3405847685 0.9621105751);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lab(0% -150 150), $lightness: -50%), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(a98-rgb -0.3527883779 -0.1750269182 -0.4390573819);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% -999999 0), a98-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(a98-rgb -16.6598712578 12.1485560974 -2.4112643287);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.4), a98-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(a98-rgb 0.2039535001 0.0808226659 -0.1242620432 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.0), a98-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(a98-rgb 0.2039535001 0.0808226659 -0.1242620432 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(none 20 30), a98-rgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1487894196 -0.0929319593 -0.1737307511);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% none 30), a98-rgb)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1557107469 0.1271683781 -0.125356279);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 none), a98-rgb)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(a98-rgb 0.1862731835 0.0856347366 0.1310611506);\n}\n',
  },
]
