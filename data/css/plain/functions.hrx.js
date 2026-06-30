// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/functions.hrx

export default [
  {
    name: 'defined_elsewhere/input.scss',
    data: '@function a() {@return b}\n\n@import "plain";\n',
  },
  {
    name: 'defined_elsewhere/plain.css',
    data: 'c {d: a()}\n',
  },
  {
    name: 'defined_elsewhere/output.css',
    data: 'c {\n  d: a();\n}\n',
  },
  {
    name: 'defined_elsewhere/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "plain";\n  |         ^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'hsl/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'hsl/plain.css',
    data: 'a {b: hsl(0, 100%, 50%)}\n',
  },
  {
    name: 'hsl/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'hsla/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'hsla/plain.css',
    data: 'a {b: hsla(0, 100%, 50%, 0.5)}\n',
  },
  {
    name: 'hsla/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0.5);\n}\n',
  },
  {
    name: 'rgb/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'rgb/plain.css',
    data: 'a {b: rgb(10, 20, 30)}\n',
  },
  {
    name: 'rgb/output.css',
    data: 'a {\n  b: rgb(10, 20, 30);\n}\n',
  },
  {
    name: 'rgba/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'rgba/plain.css',
    data: 'a {b: rgba(10, 20, 30, 0.5)}\n',
  },
  {
    name: 'rgba/output.css',
    data: 'a {\n  b: rgba(10, 20, 30, 0.5);\n}\n',
  },
  {
    name: 'grayscale/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'grayscale/plain.css',
    data: 'a {b: grayscale(0.1)}\n',
  },
  {
    name: 'grayscale/output.css',
    data: 'a {\n  b: grayscale(0.1);\n}\n',
  },
  {
    name: 'invert/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'invert/plain.css',
    data: 'a {b: invert(0.1)}\n',
  },
  {
    name: 'invert/output.css',
    data: 'a {\n  b: invert(0.1);\n}\n',
  },
  {
    name: 'alpha/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'alpha/plain.css',
    data: 'a {b: alpha(0.1)}\n',
  },
  {
    name: 'alpha/output.css',
    data: 'a {\n  b: alpha(0.1);\n}\n',
  },
  {
    name: 'saturate/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'saturate/plain.css',
    data: 'a {b: saturate(0.1)}\n',
  },
  {
    name: 'saturate/output.css',
    data: 'a {\n  b: saturate(0.1);\n}\n',
  },
  {
    name: 'empty_fallback_var/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'empty_fallback_var/plain.css',
    data: 'a {b: var(--c, )}\n',
  },
  {
    name: 'empty_fallback_var/output.css',
    data: 'a {\n  b: var(--c, );\n}\n',
  },
  {
    name: 'error/empty_fallback_var/invalid_second_arg_syntax/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'error/empty_fallback_var/invalid_second_arg_syntax/plain.css',
    data: 'a {b: var(--c, {})}\n',
  },
  {
    name: 'error/empty_fallback_var/invalid_second_arg_syntax/error',
    data: "Error: Expected expression.\n  ,\n1 | a {b: var(--c, {})}\n  |                ^\n  '\n  plain.css 1:16  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'error/empty_fallback_var/empty_second_before_third/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'error/empty_fallback_var/empty_second_before_third/plain.css',
    data: 'a {b: var(--c, , d)}\n',
  },
  {
    name: 'error/empty_fallback_var/empty_second_before_third/error',
    data: "Error: Expected expression.\n  ,\n1 | a {b: var(--c, , d)}\n  |                ^\n  '\n  plain.css 1:16  @use\n  input.scss 1:1  root stylesheet\n",
  },
]
