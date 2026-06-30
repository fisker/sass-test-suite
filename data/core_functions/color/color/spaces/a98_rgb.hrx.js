export default [
  {
    name: 'unitless/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 0.2 0.3));\n",
  },
  {
    name: 'unitless/in_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 0.2 0.3);\n  space: a98-rgb;\n  channels: 0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/red/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 1.1 0.2 0.3));\n",
  },
  {
    name: 'unitless/red/above_range/output.css',
    data: 'a {\n  value: color(a98-rgb 1.1 0.2 0.3);\n  space: a98-rgb;\n  channels: 1.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/red/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb -0.1 0.2 0.3));\n",
  },
  {
    name: 'unitless/red/below_range/output.css',
    data: 'a {\n  value: color(a98-rgb -0.1 0.2 0.3);\n  space: a98-rgb;\n  channels: -0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/green/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 1.2 0.3));\n",
  },
  {
    name: 'unitless/green/above_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 1.2 0.3);\n  space: a98-rgb;\n  channels: 0.1 1.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/green/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 -0.2 0.3));\n",
  },
  {
    name: 'unitless/green/below_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 -0.2 0.3);\n  space: a98-rgb;\n  channels: 0.1 -0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/blue/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 0.2 1.3));\n",
  },
  {
    name: 'unitless/blue/above_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 0.2 1.3);\n  space: a98-rgb;\n  channels: 0.1 0.2 1.3 / 1;\n}\n',
  },
  {
    name: 'unitless/blue/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 0.2 -0.3));\n",
  },
  {
    name: 'unitless/blue/below_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 0.2 -0.3);\n  space: a98-rgb;\n  channels: 0.1 0.2 -0.3 / 1;\n}\n',
  },
  {
    name: 'percent/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 10% 20% 30%));\n",
  },
  {
    name: 'percent/in_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 0.2 0.3);\n  space: a98-rgb;\n  channels: 0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/red/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 110% 0.2 0.3));\n",
  },
  {
    name: 'percent/red/above_range/output.css',
    data: 'a {\n  value: color(a98-rgb 1.1 0.2 0.3);\n  space: a98-rgb;\n  channels: 1.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/red/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb -10% 0.2 0.3));\n",
  },
  {
    name: 'percent/red/below_range/output.css',
    data: 'a {\n  value: color(a98-rgb -0.1 0.2 0.3);\n  space: a98-rgb;\n  channels: -0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/green/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 120% 0.3));\n",
  },
  {
    name: 'percent/green/above_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 1.2 0.3);\n  space: a98-rgb;\n  channels: 0.1 1.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/green/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 -20% 0.3));\n",
  },
  {
    name: 'percent/green/below_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 -0.2 0.3);\n  space: a98-rgb;\n  channels: 0.1 -0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/blue/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 0.2 130%));\n",
  },
  {
    name: 'percent/blue/above_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 0.2 1.3);\n  space: a98-rgb;\n  channels: 0.1 0.2 1.3 / 1;\n}\n',
  },
  {
    name: 'percent/blue/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(a98-rgb 0.1 0.2 -30%));\n",
  },
  {
    name: 'percent/blue/below_range/output.css',
    data: 'a {\n  value: color(a98-rgb 0.1 0.2 -0.3);\n  space: a98-rgb;\n  channels: 0.1 0.2 -0.3 / 1;\n}\n',
  },
]
