export default [
  {
    name: 'README.md',
    data: 'All rootish selectors are expected to behave like `:root`, but we only test\n`:root` extensively to avoid needless repetition.\n',
  },
  {
    name: 'root/in_one/selector1/two_layer/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":root .c", ".d .e")}\n',
  },
  {
    name: 'root/in_one/selector1/two_layer/output.css',
    data: 'a {\n  b: :root .d .c.e;\n}\n',
  },
  {
    name: 'root/in_one/selector1/three_layer/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":root .c .d", ".e .f")}\n',
  },
  {
    name: 'root/in_one/selector1/three_layer/output.css',
    data: 'a {\n  b: :root .c .e .d.f, :root .e .c .d.f;\n}\n',
  },
  {
    name: 'root/in_one/selector2/two_layer/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c .d", ":root .e")}\n',
  },
  {
    name: 'root/in_one/selector2/two_layer/output.css',
    data: 'a {\n  b: :root .c .d.e;\n}\n',
  },
  {
    name: 'root/in_one/selector2/three_layer/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c .d", ":root .e .f")}\n',
  },
  {
    name: 'root/in_one/selector2/three_layer/output.css',
    data: 'a {\n  b: :root .c .e .d.f, :root .e .c .d.f;\n}\n',
  },
  {
    name: 'root/in_both/cant_unify/input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\na {b: meta.inspect(selector.unify("c:root .d", "e:root .f"))}\n',
  },
  {
    name: 'root/in_both/cant_unify/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'root/in_both/superselector/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c:root .d", ":root .e")}\n',
  },
  {
    name: 'root/in_both/superselector/output.css',
    data: 'a {\n  b: c:root .d.e;\n}\n',
  },
  {
    name: 'root/in_both/can_unify/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c:root .d", ".e:root .f")}\n',
  },
  {
    name: 'root/in_both/can_unify/output.css',
    data: 'a {\n  b: .c.e:root .d.f;\n}\n',
  },
  {
    name: 'scope/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":scope .c", ".d .e")}\n',
  },
  {
    name: 'scope/output.css',
    data: 'a {\n  b: :scope .d .c.e;\n}\n',
  },
  {
    name: 'host/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host .c", ".d .e")}\n',
  },
  {
    name: 'host/output.css',
    data: 'a {\n  b: :host .d .c.e;\n}\n',
  },
  {
    name: 'host_context/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":host-context(f g) .c", ".d .e")}\n',
  },
  {
    name: 'host_context/output.css',
    data: 'a {\n  b: :host-context(f g) .d .c.e;\n}\n',
  },
  {
    name: 'mixed/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":root .c .d", ":scope .e .f")}\n',
  },
  {
    name: 'mixed/output.css',
    data: 'a {\n  b: :root:scope .c .e .d.f, :root:scope .e .c .d.f;\n}\n',
  },
]
