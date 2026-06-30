// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/color/alpha.hrx

export default [
  {
    name: 'transparent/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 0.3 / 0));\n",
  },
  {
    name: 'transparent/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3 / 0);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / 0;\n}\n',
  },
  {
    name: 'opaque/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 0.3 / 1));\n",
  },
  {
    name: 'opaque/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'partial/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 0.3 / 0.4));\n",
  },
  {
    name: 'partial/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3 / 0.4);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / 0.4;\n}\n',
  },
  {
    name: 'percent/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 0.3 / 40%));\n",
  },
  {
    name: 'percent/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3 / 0.4);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / 0.4;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color($description: srgb 0.1 0.2 0.3 / 0.4));\n",
  },
  {
    name: 'named/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3 / 0.4);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / 0.4;\n}\n',
  },
  {
    name: 'slash_list/input.scss',
    data: '@use "sass:list";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color(list.slash(srgb 0.1 0.2 0.3, 0.4)));\n',
  },
  {
    name: 'slash_list/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3 / 0.4);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / 0.4;\n}\n',
  },
  {
    name: 'none/slash/blue/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 none / 0.4));\n",
  },
  {
    name: 'none/slash/blue/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 none / 0.4);\n  space: srgb;\n  channels: 0.1 0.2 none / 0.4;\n}\n',
  },
  {
    name: 'none/slash/alpha/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 0.3 / none));\n",
  },
  {
    name: 'none/slash/alpha/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3 / none);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / none;\n}\n',
  },
  {
    name: 'none/slash_list/blue/input.scss',
    data: "@use 'sass:list';\n@use 'core_functions/color/utils';\n@include utils.inspect(color(list.slash(srgb 0.1 0.2 none, 0.4)));\n",
  },
  {
    name: 'none/slash_list/blue/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 none / 0.4);\n  space: srgb;\n  channels: 0.1 0.2 none / 0.4;\n}\n',
  },
  {
    name: 'none/slash_list/alpha/input.scss',
    data: "@use 'sass:list';\n@use 'core_functions/color/utils';\n@include utils.inspect(color(list.slash(srgb 0.1 0.2 0.3, none)));\n",
  },
  {
    name: 'none/slash_list/alpha/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3 / none);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / none;\n}\n',
  },
  {
    name: 'relative_color/slash/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(from #aaa srgb r g b / 25%));\n",
  },
  {
    name: 'relative_color/slash/output.css',
    data: 'a {\n  value: color(from #aaa srgb r g b/25%);\n  type: string;\n}\n',
  },
  {
    name: 'relative_color/slash_list/input.scss',
    data: "@use 'sass:list';\n@use 'core_functions/color/utils';\n@include utils.inspect(color(list.slash(from #aaa srgb r g b, 25%)));\n",
  },
  {
    name: 'relative_color/slash_list/output.css',
    data: 'a {\n  value: color(from #aaa srgb r g b / 25%);\n  type: string;\n}\n',
  },
]
