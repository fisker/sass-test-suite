// https://github.com/sass/sass-spec/blob/HEAD/spec/values/maps/map-values.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\ndiv {\n  foo: map.values((foo: 1, bar: 2));\n  foo: map.values((foo: 1, bar: 2, baz: 2));\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  foo: 1, 2;\n  foo: 1, 2, 2;\n}\n',
  },
]
