// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/simple/pseudo/selector/non_idempotent.hrx

export default [
  {
    name: 'README.md',
    data: 'Nesting one of these selector pseudoclasses within an identical selector\npseudoclass changes its semantics, so Sass never flattens these nestings.\n',
  },
  {
    name: 'has/simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":has(.c)", ".c", ".d")}\n',
  },
  {
    name: 'has/simple/output.css',
    data: 'a {\n  b: :has(.c, .d);\n}\n',
  },
  {
    name: 'has/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":has(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'has/list/output.css',
    data: 'a {\n  b: :has(.c, .d, .e);\n}\n',
  },
  {
    name: 'has/has_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":has(.c)", ".c", ":has(.d)")}\n',
  },
  {
    name: 'has/has_in_extender/output.css',
    data: 'a {\n  b: :has(.c, :has(.d));\n}\n',
  },
  {
    name: 'host/simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":host(.c)", ".c", ".d")}\n',
  },
  {
    name: 'host/simple/output.css',
    data: 'a {\n  b: :host(.c, .d);\n}\n',
  },
  {
    name: 'host/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":host(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'host/list/output.css',
    data: 'a {\n  b: :host(.c, .d, .e);\n}\n',
  },
  {
    name: 'host/host_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":host(.c)", ".c", ":host(.d)")}\n',
  },
  {
    name: 'host/host_in_extender/output.css',
    data: 'a {\n  b: :host(.c, :host(.d));\n}\n',
  },
  {
    name: 'host_context/simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":host-context(.c)", ".c", ".d")}\n',
  },
  {
    name: 'host_context/simple/output.css',
    data: 'a {\n  b: :host-context(.c, .d);\n}\n',
  },
  {
    name: 'host_context/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":host-context(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'host_context/list/output.css',
    data: 'a {\n  b: :host-context(.c, .d, .e);\n}\n',
  },
  {
    name: 'host_context/host_context_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":host-context(.c)", ".c", ":host-context(.d)")}\n',
  },
  {
    name: 'host_context/host_context_in_extender/output.css',
    data: 'a {\n  b: :host-context(.c, :host-context(.d));\n}\n',
  },
  {
    name: 'slotted/simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::slotted(.c)", ".c", ".d")}\n',
  },
  {
    name: 'slotted/simple/output.css',
    data: 'a {\n  b: ::slotted(.c, .d);\n}\n',
  },
  {
    name: 'slotted/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::slotted(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'slotted/list/output.css',
    data: 'a {\n  b: ::slotted(.c, .d, .e);\n}\n',
  },
  {
    name: 'slotted/slotted_in_extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::slotted(.c)", ".c", "::slotted(.d)")}\n',
  },
  {
    name: 'slotted/slotted_in_extender/output.css',
    data: 'a {\n  b: ::slotted(.c, ::slotted(.d));\n}\n',
  },
]
