// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/pseudo/selector_arg/host_context.hrx

export default [
  {
    name: 'superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":host-context(c d, e f, g h)", ":host-context(c d.i, e j f)")}\n',
  },
  {
    name: 'superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":host-context(c d.i, e j f)", ":host-context(c d, e f, g h)")}\n',
  },
  {
    name: 'subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'bare_sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":host-context(c d, e f, g h)", "c d, e f, g h")}\n',
  },
  {
    name: 'bare_sub/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-host-context(c d, e f, g h)", ":-pfx-host-context(c d.i, e j f)")}\n',
  },
  {
    name: 'prefix/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'prefix/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-host-context(c d.i, e j f)", ":-pfx-host-context(c d, e f, g h)")}\n',
  },
  {
    name: 'prefix/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
