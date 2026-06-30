export default [
  {
    name: 'calc/string/arg_1/input.scss',
    data: '@use "sass:string";\na {b: hsl(string.unquote("calc(1)"), 2%, 3%)}\n',
  },
  {
    name: 'calc/string/arg_1/output.css',
    data: 'a {\n  b: hsl(calc(1), 2%, 3%);\n}\n',
  },
  {
    name: 'calc/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, string.unquote("calc(2%)"), 3%)}\n',
  },
  {
    name: 'calc/string/arg_2/output.css',
    data: 'a {\n  b: hsl(1, calc(2%), 3%);\n}\n',
  },
  {
    name: 'calc/string/arg_3/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, string.unquote("calc(3%)"))}\n',
  },
  {
    name: 'calc/string/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, calc(3%));\n}\n',
  },
  {
    name: 'calc/calculation/arg_1/input.scss',
    data: 'a {b: hsl(calc(1px + 1%), 2%, 3%)}\n',
  },
  {
    name: 'calc/calculation/arg_1/output.css',
    data: 'a {\n  b: hsl(calc(1px + 1%), 2%, 3%);\n}\n',
  },
  {
    name: 'calc/calculation/arg_2/input.scss',
    data: 'a {b: hsl(1, calc(1px + 1%), 3%)}\n',
  },
  {
    name: 'calc/calculation/arg_2/output.css',
    data: 'a {\n  b: hsl(1, calc(1px + 1%), 3%);\n}\n',
  },
  {
    name: 'calc/calculation/arg_3/input.scss',
    data: 'a {b: hsl(1, 2%, calc(1px + 1%))}\n',
  },
  {
    name: 'calc/calculation/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, calc(1px + 1%));\n}\n',
  },
  {
    name: 'var/arg_1/input.scss',
    data: 'a {b: hsl(var(--foo), 2%, 3%)}\n',
  },
  {
    name: 'var/arg_1/output.css',
    data: 'a {\n  b: hsl(var(--foo), 2%, 3%);\n}\n',
  },
  {
    name: 'var/arg_2/input.scss',
    data: 'a {b: hsl(1, var(--foo), 3%)}\n',
  },
  {
    name: 'var/arg_2/output.css',
    data: 'a {\n  b: hsl(1, var(--foo), 3%);\n}\n',
  },
  {
    name: 'var/arg_3/input.scss',
    data: 'a {b: hsl(1, 2%, var(--foo))}\n',
  },
  {
    name: 'var/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, var(--foo));\n}\n',
  },
  {
    name: 'env/arg_1/input.scss',
    data: 'a {b: hsl(env(--foo), 2%, 3%)}\n',
  },
  {
    name: 'env/arg_1/output.css',
    data: 'a {\n  b: hsl(env(--foo), 2%, 3%);\n}\n',
  },
  {
    name: 'env/arg_2/input.scss',
    data: 'a {b: hsl(1, env(--foo), 3%)}\n',
  },
  {
    name: 'env/arg_2/output.css',
    data: 'a {\n  b: hsl(1, env(--foo), 3%);\n}\n',
  },
  {
    name: 'env/arg_3/input.scss',
    data: 'a {b: hsl(1, 2%, env(--foo))}\n',
  },
  {
    name: 'env/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, env(--foo));\n}\n',
  },
  {
    name: 'attr/arg_1/input.scss',
    data: 'a {b: hsl(attr(c, %), 2%, 3%)}\n',
  },
  {
    name: 'attr/arg_1/output.css',
    data: 'a {\n  b: hsl(attr(c, %), 2%, 3%);\n}\n',
  },
  {
    name: 'attr/arg_2/input.scss',
    data: 'a {b: hsl(1, attr(c, %), 3%)}\n',
  },
  {
    name: 'attr/arg_2/output.css',
    data: 'a {\n  b: hsl(1, attr(c, %), 3%);\n}\n',
  },
  {
    name: 'attr/arg_3/input.scss',
    data: 'a {b: hsl(1, 2%, attr(c, %))}\n',
  },
  {
    name: 'attr/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, attr(c, %));\n}\n',
  },
  {
    name: 'min/string/arg_1/input.scss',
    data: '@use "sass:string";\na {b: hsl(string.unquote("min(1)"), 2%, 3%)}\n',
  },
  {
    name: 'min/string/arg_1/output.css',
    data: 'a {\n  b: hsl(min(1), 2%, 3%);\n}\n',
  },
  {
    name: 'min/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, string.unquote("min(2%)"), 3%)}\n',
  },
  {
    name: 'min/string/arg_2/output.css',
    data: 'a {\n  b: hsl(1, min(2%), 3%);\n}\n',
  },
  {
    name: 'min/string/arg_3/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, string.unquote("min(3%)"))}\n',
  },
  {
    name: 'min/string/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, min(3%));\n}\n',
  },
  {
    name: 'max/string/arg_1/input.scss',
    data: '@use "sass:string";\na {b: hsl(string.unquote("max(1)"), 2%, 3%)}\n',
  },
  {
    name: 'max/string/arg_1/output.css',
    data: 'a {\n  b: hsl(max(1), 2%, 3%);\n}\n',
  },
  {
    name: 'max/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, string.unquote("max(2%)"), 3%)}\n',
  },
  {
    name: 'max/string/arg_2/output.css',
    data: 'a {\n  b: hsl(1, max(2%), 3%);\n}\n',
  },
  {
    name: 'max/string/arg_3/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, string.unquote("max(3%)"))}\n',
  },
  {
    name: 'max/string/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, max(3%));\n}\n',
  },
  {
    name: 'clamp/string/arg_1/input.scss',
    data: '@use "sass:string";\na {b: hsl(string.unquote("clamp(1, 2, 3)"), 2%, 3%)}\n',
  },
  {
    name: 'clamp/string/arg_1/output.css',
    data: 'a {\n  b: hsl(clamp(1, 2, 3), 2%, 3%);\n}\n',
  },
  {
    name: 'clamp/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, string.unquote("clamp(2%, 3%, 4%)"), 3%)}\n',
  },
  {
    name: 'clamp/string/arg_2/output.css',
    data: 'a {\n  b: hsl(1, clamp(2%, 3%, 4%), 3%);\n}\n',
  },
  {
    name: 'clamp/string/arg_3/input.scss',
    data: '@use "sass:string";\na {b: hsl(1, 2%, string.unquote("clamp(3%, 4%, 5%)"))}\n',
  },
  {
    name: 'clamp/string/arg_3/output.css',
    data: 'a {\n  b: hsl(1, 2%, clamp(3%, 4%, 5%));\n}\n',
  },
]
