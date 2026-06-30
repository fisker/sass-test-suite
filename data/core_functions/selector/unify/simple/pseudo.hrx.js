export default [
  {
    name: 'no_arg/class/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":c", ":c")}\n',
  },
  {
    name: 'no_arg/class/same/output.css',
    data: 'a {\n  b: :c;\n}\n',
  },
  {
    name: 'no_arg/class/different/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":c", ":d")}\n',
  },
  {
    name: 'no_arg/class/different/output.css',
    data: 'a {\n  b: :c:d;\n}\n',
  },
  {
    name: 'no_arg/element/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("::c", "::c")}\n',
  },
  {
    name: 'no_arg/element/same/output.css',
    data: 'a {\n  b: ::c;\n}\n',
  },
  {
    name: 'no_arg/element/different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("::c", "::d"))}\n',
  },
  {
    name: 'no_arg/element/different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'no_arg/different_syntax_same_semantics/before/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":before", "::before")}\n',
  },
  {
    name: 'no_arg/different_syntax_same_semantics/before/output.css',
    data: 'a {\n  b: :before;\n}\n',
  },
  {
    name: 'no_arg/different_syntax_same_semantics/after/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":after", "::after")}\n',
  },
  {
    name: 'no_arg/different_syntax_same_semantics/after/output.css',
    data: 'a {\n  b: :after;\n}\n',
  },
  {
    name: 'no_arg/different_syntax_same_semantics/first_line/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":first-line", "::first-line")}\n',
  },
  {
    name: 'no_arg/different_syntax_same_semantics/first_line/output.css',
    data: 'a {\n  b: :first-line;\n}\n',
  },
  {
    name: 'no_arg/different_syntax_same_semantics/first_letter/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":first-letter", "::first-letter")}\n',
  },
  {
    name: 'no_arg/different_syntax_same_semantics/first_letter/output.css',
    data: 'a {\n  b: :first-letter;\n}\n',
  },
  {
    name: 'arg/class/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":c(@#$)", ":c(@#$)")}\n',
  },
  {
    name: 'arg/class/same/output.css',
    data: 'a {\n  b: :c(@#$);\n}\n',
  },
  {
    name: 'arg/class/different/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":c(@#$)", ":c(*&^)")}\n',
  },
  {
    name: 'arg/class/different/output.css',
    data: 'a {\n  b: :c(@#$):c(*&^);\n}\n',
  },
  {
    name: 'arg/element/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("::c(@#$)", "::c(@#$)")}\n',
  },
  {
    name: 'arg/element/same/output.css',
    data: 'a {\n  b: ::c(@#$);\n}\n',
  },
  {
    name: 'arg/element/different/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("::c(@#$)", "::c(*&^)"))}\n',
  },
  {
    name: 'arg/element/different/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'selector_arg/is/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":is(.c)", ":is(.c)")}\n',
  },
  {
    name: 'selector_arg/is/same/output.css',
    data: 'a {\n  b: :is(.c);\n}\n',
  },
  {
    name: 'selector_arg/is/different/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":is(.c)", ":is(.d)")}\n',
  },
  {
    name: 'selector_arg/is/different/output.css',
    data: 'a {\n  b: :is(.c):is(.d);\n}\n',
  },
  {
    name: 'selector_arg/where/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":where(.c)", ":where(.c)")}\n',
  },
  {
    name: 'selector_arg/where/same/output.css',
    data: 'a {\n  b: :where(.c);\n}\n',
  },
  {
    name: 'selector_arg/where/different/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":where(.c)", ":where(.d)")}\n',
  },
  {
    name: 'selector_arg/where/different/output.css',
    data: 'a {\n  b: :where(.c):where(.d);\n}\n',
  },
  {
    name: 'selector_arg/matches/same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":matches(.c)", ":matches(.c)")}\n',
  },
  {
    name: 'selector_arg/matches/same/output.css',
    data: 'a {\n  b: :matches(.c);\n}\n',
  },
  {
    name: 'selector_arg/matches/different/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":matches(.c)", ":matches(.d)")}\n',
  },
  {
    name: 'selector_arg/matches/different/output.css',
    data: 'a {\n  b: :matches(.c):matches(.d);\n}\n',
  },
  {
    name: 'host/argless/host/argless/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host", ":host")}\n',
  },
  {
    name: 'host/argless/host/argless/output.css',
    data: 'a {\n  b: :host;\n}\n',
  },
  {
    name: 'host/argless/host/arg/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host", ":host(.c)")}\n',
  },
  {
    name: 'host/argless/host/arg/output.css',
    data: 'a {\n  b: :host:host(.c);\n}\n',
  },
  {
    name: 'host/argless/host_context/left/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host", ":host-context(.c)")}\n',
  },
  {
    name: 'host/argless/host_context/left/output.css',
    data: 'a {\n  b: :host:host-context(.c);\n}\n',
  },
  {
    name: 'host/argless/host_context/right/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host-context(.c)", ":host")}\n',
  },
  {
    name: 'host/argless/host_context/right/output.css',
    data: 'a {\n  b: :host-context(.c):host;\n}\n',
  },
  {
    name: 'host/argless/selector_pseudo/left/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host", ":is(.c)")}\n',
  },
  {
    name: 'host/argless/selector_pseudo/left/output.css',
    data: 'a {\n  b: :is(.c):host;\n}\n',
  },
  {
    name: 'host/argless/selector_pseudo/right/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":is(.c)", ":host")}\n',
  },
  {
    name: 'host/argless/selector_pseudo/right/output.css',
    data: 'a {\n  b: :is(.c):host;\n}\n',
  },
  {
    name: 'host/argless/pseudo/left/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":host", ":hover"))}\n',
  },
  {
    name: 'host/argless/pseudo/left/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/pseudo/right/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":hover", ":host"))}\n',
  },
  {
    name: 'host/argless/pseudo/right/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/class/left/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":host", ".c"))}\n',
  },
  {
    name: 'host/argless/class/left/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/class/right/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(".c", ":host"))}\n',
  },
  {
    name: 'host/argless/class/right/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/universal/left/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":host", "*"))}\n',
  },
  {
    name: 'host/argless/universal/left/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/universal/right/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("*", ":host"))}\n',
  },
  {
    name: 'host/argless/universal/right/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/compound/selector_pseudos/left/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host", ":is(.c):is(.d)")}\n',
  },
  {
    name: 'host/argless/compound/selector_pseudos/left/output.css',
    data: 'a {\n  b: :is(.c):host:is(.d);\n}\n',
  },
  {
    name: 'host/argless/compound/selector_pseudos/right/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":is(.c):is(.d)", ":host")}\n',
  },
  {
    name: 'host/argless/compound/selector_pseudos/right/output.css',
    data: 'a {\n  b: :is(.c):is(.d):host;\n}\n',
  },
  {
    name: 'host/argless/compound/class_and_selector_pseudo/left/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":host", ".c:is(.d)"))}\n',
  },
  {
    name: 'host/argless/compound/class_and_selector_pseudo/left/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/compound/class_and_selector_pseudo/right/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(".c:is(.d)", ":host"))}\n',
  },
  {
    name: 'host/argless/compound/class_and_selector_pseudo/right/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/compound/host_and_class/left/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":host", ":host.c"))}\n',
  },
  {
    name: 'host/argless/compound/host_and_class/left/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/argless/compound/host_and_class/right/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":host.c", ":host"))}\n',
  },
  {
    name: 'host/argless/compound/host_and_class/right/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/arg/preserved/left/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host(.c)", ":is(.d)")}\n',
  },
  {
    name: 'host/arg/preserved/left/output.css',
    data: 'a {\n  b: :is(.d):host(.c);\n}\n',
  },
  {
    name: 'host/arg/preserved/right/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":is(.c)", ":host(.d)")}\n',
  },
  {
    name: 'host/arg/preserved/right/output.css',
    data: 'a {\n  b: :is(.c):host(.d);\n}\n',
  },
  {
    name: 'host/arg/removed/left/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":host(.c)", ".d"))}\n',
  },
  {
    name: 'host/arg/removed/left/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host/arg/removed/right/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(".c", ":host(.d)"))}\n',
  },
  {
    name: 'host/arg/removed/right/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host_context/preserved/left/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host-context(.c)", ":is(.d)")}\n',
  },
  {
    name: 'host_context/preserved/left/output.css',
    data: 'a {\n  b: :is(.d):host-context(.c);\n}\n',
  },
  {
    name: 'host_context/preserved/right/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":is(.c)", ":host-context(.d)")}\n',
  },
  {
    name: 'host_context/preserved/right/output.css',
    data: 'a {\n  b: :is(.c):host-context(.d);\n}\n',
  },
  {
    name: 'host_context/removed/left/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(":host-context(.c)", ".d"))}\n',
  },
  {
    name: 'host_context/removed/left/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'host_context/removed/right/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify(".c", ":host-context(.d)"))}\n',
  },
  {
    name: 'host_context/removed/right/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
]
