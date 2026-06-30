// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklab/rec2020.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(0% 0 0), rec2020)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(rec2020 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(100% 0 0), rec2020)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(rec2020 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0 0), rec2020)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(rec2020 0.3319485778 0.3319485778 0.3319485778);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0.2 -0.3), rec2020)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(rec2020 0.4424432682 -0.148148946 0.9623483256);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklab(0% -2 2), $lightness: -50%), rec2020)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(rec2020 -1.9250404072 2.5779940454 -5.4656767494);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% -999999 0), rec2020)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(rec2020 -56131666.27802762 38257475.9243856 10955270.093935277);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.4), rec2020)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(rec2020 0.1199234985 -0.0200899779 -0.1691453967 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.0), rec2020)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(rec2020 0.1199234985 -0.0200899779 -0.1691453967 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(none 0.2 0.3), rec2020)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(rec2020 -0.0027870985 0.0709375583 -0.2911317074);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% none 0.3), rec2020)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(rec2020 0.0287100489 0.017107367 -0.1474743973);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 none), rec2020)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(rec2020 0.0529885714 -0.0188512419 0.0014800888);\n}\n',
  },
]
