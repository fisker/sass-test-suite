export default [
  {
    name: 'unitless/ab/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 -3));\n",
  },
  {
    name: 'unitless/ab/in_range/output.css',
    data: 'a {\n  value: lab(1% 2 -3);\n  space: lab;\n  channels: 1% 2 -3 / 1;\n}\n',
  },
  {
    name: 'unitless/ab/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 126 300));\n",
  },
  {
    name: 'unitless/ab/above_range/output.css',
    data: 'a {\n  value: lab(1% 126 300);\n  space: lab;\n  channels: 1% 126 300 / 1;\n}\n',
  },
  {
    name: 'unitless/ab/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% -126 -300));\n",
  },
  {
    name: 'unitless/ab/below_range/output.css',
    data: 'a {\n  value: lab(1% -126 -300);\n  space: lab;\n  channels: 1% -126 -300 / 1;\n}\n',
  },
  {
    name: 'unitless/a/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% calc(infinity) -3));\n",
  },
  {
    name: 'unitless/a/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: lab(1% calc(infinity) -3);\n  space: lab;\n  channels: 1% calc(infinity) -3 / 1;\n}\n',
  },
  {
    name: 'unitless/a/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% calc(-infinity) -3));\n",
  },
  {
    name: 'unitless/a/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: lab(1% calc(-infinity) -3);\n  space: lab;\n  channels: 1% calc(-infinity) -3 / 1;\n}\n',
  },
  {
    name: 'unitless/a/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% calc(NaN) -3));\n",
  },
  {
    name: 'unitless/a/degenerate/nan/output.css',
    data: 'a {\n  value: lab(1% calc(NaN) -3);\n  space: lab;\n  channels: 1% calc(NaN) -3 / 1;\n}\n',
  },
  {
    name: 'unitless/b/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 calc(infinity)));\n",
  },
  {
    name: 'unitless/b/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: lab(1% 2 calc(infinity));\n  space: lab;\n  channels: 1% 2 calc(infinity) / 1;\n}\n',
  },
  {
    name: 'unitless/b/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 calc(-infinity)));\n",
  },
  {
    name: 'unitless/b/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: lab(1% 2 calc(-infinity));\n  space: lab;\n  channels: 1% 2 calc(-infinity) / 1;\n}\n',
  },
  {
    name: 'unitless/b/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 calc(NaN)));\n",
  },
  {
    name: 'unitless/b/degenerate/nan/output.css',
    data: 'a {\n  value: lab(1% 2 calc(NaN));\n  space: lab;\n  channels: 1% 2 calc(NaN) / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(10 2 -3));\n",
  },
  {
    name: 'unitless/lightness/in_range/output.css',
    data: 'a {\n  value: lab(10% 2 -3);\n  space: lab;\n  channels: 10% 2 -3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(101 2 3));\n",
  },
  {
    name: 'unitless/lightness/above_range/output.css',
    data: 'a {\n  value: lab(100% 2 3);\n  space: lab;\n  channels: 100% 2 3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(-1 2 3));\n",
  },
  {
    name: 'unitless/lightness/below_range/output.css',
    data: 'a {\n  value: lab(0% 2 3);\n  space: lab;\n  channels: 0% 2 3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/positive_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(calc(infinity) 2 -3));\n",
  },
  {
    name: 'unitless/lightness/degenerate/positive_infinity/output.css',
    data: 'a {\n  value: lab(100% 2 -3);\n  space: lab;\n  channels: 100% 2 -3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/negative_infinity/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(calc(-infinity) 2 -3));\n",
  },
  {
    name: 'unitless/lightness/degenerate/negative_infinity/output.css',
    data: 'a {\n  value: lab(0% 2 -3);\n  space: lab;\n  channels: 0% 2 -3 / 1;\n}\n',
  },
  {
    name: 'unitless/lightness/degenerate/nan/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(calc(NaN) 2 -3));\n",
  },
  {
    name: 'unitless/lightness/degenerate/nan/output.css',
    data: 'a {\n  value: lab(0% 2 -3);\n  space: lab;\n  channels: 0% 2 -3 / 1;\n}\n',
  },
  {
    name: 'percent/ab/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2% -3%));\n",
  },
  {
    name: 'percent/ab/in_range/output.css',
    data: 'a {\n  value: lab(1% 2.5 -3.75);\n  space: lab;\n  channels: 1% 2.5 -3.75 / 1;\n}\n',
  },
  {
    name: 'percent/ab/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 101% 150%));\n",
  },
  {
    name: 'percent/ab/above_range/output.css',
    data: 'a {\n  value: lab(1% 126.25 187.5);\n  space: lab;\n  channels: 1% 126.25 187.5 / 1;\n}\n',
  },
  {
    name: 'percent/ab/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% -101% -150%));\n",
  },
  {
    name: 'percent/ab/below_range/output.css',
    data: 'a {\n  value: lab(1% -126.25 -187.5);\n  space: lab;\n  channels: 1% -126.25 -187.5 / 1;\n}\n',
  },
  {
    name: 'percent/lightness/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2% -3%));\n",
  },
  {
    name: 'percent/lightness/in_range/output.css',
    data: 'a {\n  value: lab(1% 2.5 -3.75);\n  space: lab;\n  channels: 1% 2.5 -3.75 / 1;\n}\n',
  },
  {
    name: 'percent/lightness/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(110% 2 3));\n",
  },
  {
    name: 'percent/lightness/above_range/output.css',
    data: 'a {\n  value: lab(100% 2 3);\n  space: lab;\n  channels: 100% 2 3 / 1;\n}\n',
  },
  {
    name: 'percent/lightness/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(-1% 2 3));\n",
  },
  {
    name: 'percent/lightness/below_range/output.css',
    data: 'a {\n  value: lab(0% 2 3);\n  space: lab;\n  channels: 0% 2 3 / 1;\n}\n',
  },
  {
    name: 'none/lightness/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(none 2 3));\n",
  },
  {
    name: 'none/lightness/output.css',
    data: 'a {\n  value: lab(none 2 3);\n  space: lab;\n  channels: none 2 3 / 1;\n}\n',
  },
  {
    name: 'none/a/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% none 3));\n",
  },
  {
    name: 'none/a/output.css',
    data: 'a {\n  value: lab(1% none 3);\n  space: lab;\n  channels: 1% none 3 / 1;\n}\n',
  },
  {
    name: 'none/b/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 none));\n",
  },
  {
    name: 'none/b/output.css',
    data: 'a {\n  value: lab(1% 2 none);\n  space: lab;\n  channels: 1% 2 none / 1;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab($channels: 1% 2 3));\n",
  },
  {
    name: 'named/output.css',
    data: 'a {\n  value: lab(1% 2 3);\n  space: lab;\n  channels: 1% 2 3 / 1;\n}\n',
  },
]
