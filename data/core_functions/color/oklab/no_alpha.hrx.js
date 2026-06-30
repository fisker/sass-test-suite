// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/oklab/no_alpha.hrx

export default [
  {
    name: 'unitless/ab/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 -3));\n",
  },
  {
    name: 'unitless/ab/in_range/output.css',
    data: 'a {\n  value: oklab(1% 2 -3);\n  space: oklab;\n  channels: 1% 2 -3 / 1;\n}\n',
  },
  {
    name: 'unitless/ab/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 126 300));\n",
  },
  {
    name: 'unitless/ab/above_range/output.css',
    data: 'a {\n  value: oklab(1% 126 300);\n  space: oklab;\n  channels: 1% 126 300 / 1;\n}\n',
  },
  {
    name: 'unitless/ab/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% -126 -300));\n",
  },
  {
    name: 'unitless/ab/below_range/output.css',
    data: 'a {\n  value: oklab(1% -126 -300);\n  space: oklab;\n  channels: 1% -126 -300 / 1;\n}\n',
  },
  {
    name: 'unitless/a/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% calc(infinity) -300));\n",
  },
  {
    name: 'unitless/a/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: oklab(1% calc(infinity) -300);\n  space: oklab;\n  channels: 1% calc(infinity) -300 / 1;\n}\n',
  },
  {
    name: 'unitless/a/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% calc(-infinity) -300));\n",
  },
  {
    name: 'unitless/a/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: oklab(1% calc(-infinity) -300);\n  space: oklab;\n  channels: 1% calc(-infinity) -300 / 1;\n}\n',
  },
  {
    name: 'unitless/a/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% calc(NaN) -300));\n",
  },
  {
    name: 'unitless/a/degenerate/nan/output.css',
    data: 'a {\n  value: oklab(1% calc(NaN) -300);\n  space: oklab;\n  channels: 1% calc(NaN) -300 / 1;\n}\n',
  },
  {
    name: 'unitless/b/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 calc(infinity)));\n",
  },
  {
    name: 'unitless/b/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: oklab(1% 2 calc(infinity));\n  space: oklab;\n  channels: 1% 2 calc(infinity) / 1;\n}\n',
  },
  {
    name: 'unitless/b/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 calc(-infinity)));\n",
  },
  {
    name: 'unitless/b/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: oklab(1% 2 calc(-infinity));\n  space: oklab;\n  channels: 1% 2 calc(-infinity) / 1;\n}\n',
  },
  {
    name: 'unitless/b/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 calc(NaN)));\n",
  },
  {
    name: 'unitless/b/degenerate/nan/output.css',
    data: 'a {\n  value: oklab(1% 2 calc(NaN));\n  space: oklab;\n  channels: 1% 2 calc(NaN) / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(0.1 2 -3));\n",
  },
  {
    name: 'unitless/lightness/in_range/output.css',
    data: 'a {\n  value: oklab(10% 2 -3);\n  space: oklab;\n  channels: 10% 2 -3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1.1 2 3));\n",
  },
  {
    name: 'unitless/lightness/above_range/output.css',
    data: 'a {\n  value: oklab(100% 2 3);\n  space: oklab;\n  channels: 100% 2 3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(-0.1 2 3));\n",
  },
  {
    name: 'unitless/lightness/below_range/output.css',
    data: 'a {\n  value: oklab(0% 2 3);\n  space: oklab;\n  channels: 0% 2 3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(calc(infinity) 2 -3));\n",
  },
  {
    name: 'unitless/lightness/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: oklab(100% 2 -3);\n  space: oklab;\n  channels: 100% 2 -3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(calc(-infinity) 2 -3));\n",
  },
  {
    name: 'unitless/lightness/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: oklab(0% 2 -3);\n  space: oklab;\n  channels: 0% 2 -3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(calc(NaN) 2 -3));\n",
  },
  {
    name: 'unitless/lightness/degenerate/nan/output.css',
    data: 'a {\n  value: oklab(0% 2 -3);\n  space: oklab;\n  channels: 0% 2 -3 / 1;\n}\n',
  },
  {
    name: 'percent/ab/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2% -3%));\n",
  },
  {
    name: 'percent/ab/in_range/output.css',
    data: 'a {\n  value: oklab(1% 0.008 -0.012);\n  space: oklab;\n  channels: 1% 0.008 -0.012 / 1;\n}\n',
  },
  {
    name: 'percent/ab/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 101% 150%));\n",
  },
  {
    name: 'percent/ab/above_range/output.css',
    data: 'a {\n  value: oklab(1% 0.404 0.6);\n  space: oklab;\n  channels: 1% 0.404 0.6 / 1;\n}\n',
  },
  {
    name: 'percent/ab/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% -101% -150%));\n",
  },
  {
    name: 'percent/ab/below_range/output.css',
    data: 'a {\n  value: oklab(1% -0.404 -0.6);\n  space: oklab;\n  channels: 1% -0.404 -0.6 / 1;\n}\n',
  },
  {
    name: 'percent/lightness/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2% -3%));\n",
  },
  {
    name: 'percent/lightness/in_range/output.css',
    data: 'a {\n  value: oklab(1% 0.008 -0.012);\n  space: oklab;\n  channels: 1% 0.008 -0.012 / 1;\n}\n',
  },
  {
    name: 'percent/lightness/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(110% 2 3));\n",
  },
  {
    name: 'percent/lightness/above_range/output.css',
    data: 'a {\n  value: oklab(100% 2 3);\n  space: oklab;\n  channels: 100% 2 3 / 1;\n}\n',
  },
  {
    name: 'percent/lightness/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(-1% 2 3));\n",
  },
  {
    name: 'percent/lightness/below_range/output.css',
    data: 'a {\n  value: oklab(0% 2 3);\n  space: oklab;\n  channels: 0% 2 3 / 1;\n}\n',
  },
  {
    name: 'none/lightness/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(none 2 3));\n",
  },
  {
    name: 'none/lightness/output.css',
    data: 'a {\n  value: oklab(none 2 3);\n  space: oklab;\n  channels: none 2 3 / 1;\n}\n',
  },
  {
    name: 'none/a/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% none 3));\n",
  },
  {
    name: 'none/a/output.css',
    data: 'a {\n  value: oklab(1% none 3);\n  space: oklab;\n  channels: 1% none 3 / 1;\n}\n',
  },
  {
    name: 'none/b/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(1% 2 none));\n",
  },
  {
    name: 'none/b/output.css',
    data: 'a {\n  value: oklab(1% 2 none);\n  space: oklab;\n  channels: 1% 2 none / 1;\n}\n',
  },
  {
    name: 'relative_color/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab(from #aaa l a b));\n",
  },
  {
    name: 'relative_color/output.css',
    data: 'a {\n  value: oklab(from #aaa l a b);\n  type: string;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(oklab($channels: 1% 2 3));\n",
  },
  {
    name: 'named/output.css',
    data: 'a {\n  value: oklab(1% 2 3);\n  space: oklab;\n  channels: 1% 2 3 / 1;\n}\n',
  },
]
