export default [
  {
    name: 'calc/string/arg_1/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(string.unquote("calc(1%)") 2 3));\n',
  },
  {
    name: 'calc/string/arg_1/output.css',
    data: 'a {\n  value: lab(calc(1%) 2 3);\n  type: string;\n}\n',
  },
  {
    name: 'calc/string/arg_2/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(1% string.unquote("calc(2)") 3));\n',
  },
  {
    name: 'calc/string/arg_2/output.css',
    data: 'a {\n  value: lab(1% calc(2) 3);\n  type: string;\n}\n',
  },
  {
    name: 'calc/string/arg_3/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(1% 2 string.unquote("calc(3)")));\n',
  },
  {
    name: 'calc/string/arg_3/output.css',
    data: 'a {\n  value: lab(1% 2 calc(3));\n  type: string;\n}\n',
  },
  {
    name: 'calc/calculation/arg_1/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(calc(1px + 1%) 2 3));\n",
  },
  {
    name: 'calc/calculation/arg_1/output.css',
    data: 'a {\n  value: lab(calc(1px + 1%) 2 3);\n  type: string;\n}\n',
  },
  {
    name: 'calc/calculation/arg_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% calc(1px + 1%) 3));\n",
  },
  {
    name: 'calc/calculation/arg_2/output.css',
    data: 'a {\n  value: lab(1% calc(1px + 1%) 3);\n  type: string;\n}\n',
  },
  {
    name: 'calc/calculation/arg_3/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 calc(1px + 1%)));\n",
  },
  {
    name: 'calc/calculation/arg_3/output.css',
    data: 'a {\n  value: lab(1% 2 calc(1px + 1%));\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_1/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(var(--foo) 2 3));\n",
  },
  {
    name: 'var/arg_1/output.css',
    data: 'a {\n  value: lab(var(--foo) 2 3);\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% var(--foo) 3));\n",
  },
  {
    name: 'var/arg_2/output.css',
    data: 'a {\n  value: lab(1% var(--foo) 3);\n  type: string;\n}\n',
  },
  {
    name: 'var/arg_3/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 var(--foo)));\n",
  },
  {
    name: 'var/arg_3/output.css',
    data: 'a {\n  value: lab(1% 2 var(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'env/arg_1/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(env(--foo) 2 3));\n",
  },
  {
    name: 'env/arg_1/output.css',
    data: 'a {\n  value: lab(env(--foo) 2 3);\n  type: string;\n}\n',
  },
  {
    name: 'env/arg_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% env(--foo) 3));\n",
  },
  {
    name: 'env/arg_2/output.css',
    data: 'a {\n  value: lab(1% env(--foo) 3);\n  type: string;\n}\n',
  },
  {
    name: 'env/arg_3/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 env(--foo)));\n",
  },
  {
    name: 'env/arg_3/output.css',
    data: 'a {\n  value: lab(1% 2 env(--foo));\n  type: string;\n}\n',
  },
  {
    name: 'attr/arg_1/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(attr(c, %) 2 3));\n",
  },
  {
    name: 'attr/arg_1/output.css',
    data: 'a {\n  value: lab(attr(c, %) 2 3);\n  type: string;\n}\n',
  },
  {
    name: 'attr/arg_2/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% attr(c, %) 3));\n",
  },
  {
    name: 'attr/arg_2/output.css',
    data: 'a {\n  value: lab(1% attr(c, %) 3);\n  type: string;\n}\n',
  },
  {
    name: 'attr/arg_3/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(lab(1% 2 attr(c, %)));\n",
  },
  {
    name: 'attr/arg_3/output.css',
    data: 'a {\n  value: lab(1% 2 attr(c, %));\n  type: string;\n}\n',
  },
  {
    name: 'min/string/arg_1/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(string.unquote("min(1%)") 2 3));\n',
  },
  {
    name: 'min/string/arg_1/output.css',
    data: 'a {\n  value: lab(min(1%) 2 3);\n  type: string;\n}\n',
  },
  {
    name: 'min/string/arg_2/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(1% string.unquote("min(2)") 3));\n',
  },
  {
    name: 'min/string/arg_2/output.css',
    data: 'a {\n  value: lab(1% min(2) 3);\n  type: string;\n}\n',
  },
  {
    name: 'min/string/arg_3/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(1% 2 string.unquote("min(3)")));\n',
  },
  {
    name: 'min/string/arg_3/output.css',
    data: 'a {\n  value: lab(1% 2 min(3));\n  type: string;\n}\n',
  },
  {
    name: 'max/string/arg_1/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(string.unquote("max(1%)") 2 3));\n',
  },
  {
    name: 'max/string/arg_1/output.css',
    data: 'a {\n  value: lab(max(1%) 2 3);\n  type: string;\n}\n',
  },
  {
    name: 'max/string/arg_2/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(1% string.unquote("max(2)") 3));\n',
  },
  {
    name: 'max/string/arg_2/output.css',
    data: 'a {\n  value: lab(1% max(2) 3);\n  type: string;\n}\n',
  },
  {
    name: 'max/string/arg_3/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(1% 2 string.unquote("max(3)")));\n',
  },
  {
    name: 'max/string/arg_3/output.css',
    data: 'a {\n  value: lab(1% 2 max(3));\n  type: string;\n}\n',
  },
  {
    name: 'clamp/string/arg_1/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(string.unquote("clamp(1%, 2, 3)") 2 3));\n',
  },
  {
    name: 'clamp/string/arg_1/output.css',
    data: 'a {\n  value: lab(clamp(1%, 2, 3) 2 3);\n  type: string;\n}\n',
  },
  {
    name: 'clamp/string/arg_2/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(1% string.unquote("clamp(2, 3, 4)") 3));\n',
  },
  {
    name: 'clamp/string/arg_2/output.css',
    data: 'a {\n  value: lab(1% clamp(2, 3, 4) 3);\n  type: string;\n}\n',
  },
  {
    name: 'clamp/string/arg_3/input.scss',
    data: '@use "sass:string";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(1% 2 string.unquote("clamp(3, 4, 5)")));\n',
  },
  {
    name: 'clamp/string/arg_3/output.css',
    data: 'a {\n  value: lab(1% 2 clamp(3, 4, 5));\n  type: string;\n}\n',
  },
  {
    name: 'multi_argument_var/1_of_2/input.scss',
    data: '// var() is substituted before parsing, so it may contain multiple arguments.\na {b: lab(var(--foo) 2)}\n',
  },
  {
    name: 'multi_argument_var/1_of_2/output.css',
    data: 'a {\n  b: lab(var(--foo) 2);\n}\n',
  },
  {
    name: 'multi_argument_var/2_of_2/input.scss',
    data: 'a {b: lab(1% var(--foo))}\n',
  },
  {
    name: 'multi_argument_var/2_of_2/output.css',
    data: 'a {\n  b: lab(1% var(--foo));\n}\n',
  },
  {
    name: 'multi_argument_var/1_of_1/input.scss',
    data: 'a {b: lab(var(--foo))}\n',
  },
  {
    name: 'multi_argument_var/1_of_1/output.css',
    data: 'a {\n  b: lab(var(--foo));\n}\n',
  },
]
