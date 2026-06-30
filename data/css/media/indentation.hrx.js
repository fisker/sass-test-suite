export default [
  {
    name: 'simple_selector_on_different_lines/input.scss',
    data: '@media a {\n  b,\n  a { c: d }\n}',
  },
  {
    name: 'simple_selector_on_different_lines/output.css',
    data: '@media a {\n  b,\n  a {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'nested_selector/different_lines_parent/same_line/input.scss',
    data: '@media a {\n  b,\n  a {\n    c, d { e: f }\n  }\n}',
  },
  {
    name: 'nested_selector/different_lines_parent/same_line/output.css',
    data: '@media a {\n  b c, b d,\n  a c,\n  a d {\n    e: f;\n  }\n}\n',
  },
  {
    name: 'nested_selector/different_lines_parent/different_lines/input.scss',
    data: '@media a {\n  b,\n  a {\n    c,\n    d { e: f }\n  }\n}',
  },
  {
    name: 'nested_selector/different_lines_parent/different_lines/output.css',
    data: '@media a {\n  b c,\n  b d,\n  a c,\n  a d {\n    e: f;\n  }\n}\n',
  },
  {
    name: 'nested_selector/same_lines_parent/same_line/input.scss',
    data: '@media a {\n  b, a {\n    c, d { e: f }\n  }\n}',
  },
  {
    name: 'nested_selector/same_lines_parent/same_line/output.css',
    data: '@media a {\n  b c, b d, a c, a d {\n    e: f;\n  }\n}\n',
  },
  {
    name: 'nested_selector/same_lines_parent/different_lines/input.scss',
    data: '@media a {\n  b, a {\n    c,\n    d { e: f }\n  }\n}',
  },
  {
    name: 'nested_selector/same_lines_parent/different_lines/output.css',
    data: '@media a {\n  b c,\n  b d, a c,\n  a d {\n    e: f;\n  }\n}\n',
  },
  {
    name: 'media_nested_in_selector/input.scss',
    data: 'a,\nb {\n  @media c {\n    d,\n    e { f: g }\n  }\n}',
  },
  {
    name: 'media_nested_in_selector/output.css',
    data: '@media c {\n  a d,\n  a e,\n  b d,\n  b e {\n    f: g;\n  }\n}\n',
  },
]
