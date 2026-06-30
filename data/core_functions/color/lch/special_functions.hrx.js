export default [
  {
    name: 'calculation/arg_1/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(calc(1px + 1%) 2 3deg));\n",
  },
  {
    name: 'calculation/arg_1/output.css',
    data: 'a {\n  value: lch(calc(1px + 1%) 2 3deg);\n  type: string;\n}\n',
  },
  {
    name: 'calculation/arg_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% calc(1px + 1%) 3deg));\n",
  },
  {
    name: 'calculation/arg_2/output.css',
    data: 'a {\n  value: lch(1% calc(1px + 1%) 3deg);\n  type: string;\n}\n',
  },
  {
    name: 'calculation/arg_3/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 calc(1px + 1%)));\n",
  },
  {
    name: 'calculation/arg_3/output.css',
    data: 'a {\n  value: lch(1% 2 calc(1px + 1%));\n  type: string;\n}\n',
  },
  {
    name: 'calculation/arg_4/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / calc(1px + 1%)));\n",
  },
  {
    name: 'calculation/arg_4/output.css',
    data: 'a {\n  value: lch(1% 2 3deg/calc(1px + 1%));\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_1/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(var(--foo) 2 3deg));\n",
  },
  {
    name: 'var/arg_1/output.css',
    data: 'a {\n  value: lch(var(--foo) 2 3deg);\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% var(--foo) 3deg));\n",
  },
  {
    name: 'var/arg_2/output.css',
    data: 'a {\n  value: lch(1% var(--foo) 3deg);\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_3/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 var(--foo)));\n",
  },
  {
    name: 'var/arg_3/output.css',
    data: 'a {\n  value: lch(1% 2 var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_4/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% 2 3deg / var(--foo)));\n",
  },
  {
    name: 'var/arg_4/output.css',
    data: 'a {\n  value: lch(1% 2 3deg/var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/1_of_2/input.scss',
    data: "// var() is substituted before parsing, so it may contain multiple arguments.\n@use 'core_functions/color/utils';\n@include utils.inspect(lch(var(--foo) 2deg));\n",
  },
  {
    name: 'multi_argument_var/1_of_2/output.css',
    data: 'a {\n  value: lch(var(--foo) 2deg);\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/2_of_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(1% var(--foo)));\n",
  },
  {
    name: 'multi_argument_var/2_of_2/output.css',
    data: 'a {\n  value: lch(1% var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/1_of_1/no_alpha/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(var(--foo)));\n",
  },
  {
    name: 'multi_argument_var/1_of_1/no_alpha/output.css',
    data: 'a {\n  value: lch(var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/1_of_1/alpha/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lch(var(--foo) / 0.4));\n",
  },
  {
    name: 'multi_argument_var/1_of_1/alpha/output.css',
    data: 'a {\n  value: lch(var(--foo)/0.4);\n  type: string;\n}\n',
  },
]
