// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hwb/rec2020.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 0% 100%), rec2020)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(rec2020 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 100% 0%), rec2020)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(rec2020 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 50% 50%), rec2020)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(rec2020 0.4500400319 0.4500400319 0.4500400319);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(80deg 20% 40%), rec2020)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(rec2020 0.459214681 0.5459336036 0.2122890002);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20.123456789deg 30.987654321% 40.192837465%), rec2020)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(rec2020 0.4867284206 0.3676626536 0.2677057789);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 200% -125%), rec2020)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(rec2020 2.3816237298 2.2717034049 2.1734869236);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 999999% -999950%), rec2020)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(rec2020 21678.0429642711 21677.6112716515 21677.2173996703);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.4), rec2020)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(rec2020 0.5439867892 0.2751629629 0.1667560186 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% 30% / 0.0), rec2020)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(rec2020 0.5439867892 0.2751629629 0.1667560186 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(none 20% 30%), rec2020)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(rec2020 0.5338070059 0.2147334666 0.158678854);\n}\n',
  },
  {
    name: 'missing/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg none 30%), rec2020)}\n',
  },
  {
    name: 'missing/whiteness/output.css',
    data: 'a {\n  b: color(rec2020 0.5258638966 0.1667450692 0.0381165436);\n}\n',
  },
  {
    name: 'missing/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% none), rec2020)}\n',
  },
  {
    name: 'missing/blackness/output.css',
    data: 'a {\n  b: color(rec2020 0.8117472221 0.3730204781 0.1963814934);\n}\n',
  },
]
