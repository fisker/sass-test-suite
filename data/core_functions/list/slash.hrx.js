// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/list/slash.hrx

export default [
  {
    name: 'README.md',
    data: 'More thorough specs for the behavior of slash-separated lists, once created,\nlive in spec/values/lists/slash.\n',
  },
  {
    name: 'two_args/input.scss',
    data: '@use "sass:list";\na {b: list.slash(c, d)}\n',
  },
  {
    name: 'two_args/output.css',
    data: 'a {\n  b: c / d;\n}\n',
  },
  {
    name: 'three_args/input.scss',
    data: '@use "sass:list";\na {b: list.slash(c, d, e)}\n',
  },
  {
    name: 'three_args/output.css',
    data: 'a {\n  b: c / d / e;\n}\n',
  },
  {
    name: 'many_args/input.scss',
    data: '@use "sass:list";\na {b: list.slash(c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z)}\n',
  },
  {
    name: 'many_args/output.css',
    data: 'a {\n  b: c / d / e / f / g / h / i / j / k / l / m / n / o / p / q / r / s / t / u / v / w / x / y / z;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:list";\na {b: list.slash(c)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: At least two elements are required.\n  ,\n2 | a {b: list.slash(c)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
