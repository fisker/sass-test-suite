// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/four_args/special_functions.hrx

export default [
  {
    name: 'calc/string/arg_1/input.scss',
    data: '@use "sass:string";\na {b: hsl(string.unquote("calc(1)"), 2%, 3%, 0.4)}\n',
  },
  {
    name: 'calc/string/arg_1/output.css',
    data: 'a {\n  b: hsl(calc(1), 2%, 3%, 0.4);\n}\n',
  },
  {
    name: 'calc/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, string.unquote("calc(2%)"), 3%, 0.4)}\n',
  },
  {
    name: 'calc/string/arg_2/output.css',
    data: 'a {\n  b: hsl(1, calc(2%), 3%, 0.4);\n}\n',
  },
  {
    name: 'calc/string/arg_3/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, string.unquote("calc(3%)"), 0.4)}\n',
  },
  {
    name: 'calc/string/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, calc(3%), 0.4);\n}\n',
  },
  {
    name: 'calc/string/arg_4/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, 3%, string.unquote("calc(0.4)"))}\n',
  },
  {
    name: 'calc/string/arg_4/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, calc(0.4));\n}\n',
  },
  {
    name: 'calc/calculation/arg_1/input.scss',
    data: 'a {b: hsl(calc(1px + 1%), 2%, 3%, 0.4)}\n',
  },
  {
    name: 'calc/calculation/arg_1/output.css',
    data: 'a {\n  b: hsl(calc(1px + 1%), 2%, 3%, 0.4);\n}\n',
  },
  {
    name: 'calc/calculation/arg_2/input.scss',
    data: 'a {b: hsl(1, calc(1px + 1%), 3%, 0.4)}\n',
  },
  {
    name: 'calc/calculation/arg_2/output.css',
    data: 'a {\n  b: hsl(1, calc(1px + 1%), 3%, 0.4);\n}\n',
  },
  {
    name: 'calc/calculation/arg_3/input.scss',
    data: 'a {b: hsl(1, 2%, calc(1px + 1%), 0.4)}\n',
  },
  {
    name: 'calc/calculation/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, calc(1px + 1%), 0.4);\n}\n',
  },
  {
    name: 'calc/calculation/arg_4/input.scss',
    data: 'a {b: hsl(1, 2%, 3%, calc(1px + 1%))}\n',
  },
  {
    name: 'calc/calculation/arg_4/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, calc(1px + 1%));\n}\n',
  },
  {
    name: 'var/arg_1/input.scss',
    data: 'a {b: hsl(var(--foo), 2%, 3%, 0.4)}\n',
  },
  {
    name: 'var/arg_1/output.css',
    data: 'a {\n  b: hsl(var(--foo), 2%, 3%, 0.4);\n}\n',
  },
  {
    name: 'var/arg_2/input.scss',
    data: 'a {b: hsl(1, var(--foo), 3%, 0.4)}\n',
  },
  {
    name: 'var/arg_2/output.css',
    data: 'a {\n  b: hsl(1, var(--foo), 3%, 0.4);\n}\n',
  },
  {
    name: 'var/arg_3/input.scss',
    data: 'a {b: hsl(1, 2%, var(--foo), 0.4)}\n',
  },
  {
    name: 'var/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, var(--foo), 0.4);\n}\n',
  },
  {
    name: 'var/arg_4/input.scss',
    data: 'a {b: hsl(1, 2%, 3%, var(--foo))}\n',
  },
  {
    name: 'var/arg_4/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, var(--foo));\n}\n',
  },
  {
    name: 'env/arg_1/input.scss',
    data: 'a {b: hsl(env(--foo), 2%, 3%, 0.4)}\n',
  },
  {
    name: 'env/arg_1/output.css',
    data: 'a {\n  b: hsl(env(--foo), 2%, 3%, 0.4);\n}\n',
  },
  {
    name: 'env/arg_2/input.scss',
    data: 'a {b: hsl(1, env(--foo), 3%, 0.4)}\n',
  },
  {
    name: 'env/arg_2/output.css',
    data: 'a {\n  b: hsl(1, env(--foo), 3%, 0.4);\n}\n',
  },
  {
    name: 'env/arg_3/input.scss',
    data: 'a {b: hsl(1, 2%, env(--foo), 0.4)}\n',
  },
  {
    name: 'env/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, env(--foo), 0.4);\n}\n',
  },
  {
    name: 'env/arg_4/input.scss',
    data: 'a {b: hsl(1, 2%, 3%, env(--foo))}\n',
  },
  {
    name: 'env/arg_4/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, env(--foo));\n}\n',
  },
  {
    name: 'attr/arg_1/input.scss',
    data: 'a {b: hsl(attr(c, %), 2%, 3%, 0.4)}\n',
  },
  {
    name: 'attr/arg_1/output.css',
    data: 'a {\n  b: hsl(attr(c, %), 2%, 3%, 0.4);\n}\n',
  },
  {
    name: 'attr/arg_2/input.scss',
    data: 'a {b: hsl(1, attr(c, %), 3%, 0.4)}\n',
  },
  {
    name: 'attr/arg_2/output.css',
    data: 'a {\n  b: hsl(1, attr(c, %), 3%, 0.4);\n}\n',
  },
  {
    name: 'attr/arg_3/input.scss',
    data: 'a {b: hsl(1, 2%, attr(c, %), 0.4)}\n',
  },
  {
    name: 'attr/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, attr(c, %), 0.4);\n}\n',
  },
  {
    name: 'attr/arg_4/input.scss',
    data: 'a {b: hsl(1, 2%, 3%, attr(c, %))}\n',
  },
  {
    name: 'attr/arg_4/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, attr(c, %));\n}\n',
  },
  {
    name: 'min/string/arg_1/input.scss',
    data: '@use "sass:string";\na {b: hsl(string.unquote("min(1)"), 2%, 3%, 0.4)}\n',
  },
  {
    name: 'min/string/arg_1/output.css',
    data: 'a {\n  b: hsl(min(1), 2%, 3%, 0.4);\n}\n',
  },
  {
    name: 'min/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, string.unquote("min(2%)"), 3%, 0.4)}\n',
  },
  {
    name: 'min/string/arg_2/output.css',
    data: 'a {\n  b: hsl(1, min(2%), 3%, 0.4);\n}\n',
  },
  {
    name: 'min/string/arg_3/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, string.unquote("min(3%)"), 0.4)}\n',
  },
  {
    name: 'min/string/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, min(3%), 0.4);\n}\n',
  },
  {
    name: 'min/string/arg_4/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, 3%, string.unquote("min(0.4)"))}\n',
  },
  {
    name: 'min/string/arg_4/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, min(0.4));\n}\n',
  },
  {
    name: 'max/string/arg_1/input.scss',
    data: '@use "sass:string";\na {b: hsl(string.unquote("max(1)"), 2%, 3%, 0.4)}\n',
  },
  {
    name: 'max/string/arg_1/output.css',
    data: 'a {\n  b: hsl(max(1), 2%, 3%, 0.4);\n}\n',
  },
  {
    name: 'max/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, string.unquote("max(2%)"), 3%, 0.4)}\n',
  },
  {
    name: 'max/string/arg_2/output.css',
    data: 'a {\n  b: hsl(1, max(2%), 3%, 0.4);\n}\n',
  },
  {
    name: 'max/string/arg_3/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, string.unquote("max(3%)"), 0.4)}\n',
  },
  {
    name: 'max/string/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, max(3%), 0.4);\n}\n',
  },
  {
    name: 'max/string/arg_4/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, 3%, string.unquote("max(0.4)"))}\n',
  },
  {
    name: 'max/string/arg_4/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, max(0.4));\n}\n',
  },
  {
    name: 'clamp/string/arg_1/input.scss',
    data: '@use "sass:string";\na {b: hsl(string.unquote("clamp(1, 2, 3)"), 2%, 3%, 0.4)}\n',
  },
  {
    name: 'clamp/string/arg_1/output.css',
    data: 'a {\n  b: hsl(clamp(1, 2, 3), 2%, 3%, 0.4);\n}\n',
  },
  {
    name: 'clamp/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, string.unquote("clamp(2%, 3%, 4%)"), 3%, 0.4)}\n',
  },
  {
    name: 'clamp/string/arg_2/output.css',
    data: 'a {\n  b: hsl(1, clamp(2%, 3%, 4%), 3%, 0.4);\n}\n',
  },
  {
    name: 'clamp/string/arg_3/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, string.unquote("clamp(3%, 4%, 5%)"), 0.4)}\n',
  },
  {
    name: 'clamp/string/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, clamp(3%, 4%, 5%), 0.4);\n}\n',
  },
  {
    name: 'clamp/string/arg_4/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, 3%, string.unquote("clamp(0.4, 0.5, 0.6)"))}\n',
  },
  {
    name: 'clamp/string/arg_4/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, clamp(0.4, 0.5, 0.6));\n}\n',
  },
]
