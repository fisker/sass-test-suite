// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hwb/lch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 0% 100%), lch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 100% 0%), lch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 50% 50%), lch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lch(53.3889647411% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(80deg 20% 40%), lch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lch(59.1049141497% 53.0650745071 116.8044348895deg);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20.123456789deg 30.987654321% 40.192837465%), lch)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: lch(48.7209664558% 28.6078590813 50.9628149158deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 200% -125%), lch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 5.5338099778 5.6426521513 5.4845096668) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 999999% -999950%), lch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 3327825161.664072 3501247104.3035965 3812875110.896886) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.4), lch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lch(45.4228859316% 55.7958809947 39.3185127962deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.0), lch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lch(45.4228859316% 55.7958809947 39.3185127962deg / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(none 20% 30%), lch)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: lch(42.0638915398% 60.7845463379 none);\n}\n',
  },
  {
    name: 'missing/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg none 30%), lch)}\n',
  },
  {
    name: 'missing/whiteness/output.css',
    data: 'a {\n  b: lch(39.3870160342% 78.6433405639 43.1554816825deg);\n}\n',
  },
  {
    name: 'missing/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% none), lch)}\n',
  },
  {
    name: 'missing/blackness/output.css',
    data: 'a {\n  b: lch(60.7483623827% 85.0665388358 40.9118491907deg);\n}\n',
  },
]
