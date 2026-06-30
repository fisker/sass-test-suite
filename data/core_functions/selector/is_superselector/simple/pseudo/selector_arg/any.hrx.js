// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/pseudo/selector_arg/any.hrx

export default [
  {
    name: 'README.md',
    data: '`:any()` is a deprecated alias for `:matches()` that Sass still supports for\nlegacy reasons. It should support the full range of behavior of `:matches()`,\nbut only a small range is tested here.\n',
  },
  {
    name: 'superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":any(c d, e f, g h)", "c d.i, e j f")}\n',
  },
  {
    name: 'superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":any(c d.i, e j f)", "c d, e f, g h")}\n',
  },
  {
    name: 'subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-any(c d, e f, g h)", "c d.i, e j f")}\n',
  },
  {
    name: 'prefix/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'prefix/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-any(c d.i, e j f)", "c d, e f, g h")}\n',
  },
  {
    name: 'prefix/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
