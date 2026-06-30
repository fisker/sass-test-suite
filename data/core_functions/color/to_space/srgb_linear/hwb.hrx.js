// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/srgb_linear/hwb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear 0 0 0), hwb));\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  value: black;\n  space: hwb;\n  channels: 0deg 0% 100% / 1;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear 1 1 1), hwb));\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  value: white;\n  space: hwb;\n  channels: 0deg 100% 0% / 1;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear 0.5 0.5 0.5), hwb));\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  value: hsl(0, 0%, 73.5356983052%);\n  space: hwb;\n  channels: 0deg 73.5356983052% 26.4643016948% / 1;\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear 0.2 0.4 0.8), hwb));\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  value: hsl(214.3023060477, 69.2456926348%, 69.5430478913%);\n  space: hwb;\n  channels: 214.3023060477deg 48.4529204482% 9.3668246656% / 1;\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear -1 0.4 2), hwb));\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  value: hsl(197.5434618594, 666.1615765111%, 17.6628023075%);\n  space: hwb;\n  channels: 197.5434618594deg -100% -35.3256046149% / 1;\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear -999999 0 0), hwb));\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  value: hsl(0, 100%, -16678.2577069634%);\n  space: hwb;\n  channels: 180deg -33356.5154139268% 100% / 1;\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear 0.1 0.2 0.3 / 0.4), hwb));\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  value: hsla(205.3925362149, 25.148533711%, 46.6510851344%, 0.4);\n  space: hwb;\n  channels: 205.3925362149deg 34.9190212628% 41.616850994% / 0.4;\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear 0.1 0.2 0.3 / 0.0), hwb));\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  value: hsla(205.3925362149, 25.148533711%, 46.6510851344%, 0);\n  space: hwb;\n  channels: 205.3925362149deg 34.9190212628% 41.616850994% / 0;\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear none 0.2 0.3), hwb));\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  value: hsl(190.2052342776, 100%, 29.191574503%);\n  space: hwb;\n  channels: 190.2052342776deg 0% 41.616850994% / 1;\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color(srgb-linear 0.1 none 0.3), hwb));\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  value: hsl(275.8860614996, 100%, 29.191574503%);\n  space: hwb;\n  channels: 275.8860614996deg 0% 41.616850994% / 1;\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\na {b: color.to-space(color(srgb-linear 0.1 0.2 none), hwb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: hsl(76.7592364631, 100%, 24.2264602241%);\n}\n',
  },
]
