// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/pseudo/selector_arg/not.hrx

export default [
  {
    name: 'superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(c d, e f, g h)", ":not(c d.i, e j f)")}\n',
  },
  {
    name: 'superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(c d.i, e j f)", ":not(c d, e f, g h)")}\n',
  },
  {
    name: 'subset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'bare_sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(c d, e f, g h)", "c d, e f, g h")}\n',
  },
  {
    name: 'bare_sub/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'type/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(c.d)", "e")}\n',
  },
  {
    name: 'type/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'id/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(#c.d)", "#e")}\n',
  },
  {
    name: 'id/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'equivalence/README.md',
    data: '\nBecause the set of elements a `:not()` matches gets smaller the larger the set\nof elements matched by its selector gets, `:not(X, Y)` is equivalent to\n`:not(X):not(Y)`.\n',
  },
  {
    name: 'equivalence/split_super/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(c d):not(e f):not(g h)", ":not(c d.i, e j f)")}',
  },
  {
    name: 'equivalence/split_super/superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'equivalence/split_super/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(c d.i):not(e j f)", ":not(c d, e f, g h)")}\n',
  },
  {
    name: 'equivalence/split_super/subset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'equivalence/split_sub/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(c d, e f, g h)", ":not(c d.i):not(e j f)")}\n',
  },
  {
    name: 'equivalence/split_sub/superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'equivalence/split_sub/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":not(c d.i, e j f)", ":not(c d):not(e f):not(g h)")}\n',
  },
  {
    name: 'equivalence/split_sub/subset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'prefix/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-not(c d, e f, g h)", ":-pfx-not(c d.i, e j f)")}\n',
  },
  {
    name: 'prefix/superset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-not(c d.i, e j f)", ":-pfx-not(c d, e f, g h)")}\n',
  },
  {
    name: 'prefix/subset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
