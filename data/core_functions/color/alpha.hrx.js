// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/alpha.hrx

export default [
  {
    name: 'color/max/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(red)}\n',
  },
  {
    name: 'color/max/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'color/min/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(rgba(red, 0))}\n',
  },
  {
    name: 'color/min/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'color/middle/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(rgba(red, 0.42))}\n',
  },
  {
    name: 'color/middle/output.css',
    data: 'a {\n  b: 0.42;\n}\n',
  },
  {
    name: 'color/named/input.scss',
    data: '@use "sass:color";\na {b: color.alpha($color: rgba(red, 0.73))}\n',
  },
  {
    name: 'color/named/output.css',
    data: 'a {\n  b: 0.73;\n}\n',
  },
  {
    name: 'filter/one_arg/input.scss',
    data: 'a {b: alpha(c=d)}\n',
  },
  {
    name: 'filter/one_arg/output.css',
    data: 'a {\n  b: alpha(c=d);\n}\n',
  },
  {
    name: 'filter/multi_args/input.scss',
    data: 'a {b: alpha(c=d, e=f, g=h)}\n',
  },
  {
    name: 'filter/multi_args/output.css',
    data: 'a {\n  b: alpha(c=d, e=f, g=h);\n}\n',
  },
  {
    name: 'filter/space_before_equals/input.scss',
    data: '@use "sass:color";\n@use "sass:string";\na {b: color.alpha(string.unquote("c = d"))}\n',
  },
  {
    name: 'filter/space_before_equals/output.css',
    data: 'a {\n  b: alpha(c = d);\n}\n',
  },
  {
    name: 'filter/space_before_equals/warning',
    data: 'DEPRECATION WARNING [color-module-compat]: Using color.alpha() for a Microsoft filter is deprecated.\n\nRecommendation: alpha(c = d)\n\n  ,\n3 | a {b: color.alpha(string.unquote("c = d"))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'opacity/positional/input.scss',
    data: '@use "sass:color";\na {b: color.opacity(rgba(red, 0.2))}\n',
  },
  {
    name: 'opacity/positional/output.css',
    data: 'a {\n  b: 0.2;\n}\n',
  },
  {
    name: 'opacity/named/input.scss',
    data: '@use "sass:color";\na {b: color.opacity($color: rgba(red, 0.2))}\n',
  },
  {
    name: 'opacity/named/output.css',
    data: 'a {\n  b: 0.2;\n}\n',
  },
  {
    name: 'opacity/filter/input.scss',
    data: 'a {b: opacity(10%)}\n',
  },
  {
    name: 'opacity/filter/output.css',
    data: 'a {\n  b: opacity(10%);\n}\n',
  },
  {
    name: 'opacity/with_css_var/input.scss',
    data: 'a {b: opacity(var(--c))}\n',
  },
  {
    name: 'opacity/with_css_var/output.css',
    data: 'a {\n  b: opacity(var(--c));\n}\n',
  },
  {
    name: 'opacity/with_calc/input.scss',
    data: 'a {b: opacity(calc(1 + 2))}\n',
  },
  {
    name: 'opacity/with_calc/output.css',
    data: 'a {\n  b: opacity(3);\n}\n',
  },
  {
    name: 'opacity/with_unquoted_calc/input.scss',
    data: '@use "sass:string";\na {b: opacity(string.unquote(\'calc(1)\'))}\n',
  },
  {
    name: 'opacity/with_unquoted_calc/output.css',
    data: 'a {\n  b: opacity(calc(1));\n}\n',
  },
  {
    name: 'css_overloads/alpha/one_arg/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(c=d)}\n',
  },
  {
    name: 'css_overloads/alpha/one_arg/output.css',
    data: 'a {\n  b: alpha(c=d);\n}\n',
  },
  {
    name: 'css_overloads/alpha/one_arg/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Using color.alpha() for a Microsoft filter is deprecated.\n\nRecommendation: alpha(c=d)\n\n  ,\n2 | a {b: color.alpha(c=d)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'css_overloads/alpha/multi_arg/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(c=d, e=f, g=h)}\n',
  },
  {
    name: 'css_overloads/alpha/multi_arg/output.css',
    data: 'a {\n  b: alpha(c=d, e=f, g=h);\n}\n',
  },
  {
    name: 'css_overloads/alpha/multi_arg/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Using color.alpha() for a Microsoft filter is deprecated.\n\nRecommendation: alpha(c=d, e=f, g=h)\n\n  ,\n2 | a {b: color.alpha(c=d, e=f, g=h)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'css_overloads/opacity/input.scss',
    data: '@use "sass:color";\na {b: color.opacity(1)}\n',
  },
  {
    name: 'css_overloads/opacity/output.css',
    data: 'a {\n  b: opacity(1);\n}\n',
  },
  {
    name: 'css_overloads/opacity/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Passing a number (1 to color.opacity() is deprecated.\n\nRecommendation: opacity(1)\n\n  ,\n2 | a {b: color.opacity(1)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.alpha()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: () isn't a valid CSS value.\n  ,\n2 | a {b: color.alpha()}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: 'a {b: alpha(red, green)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,\n1 | a {b: alpha(red, green)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.alpha(1)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/with_module/type/input.scss',
    data: '@use "sass:color";\na {b: color.opacity(var(--c))}\n',
  },
  {
    name: 'error/with_module/type/error',
    data: "Error: $color: var(--c) is not a color.\n  ,\n2 | a {b: color.opacity(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/quoted_string/input.scss',
    data: '@use "sass:color";\na {b: color.alpha("c=d")}\n',
  },
  {
    name: 'error/quoted_string/error',
    data: 'Error: $color: "c=d" is not a color.\n  ,\n2 | a {b: color.alpha("c=d")}\n  |       ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/unquoted_string/no_equals/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(cd)}\n',
  },
  {
    name: 'error/unquoted_string/no_equals/error',
    data: "Error: $color: cd is not a color.\n  ,\n2 | a {b: color.alpha(cd)}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/unquoted_string/non_identifier_before_equals/input.scss',
    data: '@use "sass:color";\n@use "sass:string";\na {b: color.alpha(string.unquote("1=c"))}\n',
  },
  {
    name: 'error/unquoted_string/non_identifier_before_equals/error',
    data: 'Error: $color: 1=c is not a color.\n  ,\n3 | a {b: color.alpha(string.unquote("1=c"))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'error/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(color(srgb 1 1 1))}\n',
  },
  {
    name: 'error/non_legacy/error',
    data: "Error: color.alpha() is only supported for legacy colors. Please use color.channel() instead.\n  ,\n2 | a {b: color.alpha(color(srgb 1 1 1))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
