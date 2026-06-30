// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hwb/lab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 0% 100%), lab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 100% 0%), lab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 50% 50%), lab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lab(53.3889647411% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(80deg 20% 40%), lab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lab(59.1049141497% -23.929516442 47.3632808755);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20.123456789deg 30.987654321% 40.192837465%), lab)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: lab(48.7209664558% 18.0179342003 22.2207931535);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 200% -125%), lab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 5.5338099778 5.6426521513 5.4845096668) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 999999% -999950%), lab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 3327825161.664072 3501247104.3035965 3812875110.896886) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.4), lab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lab(45.4228859316% 43.1656753022 35.3539928676 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.0), lab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lab(45.4228859316% 43.1656753022 35.3539928676 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(none 20% 30%), lab)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: lab(42.0638915398% 51.8940588399 31.6507145358);\n}\n',
  },
  {
    name: 'missing/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg none 30%), lab)}\n',
  },
  {
    name: 'missing/whiteness/output.css',
    data: 'a {\n  b: lab(39.3870160342% 57.3703400949 53.7905111747);\n}\n',
  },
  {
    name: 'missing/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% none), lab)}\n',
  },
  {
    name: 'missing/blackness/output.css',
    data: 'a {\n  b: lab(60.7483623827% 64.2863186591 55.7098309346);\n}\n',
  },
]
