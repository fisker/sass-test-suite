export default [
  {
    name: 'arg1/positive_infinity/input.scss',
    data: 'a {b: color(srgb calc(infinity) 0 0)}\n',
  },
  {
    name: 'arg1/positive_infinity/output.css',
    data: 'a {\n  b: color(srgb calc(infinity) 0 0);\n}\n',
  },
  {
    name: 'arg1/negative_infinity/input.scss',
    data: 'a {b: color(srgb calc(-infinity) 0 0)}\n',
  },
  {
    name: 'arg1/negative_infinity/output.css',
    data: 'a {\n  b: color(srgb calc(-infinity) 0 0);\n}\n',
  },
  {
    name: 'arg1/nan/input.scss',
    data: 'a {b: color(srgb calc(NaN) 0 0)}\n',
  },
  {
    name: 'arg1/nan/output.css',
    data: 'a {\n  b: color(srgb calc(NaN) 0 0);\n}\n',
  },
  {
    name: 'before_alpha/positive_infinity/input.scss',
    data: 'a {b: color(srgb 0 0 calc(infinity) / 0.5)}\n',
  },
  {
    name: 'before_alpha/positive_infinity/output.css',
    data: 'a {\n  b: color(srgb 0 0 calc(infinity) / 0.5);\n}\n',
  },
  {
    name: 'before_alpha/negative_infinity/input.scss',
    data: 'a {b: color(srgb 0 0 calc(-infinity) / 0.5)}\n',
  },
  {
    name: 'before_alpha/negative_infinity/output.css',
    data: 'a {\n  b: color(srgb 0 0 calc(-infinity) / 0.5);\n}\n',
  },
  {
    name: 'before_alpha/nan/input.scss',
    data: 'a {b: color(srgb 0 0 calc(NaN) / 0.5)}\n',
  },
  {
    name: 'before_alpha/nan/output.css',
    data: 'a {\n  b: color(srgb 0 0 calc(NaN) / 0.5);\n}\n',
  },
  {
    name: 'alpha/positive_infinity/input.scss',
    data: 'a {b: color(srgb 0 0 0 / calc(infinity))}\n',
  },
  {
    name: 'alpha/positive_infinity/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
  {
    name: 'alpha/negative_infinity/input.scss',
    data: 'a {b: color(srgb 0 0 0 / calc(-infinity))}\n',
  },
  {
    name: 'alpha/negative_infinity/output.css',
    data: 'a {\n  b: color(srgb 0 0 0 / 0);\n}\n',
  },
  {
    name: 'alpha/nan/input.scss',
    data: 'a {b: color(srgb 0 0 0 / calc(NaN))}\n',
  },
  {
    name: 'alpha/nan/output.css',
    data: 'a {\n  b: color(srgb 0 0 0 / 0);\n}\n',
  },
]
