export default [
  {
    name: 'one_matches/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c", ".c, .d", ".e")}\n',
  },
  {
    name: 'one_matches/output.css',
    data: 'a {\n  b: .c, .e;\n}\n',
  },
  {
    name: 'all_match/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.d", ".c, .d", ".e")}\n',
  },
  {
    name: 'all_match/output.css',
    data: 'a {\n  b: .c.d, .e;\n}\n',
  },
  {
    name: 'different_matches/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.d, .c .e, .d .f", ".c, .d", ".g")}\n',
  },
  {
    name: 'different_matches/output.css',
    data: 'a {\n  b: .c.d, .g, .c .e, .g .e, .d .f, .g .f;\n}\n',
  },
]
