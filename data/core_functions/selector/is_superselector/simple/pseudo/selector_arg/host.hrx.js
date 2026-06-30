export default [
  {
    name: 'superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":host(c d, e f, g h)", ":host(c d.i, e j f)")}\n',
  },
  {
    name: 'superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":host(c d.i, e j f)", ":host(c d, e f, g h)")}\n',
  },
  {
    name: 'subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'bare_sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":host(c d, e f, g h)", "c d, e f, g h")}\n',
  },
  {
    name: 'bare_sub/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prefix/superset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-host(c d, e f, g h)", ":-pfx-host(c d.i, e j f)")}\n',
  },
  {
    name: 'prefix/superset/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'prefix/subset/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":-pfx-host(c d.i, e j f)", ":-pfx-host(c d, e f, g h)")}\n',
  },
  {
    name: 'prefix/subset/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
