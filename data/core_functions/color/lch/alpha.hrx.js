// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/lch/alpha.hrx

export default [
  {
    name: 'transparent/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / 0));\n",
  },
  {
    name: 'transparent/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / 0);\n  space: lch;\n  channels: 1% 2 3deg / 0;\n}\n',
  },
  {
    name: 'opaque/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / 1));\n",
  },
  {
    name: 'opaque/output.css',
    data: 'a {\n  value: lch(1% 2 3deg);\n  space: lch;\n  channels: 1% 2 3deg / 1;\n}\n',
  },
  {
    name: 'partial/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / 0.4));\n",
  },
  {
    name: 'partial/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / 0.4);\n  space: lch;\n  channels: 1% 2 3deg / 0.4;\n}\n',
  },
  {
    name: 'percent/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / 40%));\n",
  },
  {
    name: 'percent/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / 0.4);\n  space: lch;\n  channels: 1% 2 3deg / 0.4;\n}\n',
  },
  {
    name: 'degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / calc(infinity)));\n",
  },
  {
    name: 'degenerate/positive_infinity/output.css',
    data: 'a {\n  value: lch(1% 2 3deg);\n  space: lch;\n  channels: 1% 2 3deg / 1;\n}\n',
  },
  {
    name: 'degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / calc(-infinity)));\n",
  },
  {
    name: 'degenerate/negative_infinity/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / 0);\n  space: lch;\n  channels: 1% 2 3deg / 0;\n}\n',
  },
  {
    name: 'degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / calc(NaN)));\n",
  },
  {
    name: 'degenerate/nan/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / 0);\n  space: lch;\n  channels: 1% 2 3deg / 0;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch($channels: 1% 2 3deg / 0.4));\n",
  },
  {
    name: 'named/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / 0.4);\n  space: lch;\n  channels: 1% 2 3deg / 0.4;\n}\n',
  },
  {
    name: 'slash_list/input.scss',
    data: '@use "sass:list";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lch(list.slash(1% 2 3deg, 0.4)));\n',
  },
  {
    name: 'slash_list/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / 0.4);\n  space: lch;\n  channels: 1% 2 3deg / 0.4;\n}\n',
  },
  {
    name: 'none/slash/hue/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 none / 0.4));\n",
  },
  {
    name: 'none/slash/hue/output.css',
    data: 'a {\n  value: lch(1% 2 none / 0.4);\n  space: lch;\n  channels: 1% 2 none / 0.4;\n}\n',
  },
  {
    name: 'none/slash/alpha/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / none));\n",
  },
  {
    name: 'none/slash/alpha/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / none);\n  space: lch;\n  channels: 1% 2 3deg / none;\n}\n',
  },
  {
    name: 'none/slash_list/hue/input.scss',
    data: "@use 'sass:list';\n@use 'core_functions/color/utils';\n@include utils.inspect(lch(list.slash(1% 2 none, 0.4)));\n",
  },
  {
    name: 'none/slash_list/hue/output.css',
    data: 'a {\n  value: lch(1% 2 none / 0.4);\n  space: lch;\n  channels: 1% 2 none / 0.4;\n}\n',
  },
  {
    name: 'none/slash_list/alpha/input.scss',
    data: "@use 'sass:list';\n@use 'core_functions/color/utils';\n@include utils.inspect(lch(list.slash(1% 2 3deg, none)));\n",
  },
  {
    name: 'none/slash_list/alpha/output.css',
    data: 'a {\n  value: lch(1% 2 3deg / none);\n  space: lch;\n  channels: 1% 2 3deg / none;\n}\n',
  },
]
