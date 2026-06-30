export default [
  {
    name: 'calculation/arg_1/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb calc(1px + 1%) 0.2 0.3));\n",
  },
  {
    name: 'calculation/arg_1/output.css',
    data: 'a {\n  value: color(srgb calc(1px + 1%) 0.2 0.3);\n  type: string;\n}\n',
  },
  {
    name: 'calculation/arg_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 calc(1px + 1%) 0.3));\n",
  },
  {
    name: 'calculation/arg_2/output.css',
    data: 'a {\n  value: color(srgb 0.1 calc(1px + 1%) 0.3);\n  type: string;\n}\n',
  },
  {
    name: 'calculation/arg_3/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 calc(1px + 1%)));\n",
  },
  {
    name: 'calculation/arg_3/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 calc(1px + 1%));\n  type: string;\n}\n',
  },
  {
    name: 'calculation/arg_4/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 0.3 / calc(1px + 1%)));\n",
  },
  {
    name: 'calculation/arg_4/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3/calc(1px + 1%));\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_1/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb var(--foo) 0.2 0.3));\n",
  },
  {
    name: 'var/arg_1/output.css',
    data: 'a {\n  value: color(srgb var(--foo) 0.2 0.3);\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 var(--foo) 0.3));\n",
  },
  {
    name: 'var/arg_2/output.css',
    data: 'a {\n  value: color(srgb 0.1 var(--foo) 0.3);\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_3/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 var(--foo)));\n",
  },
  {
    name: 'var/arg_3/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_4/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 0.2 0.3 / var(--foo)));\n",
  },
  {
    name: 'var/arg_4/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3/var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/1_of_2/input.scss',
    data: "// var() is substituted before parsing, so it may contain multiple arguments.\n@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb var(--foo) 0.3));\n",
  },
  {
    name: 'multi_argument_var/1_of_2/output.css',
    data: 'a {\n  value: color(srgb var(--foo) 0.3);\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/2_of_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 var(--foo)));\n",
  },
  {
    name: 'multi_argument_var/2_of_2/output.css',
    data: 'a {\n  value: color(srgb 0.1 var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/1_of_1/no_alpha/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb var(--foo)));\n",
  },
  {
    name: 'multi_argument_var/1_of_1/no_alpha/output.css',
    data: 'a {\n  value: color(srgb var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/1_of_1/alpha/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb var(--foo) / 0.4));\n",
  },
  {
    name: 'multi_argument_var/1_of_1/alpha/output.css',
    data: 'a {\n  value: color(srgb var(--foo)/0.4);\n  type: string;\n}\n',
  },
]
