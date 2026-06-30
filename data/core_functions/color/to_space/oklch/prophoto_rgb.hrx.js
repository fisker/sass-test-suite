export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(0% 0 0deg), prophoto-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(100% 0 0deg), prophoto-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(prophoto-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(50% 0 0deg), prophoto-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.3149802625 0.3149802625 0.3149802625);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg), prophoto-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.050609646 -0.0137951632 -0.0074760684);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10.123456789% 0.198765432 30.192837465deg), prophoto-rgb)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.0841896008 -0.0467123987 -0.0138059119);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklch(0% 1 0deg), $lightness: -10%), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1937443812 -0.1519484557 -0.0725277722);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 999999 0deg), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(prophoto-rgb 2922139901.256741 -1810418671.4016082 -574654054.8066751);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.4), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.050609646 -0.0137951632 -0.0074760684 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 30deg / 0.0), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.050609646 -0.0137951632 -0.0074760684 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(none 0.1 30deg), prophoto-rgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.0010727236 0.000279135 -0.0088387805);\n}\n',
  },
  {
    name: 'missing/chroma/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% none 30deg), prophoto-rgb)}\n',
  },
  {
    name: 'missing/chroma/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.016 0.016 0.016);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklch(10% 0.1 none), prophoto-rgb)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.0479066366 -0.0113980128 0.0096553515);\n}\n',
  },
]
