// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_652.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n$map: (\n    purple: foo,\n    rgba(1,2,3,1): bar,\n    #ffffff: baz,\n);\n\na {\n  name: map.get($map, purple) == foo;\n  func: map.get($map, rgba(1,2,3,1)) == bar;\n  hex: map.get($map, #ffffff) == baz;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  name: true;\n  func: true;\n  hex: true;\n}\n',
  },
]
