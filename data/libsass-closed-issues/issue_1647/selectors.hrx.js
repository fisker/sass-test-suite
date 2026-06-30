// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1647/selectors.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:map";\n$map: (foo: \'b\', bar: c);\n$list: (\'d\', e);\n\na {\n  #{map.get($map, foo)} & {\n      foo: bar;\n  }\n  #{map.get($map, bar)} & {\n      foo: bar;\n  }\n\n  #{list.nth($list, 1)} & {\n      foo: bar;\n  }\n\n  #{list.nth($list, 2)} & {\n      foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'b a {\n  foo: bar;\n}\nc a {\n  foo: bar;\n}\nd a {\n  foo: bar;\n}\ne a {\n  foo: bar;\n}\n',
  },
]
