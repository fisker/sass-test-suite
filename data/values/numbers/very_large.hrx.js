// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/very_large.hrx

export default [
  {
    name: 'positive/input.scss',
    data: "@use 'sass:math';\na {b: math.pow(10.0, 30)}\n",
  },
  {
    name: 'positive/output.css',
    data: 'a {\n  b: 1000000000000000000000000000000;\n}\n',
  },
  {
    name: 'negative/input.scss',
    data: "@use 'sass:math';\na {b: -(math.pow(10.0, 30))}\n",
  },
  {
    name: 'negative/output.css',
    data: 'a {\n  b: -1000000000000000000000000000000;\n}\n',
  },
]
