// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/rgba.hrx

export default [
  {
    name: 'README.md',
    data: 'The `rgba()` function should behave identically to `rgb()`, but for conciseness\nwe only test a few cases and let the `rgb()` tests cover the rest.\n',
  },
  {
    name: 'one_arg/no_alpha/input.scss',
    data: 'a {b: rgba(190 173 237)}\n',
  },
  {
    name: 'one_arg/no_alpha/output.css',
    data: 'a {\n  b: rgb(190, 173, 237);\n}\n',
  },
  {
    name: 'one_arg/alpha/input.scss',
    data: 'a {b: rgba(0 255 127 / 0.4)}\n',
  },
  {
    name: 'one_arg/alpha/output.css',
    data: 'a {\n  b: rgba(0, 255, 127, 0.4);\n}\n',
  },
  {
    name: 'three_args/input.scss',
    data: 'a {b: rgba(190, 173, 237)}\n',
  },
  {
    name: 'three_args/output.css',
    data: 'a {\n  b: rgb(190, 173, 237);\n}\n',
  },
  {
    name: 'four_args/input.scss',
    data: 'a {b: rgba(0, 255, 127, 0.4)}\n',
  },
  {
    name: 'four_args/output.css',
    data: 'a {\n  b: rgba(0, 255, 127, 0.4);\n}\n',
  },
]
