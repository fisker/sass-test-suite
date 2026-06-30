export default [
  {
    name: 'transparent/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(0 255 127 / 0));\n",
  },
  {
    name: 'transparent/output.css',
    data: 'a {\n  value: oklab(0% 255 127 / 0);\n  space: oklab;\n  channels: 0% 255 127 / 0;\n}\n',
  },
  {
    name: 'opaque/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 3 / 1));\n",
  },
  {
    name: 'opaque/output.css',
    data: 'a {\n  value: oklab(1% 2 3);\n  space: oklab;\n  channels: 1% 2 3 / 1;\n}\n',
  },
  {
    name: 'partial/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 3 / 0.4));\n",
  },
  {
    name: 'partial/output.css',
    data: 'a {\n  value: oklab(1% 2 3 / 0.4);\n  space: oklab;\n  channels: 1% 2 3 / 0.4;\n}\n',
  },
  {
    name: 'percent/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 3 / 40%));\n",
  },
  {
    name: 'percent/output.css',
    data: 'a {\n  value: oklab(1% 2 3 / 0.4);\n  space: oklab;\n  channels: 1% 2 3 / 0.4;\n}\n',
  },
  {
    name: 'degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 -3 / calc(infinity)));\n",
  },
  {
    name: 'degenerate/positive_infinity/output.css',
    data: 'a {\n  value: oklab(1% 2 -3);\n  space: oklab;\n  channels: 1% 2 -3 / 1;\n}\n',
  },
  {
    name: 'degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 -3 / calc(-infinity)));\n",
  },
  {
    name: 'degenerate/negative_infinity/output.css',
    data: 'a {\n  value: oklab(1% 2 -3 / 0);\n  space: oklab;\n  channels: 1% 2 -3 / 0;\n}\n',
  },
  {
    name: 'degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 -3 / calc(NaN)));\n",
  },
  {
    name: 'degenerate/nan/output.css',
    data: 'a {\n  value: oklab(1% 2 -3 / 0);\n  space: oklab;\n  channels: 1% 2 -3 / 0;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab($channels: 1% 2 3 / 0.4));\n",
  },
  {
    name: 'named/output.css',
    data: 'a {\n  value: oklab(1% 2 3 / 0.4);\n  space: oklab;\n  channels: 1% 2 3 / 0.4;\n}\n',
  },
  {
    name: 'slash_list/input.scss',
    data: '@use "sass:list";\n@use \'core_functions/color/utils\';\n@include utils.inspect(oklab(list.slash(1% 2 3, 0.4)));\n',
  },
  {
    name: 'slash_list/output.css',
    data: 'a {\n  value: oklab(1% 2 3 / 0.4);\n  space: oklab;\n  channels: 1% 2 3 / 0.4;\n}\n',
  },
  {
    name: 'none/slash/b/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 none / 0.4));\n",
  },
  {
    name: 'none/slash/b/output.css',
    data: 'a {\n  value: oklab(1% 2 none / 0.4);\n  space: oklab;\n  channels: 1% 2 none / 0.4;\n}\n',
  },
  {
    name: 'none/slash/alpha/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 3 / none));\n",
  },
  {
    name: 'none/slash/alpha/output.css',
    data: 'a {\n  value: oklab(1% 2 3 / none);\n  space: oklab;\n  channels: 1% 2 3 / none;\n}\n',
  },
  {
    name: 'none/slash_list/b/input.scss',
    data: "@use 'sass:list';\n@use 'core_functions/color/utils';\n@include utils.inspect(oklab(list.slash(1% 2 none, 0.4)));\n",
  },
  {
    name: 'none/slash_list/b/output.css',
    data: 'a {\n  value: oklab(1% 2 none / 0.4);\n  space: oklab;\n  channels: 1% 2 none / 0.4;\n}\n',
  },
  {
    name: 'none/slash_list/alpha/input.scss',
    data: "@use 'sass:list';\n@use 'core_functions/color/utils';\n@include utils.inspect(oklab(list.slash(1% 2 3, none)));\n",
  },
  {
    name: 'none/slash_list/alpha/output.css',
    data: 'a {\n  value: oklab(1% 2 3 / none);\n  space: oklab;\n  channels: 1% 2 3 / none;\n}\n',
  },
  {
    name: 'relative_color/slash/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(from #aaa l a b / 25%));\n",
  },
  {
    name: 'relative_color/slash/output.css',
    data: 'a {\n  value: oklab(from #aaa l a b/25%);\n  type: string;\n}\n',
  },
  {
    name: 'relative_color/slash_list/input.scss',
    data: "@use 'sass:list';\n@use 'core_functions/color/utils';\n@include utils.inspect(oklab(list.slash(from #aaa l a b, 25%)));\n",
  },
  {
    name: 'relative_color/slash_list/output.css',
    data: 'a {\n  value: oklab(from #aaa l a b / 25%);\n  type: string;\n}\n',
  },
]
