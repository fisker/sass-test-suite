// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/color/spaces/xyz_d50.hrx

export default [
  {
    name: 'unitless/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 0.2 0.3));\n",
  },
  {
    name: 'unitless/in_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 0.2 0.3);\n  space: xyz-d50;\n  channels: 0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/x/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 1.1 0.2 0.3));\n",
  },
  {
    name: 'unitless/x/above_range/output.css',
    data: 'a {\n  value: color(xyz-d50 1.1 0.2 0.3);\n  space: xyz-d50;\n  channels: 1.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/x/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 -0.1 0.2 0.3));\n",
  },
  {
    name: 'unitless/x/below_range/output.css',
    data: 'a {\n  value: color(xyz-d50 -0.1 0.2 0.3);\n  space: xyz-d50;\n  channels: -0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/y/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 1.2 0.3));\n",
  },
  {
    name: 'unitless/y/above_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 1.2 0.3);\n  space: xyz-d50;\n  channels: 0.1 1.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/y/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 -0.2 0.3));\n",
  },
  {
    name: 'unitless/y/below_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 -0.2 0.3);\n  space: xyz-d50;\n  channels: 0.1 -0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'unitless/z/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 0.2 1.3));\n",
  },
  {
    name: 'unitless/z/above_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 0.2 1.3);\n  space: xyz-d50;\n  channels: 0.1 0.2 1.3 / 1;\n}\n',
  },
  {
    name: 'unitless/z/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 0.2 -0.3));\n",
  },
  {
    name: 'unitless/z/below_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 0.2 -0.3);\n  space: xyz-d50;\n  channels: 0.1 0.2 -0.3 / 1;\n}\n',
  },
  {
    name: 'percent/in_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 10% 20% 30%));\n",
  },
  {
    name: 'percent/in_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 0.2 0.3);\n  space: xyz-d50;\n  channels: 0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/x/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 110% 0.2 0.3));\n",
  },
  {
    name: 'percent/x/above_range/output.css',
    data: 'a {\n  value: color(xyz-d50 1.1 0.2 0.3);\n  space: xyz-d50;\n  channels: 1.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/x/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 -10% 0.2 0.3));\n",
  },
  {
    name: 'percent/x/below_range/output.css',
    data: 'a {\n  value: color(xyz-d50 -0.1 0.2 0.3);\n  space: xyz-d50;\n  channels: -0.1 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/y/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 120% 0.3));\n",
  },
  {
    name: 'percent/y/above_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 1.2 0.3);\n  space: xyz-d50;\n  channels: 0.1 1.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/y/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 -20% 0.3));\n",
  },
  {
    name: 'percent/y/below_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 -0.2 0.3);\n  space: xyz-d50;\n  channels: 0.1 -0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'percent/z/above_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 0.2 130%));\n",
  },
  {
    name: 'percent/z/above_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 0.2 1.3);\n  space: xyz-d50;\n  channels: 0.1 0.2 1.3 / 1;\n}\n',
  },
  {
    name: 'percent/z/below_range/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(xyz-d50 0.1 0.2 -30%));\n",
  },
  {
    name: 'percent/z/below_range/output.css',
    data: 'a {\n  value: color(xyz-d50 0.1 0.2 -0.3);\n  space: xyz-d50;\n  channels: 0.1 0.2 -0.3 / 1;\n}\n',
  },
]
