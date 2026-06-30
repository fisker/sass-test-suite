// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsla.hrx

export default [
  {
    name: 'README.md',
    data: 'The `hsla()` function should behave identically to `hsl()`, but for conciseness\nwe only test a few cases and let the `hsl()` tests cover the rest.\n',
  },
  {
    name: 'one_arg/no_alpha/input.scss',
    data: 'a {b: hsla(180 60% 50%)}\n',
  },
  {
    name: 'one_arg/no_alpha/output.css',
    data: 'a {\n  b: hsl(180, 60%, 50%);\n}\n',
  },
  {
    name: 'one_arg/alpha/input.scss',
    data: 'a {b: hsla(180 60% 50% / 0.4)}\n',
  },
  {
    name: 'one_arg/alpha/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0.4);\n}\n',
  },
  {
    name: 'three_args/input.scss',
    data: 'a {b: hsla(180, 60%, 50%)}\n',
  },
  {
    name: 'three_args/output.css',
    data: 'a {\n  b: hsl(180, 60%, 50%);\n}\n',
  },
  {
    name: 'four_args/input.scss',
    data: 'a {b: hsla(180, 60%, 50%, 0.4)}\n',
  },
  {
    name: 'four_args/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0.4);\n}\n',
  },
]
