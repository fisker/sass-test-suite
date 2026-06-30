// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/rec2020/hwb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 0 0 0), hwb));\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  value: black;\n  space: hwb;\n  channels: 0deg 0% 100% / 1;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 1 1 1), hwb));\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  value: white;\n  space: hwb;\n  channels: 0deg 100% 0% / 1;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 0.5 0.5 0.5), hwb));\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  value: hsl(0, 0%, 54.6583590878%);\n  space: hwb;\n  channels: 0deg 54.6583590878% 45.3416409122% / 1;\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 0.2 0.4 0.8), hwb));\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  value: hsl(200.8128966593, 189.0732219315%, 29.5081773497%);\n  space: hwb;\n  channels: 200.8128966593deg -26.2838842987% 14.6997610019% / 1;\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 -1 0.4 2), hwb));\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  value: hsl(204.9795970204, 570.1567645938%, 29.20918492%);\n  space: hwb;\n  channels: 204.9795970204deg -137.3289587842% -95.7473286243% / 1;\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 -999999 0 0), hwb));\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  value: hsl(351.6022221471, 202.9643125658%, -14161586.907056702%);\n  space: hwb;\n  channels: 171.6022221471deg -42904554.421379425% -14581280.607266026% / 1;\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 0.1 0.2 0.3 / 0.4), hwb));\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  value: hsla(194.5479244469, 123.11735267%, 16.5168092719%, 0.4);\n  space: hwb;\n  channels: 194.5479244469deg -3.8182490492% 63.148132407% / 0.4;\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 0.1 0.2 0.3 / 0.0), hwb));\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  value: hsla(194.5479244469, 123.11735267%, 16.5168092719%, 0);\n  space: hwb;\n  channels: 194.5479244469deg -3.8182490492% 63.148132407% / 0;\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 none 0.2 0.3), hwb));\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  value: hsl(189.4362583411, 400.9276505087%, 7.3695655834%);\n  space: hwb;\n  channels: 189.4362583411deg -22.1770605629% 63.0838082703% / 1;\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(rec2020 0.1 none 0.3), hwb));\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  value: hsl(273.3326815842, 128.5408000864%, 16.5048029077%);\n  space: hwb;\n  channels: 273.3326815842deg -4.7106028025% 62.2797913821% / 1;\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\na {b: color.to-space(color(rec2020 0.1 0.2 none), hwb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: hsl(97.48398538, 169.4637013095%, 10.0907863158%);\n}\n',
  },
]
