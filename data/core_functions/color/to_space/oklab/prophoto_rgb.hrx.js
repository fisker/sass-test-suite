// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklab/prophoto_rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(0% 0 0), prophoto-rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(100% 0 0), prophoto-rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(prophoto-rgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0 0), prophoto-rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.3149802625 0.3149802625 0.3149802625);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0.2 -0.3), prophoto-rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.4918881798 -0.0624903392 0.9386035263);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklab(0% -2 2), $lightness: -50%), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(prophoto-rgb -2.9829709834 2.6753283295 -7.2338243082);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% -999999 0), prophoto-rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(prophoto-rgb -2922132835.874805 1810415087.1875782 574653499.7241842);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.4), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1071252352 -0.042441166 -0.1726130164 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.0), prophoto-rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.1071252352 -0.042441166 -0.1726130164 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(none 0.2 0.3), prophoto-rgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(prophoto-rgb -0.0831372046 0.089197549 -0.2723906915);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% none 0.3), prophoto-rgb)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.0211560983 0.0415370461 -0.1548071753);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 none), prophoto-rgb)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(prophoto-rgb 0.0759873336 -0.0414646624 0.0022071927);\n}\n',
  },
]
