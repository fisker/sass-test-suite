// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lab/srgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(0% 0 0), srgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(100% 0 0), srgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 0 0), srgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb 0.4663266093 0.4663266093 0.4663266093);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 50 -75), srgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb 0.5529242775 0.3381978942 0.9794902605);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lab(0% -150 150), $lightness: -50%), srgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb -0.3998933946 -0.1586378934 -0.4488461357);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% -999999 0), srgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb -16.8284366046 10.3453279125 -3.4338747169);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.4), srgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb 0.2232025148 0.0502398339 -0.1048943521 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.0), srgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb 0.2232025148 0.0502398339 -0.1048943521 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(none 20 30), srgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(srgb 0.1653748669 -0.0646023407 -0.1599982587);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% none 30), srgb)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(srgb 0.1479327069 0.1044256541 -0.1079225902);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 none), srgb)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(srgb 0.1994214052 0.0559674757 0.1106602792);\n}\n',
  },
]
