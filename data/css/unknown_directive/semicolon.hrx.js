export default [
  {
    name: 'top_level/sass/input.sass',
    data: '@a b;\n',
  },
  {
    name: 'top_level/sass/output.css',
    data: '@a b;\n',
  },
  {
    name: 'nested/only/input.scss',
    data: 'a {\n  @b c;\n}\n',
  },
  {
    name: 'nested/only/output.css',
    data: 'a {\n  @b c;\n}\n',
  },
  {
    name: 'nested/interleaved/final/input.scss',
    data: 'a {\n  b {c: d}\n  @e f;\n}\n',
  },
  {
    name: 'nested/interleaved/final/output.css',
    data: 'a b {\n  c: d;\n}\na {\n  @e f;\n}\n',
  },
  {
    name: 'nested/interleaved/before_rule/input.scss',
    data: 'a {\n  b {c: d}\n  @e f;\n  g {h: i}\n}\n',
  },
  {
    name: 'nested/interleaved/before_rule/output.css',
    data: 'a b {\n  c: d;\n}\na {\n  @e f;\n}\na g {\n  h: i;\n}\n',
  },
  {
    name: 'nested/interleaved/before_declaration/input.scss',
    data: 'a {\n  b {c: d}\n  @e f;\n  g: h\n}\n',
  },
  {
    name: 'nested/interleaved/before_declaration/output.css',
    data: 'a b {\n  c: d;\n}\na {\n  @e f;\n  g: h;\n}\n',
  },
]
