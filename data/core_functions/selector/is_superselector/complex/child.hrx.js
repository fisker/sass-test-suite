// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/complex/child.hrx

export default [
  {
    name: 'single/in_sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "d > c")}\n',
  },
  {
    name: 'single/in_sub/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'single/in_super/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c > d", "d")}\n',
  },
  {
    name: 'single/in_super/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'single/in_both/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c > d", "c > d")}\n',
  },
  {
    name: 'single/in_both/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'single/in_both/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c > d", "c.e > d.f")}\n',
  },
  {
    name: 'single/in_both/subset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'single/in_both/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c.e > d.f", "c > d")}\n',
  },
  {
    name: 'single/in_both/superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'multiple/in_sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "d > e > c")}\n',
  },
  {
    name: 'multiple/in_sub/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'multiple/first/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("d > c", "d > e > c")}\n',
  },
  {
    name: 'multiple/first/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'multiple/second/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("e > c", "d > e > c")}\n',
  },
  {
    name: 'multiple/second/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'multiple/neither/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("f > c", "d > e > c")}\n',
  },
  {
    name: 'multiple/neither/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'multiple/extra_middle/README.md',
    data: 'Regression tests for sass/dart-sass#1843.\n',
  },
  {
    name: 'multiple/extra_middle/descendant/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("a > b > c", "a > x b > c")}\n',
  },
  {
    name: 'multiple/extra_middle/descendant/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'multiple/extra_middle/child/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("a > b > c", "a > x > b > c")}\n',
  },
  {
    name: 'multiple/extra_middle/child/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'multiple/extra_middle/following_sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("a > b > c", "a > x ~ b > c")}\n',
  },
  {
    name: 'multiple/extra_middle/following_sibling/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'multiple/extra_middle/next_sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("a > b > c", "a > x + b > c")}\n',
  },
  {
    name: 'multiple/extra_middle/next_sibling/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
