// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/list.hrx

export default [
  {
    name: 'two/in_sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "c, d")}\n',
  },
  {
    name: 'two/in_sub/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'two/in_super/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c, d", "c")}\n',
  },
  {
    name: 'two/in_super/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'two/in_both/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c, d", "c, d")}\n',
  },
  {
    name: 'two/in_both/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'two/in_both/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c, d", "c.e, d.f")}\n',
  },
  {
    name: 'two/in_both/subset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'two/in_both/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c.e, d.f", "c, d")}\n',
  },
  {
    name: 'two/in_both/superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'two/both_satisfied_by_one_superselector/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(".c", "d.c, e.c")}\n',
  },
  {
    name: 'two/both_satisfied_by_one_superselector/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'three/match_one/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c, d, e", "d")}\n',
  },
  {
    name: 'three/match_one/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'three/match_two/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c, d, e", "e, c")}\n',
  },
  {
    name: 'three/match_two/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'three/match_three/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c, d, e", "d, c, e")}\n',
  },
  {
    name: 'three/match_three/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'three/miss_one/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c, d, e", "c, f")}\n',
  },
  {
    name: 'three/miss_one/output.css',
    data: 'a {\n  b: false;\n}\n\n',
  },
]
