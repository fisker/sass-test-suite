// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/oklch/no_alpha.hrx

export default [
  {
    name: 'unitless/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(0.1 0.2 3deg));\n",
  },
  {
    name: 'unitless/in_range/output.css',
    data: 'a {\n  value: oklch(10% 0.2 3deg);\n  space: oklch;\n  channels: 10% 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1.1 0.2 3deg));\n",
  },
  {
    name: 'unitless/lightness/above_range/output.css',
    data: 'a {\n  value: oklch(100% 0.2 3deg);\n  space: oklch;\n  channels: 100% 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(-0.1 0.2 3deg));\n",
  },
  {
    name: 'unitless/lightness/below_range/output.css',
    data: 'a {\n  value: oklch(0% 0.2 3deg);\n  space: oklch;\n  channels: 0% 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(calc(infinity) 0.2 3deg));\n",
  },
  {
    name: 'unitless/lightness/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: oklch(100% 0.2 3deg);\n  space: oklch;\n  channels: 100% 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(calc(-infinity) 0.2 3deg));\n",
  },
  {
    name: 'unitless/lightness/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: oklch(0% 0.2 3deg);\n  space: oklch;\n  channels: 0% 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(calc(NaN) 0.2 3deg));\n",
  },
  {
    name: 'unitless/lightness/degenerate/nan/output.css',
    data: 'a {\n  value: oklch(0% 0.2 3deg);\n  space: oklch;\n  channels: 0% 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/chroma/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 0.5 3deg));\n",
  },
  {
    name: 'unitless/chroma/above_range/output.css',
    data: 'a {\n  value: oklch(1% 0.5 3deg);\n  space: oklch;\n  channels: 1% 0.5 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/chroma/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% -0.1 3deg));\n",
  },
  {
    name: 'unitless/chroma/below_range/output.css',
    data: 'a {\n  value: oklch(1% 0 3deg);\n  space: oklch;\n  channels: 1% 0 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/chroma/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% calc(infinity) 3deg));\n",
  },
  {
    name: 'unitless/chroma/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: oklch(1% calc(infinity) 3deg);\n  space: oklch;\n  channels: 1% calc(infinity) 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/chroma/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% calc(-infinity) 3deg));\n",
  },
  {
    name: 'unitless/chroma/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: oklch(1% 0 3deg);\n  space: oklch;\n  channels: 1% 0 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/chroma/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% calc(NaN) 3deg));\n",
  },
  {
    name: 'unitless/chroma/degenerate/nan/output.css',
    data: 'a {\n  value: oklch(1% 0 3deg);\n  space: oklch;\n  channels: 1% 0 3deg / 1;\n}\n',
  },
  {
    name: 'unitless/hue/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 0.2 361deg));\n",
  },
  {
    name: 'unitless/hue/above_range/output.css',
    data: 'a {\n  value: oklch(1% 0.2 1deg);\n  space: oklch;\n  channels: 1% 0.2 1deg / 1;\n}\n',
  },
  {
    name: 'unitless/hue/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 0.2 -1deg));\n",
  },
  {
    name: 'unitless/hue/below_range/output.css',
    data: 'a {\n  value: oklch(1% 0.2 359deg);\n  space: oklch;\n  channels: 1% 0.2 359deg / 1;\n}\n',
  },
  {
    name: 'unitless/hue/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 2 calc(infinity)));\n",
  },
  {
    name: 'unitless/hue/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: oklch(1% 2 calc(NaN * 1deg));\n  space: oklch;\n  channels: 1% 2 calc(NaN * 1deg) / 1;\n}\n',
  },
  {
    name: 'unitless/hue/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 2 calc(-infinity)));\n",
  },
  {
    name: 'unitless/hue/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: oklch(1% 2 calc(NaN * 1deg));\n  space: oklch;\n  channels: 1% 2 calc(NaN * 1deg) / 1;\n}\n',
  },
  {
    name: 'unitless/hue/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 2 calc(NaN)));\n",
  },
  {
    name: 'unitless/hue/degenerate/nan/output.css',
    data: 'a {\n  value: oklch(1% 2 calc(NaN * 1deg));\n  space: oklch;\n  channels: 1% 2 calc(NaN * 1deg) / 1;\n}\n',
  },
  {
    name: 'percent/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 2% 3deg));\n",
  },
  {
    name: 'percent/in_range/output.css',
    data: 'a {\n  value: oklch(1% 0.008 3deg);\n  space: oklch;\n  channels: 1% 0.008 3deg / 1;\n}\n',
  },
  {
    name: 'percent/lightness/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(110% 0.2 3deg));\n",
  },
  {
    name: 'percent/lightness/above_range/output.css',
    data: 'a {\n  value: oklch(100% 0.2 3deg);\n  space: oklch;\n  channels: 100% 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'percent/lightness/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(-1% 0.2 3deg));\n",
  },
  {
    name: 'percent/lightness/below_range/output.css',
    data: 'a {\n  value: oklch(0% 0.2 3deg);\n  space: oklch;\n  channels: 0% 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'percent/chroma/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 101% 3deg));\n",
  },
  {
    name: 'percent/chroma/above_range/output.css',
    data: 'a {\n  value: oklch(1% 0.404 3deg);\n  space: oklch;\n  channels: 1% 0.404 3deg / 1;\n}\n',
  },
  {
    name: 'percent/chroma/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% -1% 3deg));\n",
  },
  {
    name: 'percent/chroma/below_range/output.css',
    data: 'a {\n  value: oklch(1% 0 3deg);\n  space: oklch;\n  channels: 1% 0 3deg / 1;\n}\n',
  },
  {
    name: 'none/lightness/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(none 0.2 3deg));\n",
  },
  {
    name: 'none/lightness/output.css',
    data: 'a {\n  value: oklch(none 0.2 3deg);\n  space: oklch;\n  channels: none 0.2 3deg / 1;\n}\n',
  },
  {
    name: 'none/chroma/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% none 3deg));\n",
  },
  {
    name: 'none/chroma/output.css',
    data: 'a {\n  value: oklch(1% none 3deg);\n  space: oklch;\n  channels: 1% none 3deg / 1;\n}\n',
  },
  {
    name: 'none/hue/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch(1% 0.2 none));\n",
  },
  {
    name: 'none/hue/output.css',
    data: 'a {\n  value: oklch(1% 0.2 none);\n  space: oklch;\n  channels: 1% 0.2 none / 1;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklch($channels: 1% 0.2 3deg));\n",
  },
  {
    name: 'named/output.css',
    data: 'a {\n  value: oklch(1% 0.2 3deg);\n  space: oklch;\n  channels: 1% 0.2 3deg / 1;\n}\n',
  },
]
