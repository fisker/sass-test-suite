// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3_linear/rec2020.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0 0 0), rec2020)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(rec2020 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 1 1 1), rec2020)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(rec2020 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.5 0.5 0.5), rec2020)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(rec2020 0.7054355531 0.7054355531 0.7054355531);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.2 0.4 0.8), rec2020)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(rec2020 0.5087906169 0.6251394888 0.8914365162);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -1 0.4 2), rec2020)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(rec2020 -0.7605208006 0.5913026458 1.394070004);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -999999 0 0), rec2020)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(rec2020 -485.0647425281 -137.3886086146 26.7185039398);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.4), rec2020)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(rec2020 0.3386744281 0.4295143351 0.5387140347 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.0), rec2020)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(rec2020 0.3386744281 0.4295143351 0.5387140347 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear none 0.2 0.3), rec2020)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(rec2020 none 0.423943727 0.5388304424);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 none 0.3), rec2020)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(rec2020 0.2720431653 none 0.5353168234);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 none), rec2020)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(rec2020 0.3162343228 0.4249607248 none);\n}\n',
  },
]
