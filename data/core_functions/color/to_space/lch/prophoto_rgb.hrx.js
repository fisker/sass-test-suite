export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(0% 0 0deg), prophoto-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(100% 0 0deg), prophoto-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(prophoto-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(50% 0 0deg), prophoto-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.3906698633 0.3906698633 0.3906698633);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg), prophoto-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1119358598 0.0682122171 0.0505966427);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10.123456789% 20.987654321 30.192837465deg), prophoto-rgb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1140986722 0.0679789036 0.0492544884);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lch(0% 200 0deg), $lightness: -10%), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.3120531174 -0.2195824001 -0.0819271128);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 999999 0deg), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(prophoto-rgb 367010.4615537181 -222031.7168269293 0.0827038254);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.4), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1119358598 0.0682122171 0.0505966427 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 30deg / 0.0), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1119358598 0.0682122171 0.0505966427 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(none 20 30deg), prophoto-rgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.0585320378 -0.0354038244 -0.0605339143);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% none 30deg), prophoto-rgb)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.0827038254 0.0827038254 0.0827038254);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lch(10% 20 none), prophoto-rgb)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1155645311 0.0659678734 0.0827038254);\n}\n',
  },
]
