// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/no_op.hrx

export default [
  {
    name: 'missing/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "d", "e")}\n',
  },
  {
    name: 'missing/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'conflict/element/alone/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c.d", ".d", "e")}\n',
  },
  {
    name: 'conflict/element/alone/output.css',
    data: 'a {\n  b: c.d;\n}\n',
  },
  {
    name: 'conflict/element/with_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c.d", ".d", "e.f")}\n',
  },
  {
    name: 'conflict/element/with_class/output.css',
    data: 'a {\n  b: c.d;\n}\n',
  },
  {
    name: 'conflict/id/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("#c.d", ".d", "#e")}\n',
  },
  {
    name: 'conflict/id/output.css',
    data: 'a {\n  b: #c.d;\n}\n',
  },
  {
    name: 'conflict/pseudo_element/unknown/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::c.d", ".d", "::e")}\n',
  },
  {
    name: 'conflict/pseudo_element/unknown/output.css',
    data: 'a {\n  b: ::c.d;\n}\n',
  },
  {
    name: 'conflict/pseudo_element/class_syntax/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":before.c", ".c", ":after")}\n',
  },
  {
    name: 'conflict/pseudo_element/class_syntax/output.css',
    data: 'a {\n  b: :before.c;\n}\n',
  },
  {
    name: 'conflict/universal/namespace_and_namespace/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*.d", ".d", "e|*")}\n',
  },
  {
    name: 'conflict/universal/namespace_and_namespace/output.css',
    data: 'a {\n  b: c|*.d;\n}\n',
  },
  {
    name: 'conflict/universal/namespace_and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*.d", ".d", "|*")}\n',
  },
  {
    name: 'conflict/universal/namespace_and_empty/output.css',
    data: 'a {\n  b: c|*.d;\n}\n',
  },
  {
    name: 'conflict/universal/empty_and_namespace/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*.c", ".c", "d|*")}\n',
  },
  {
    name: 'conflict/universal/empty_and_namespace/output.css',
    data: 'a {\n  b: |*.c;\n}\n',
  },
  {
    name: 'conflict/universal/namespace_and_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c|*.d", ".d", "*")}\n',
  },
  {
    name: 'conflict/universal/namespace_and_default/output.css',
    data: 'a {\n  b: c|*.d;\n}\n',
  },
  {
    name: 'conflict/universal/default_and_namespace/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*.c", ".c", "d|*")}\n',
  },
  {
    name: 'conflict/universal/default_and_namespace/output.css',
    data: 'a {\n  b: *.c;\n}\n',
  },
  {
    name: 'conflict/universal/empty_and_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("|*.c", ".c", "*")}\n',
  },
  {
    name: 'conflict/universal/empty_and_default/output.css',
    data: 'a {\n  b: |*.c;\n}\n',
  },
  {
    name: 'conflict/universal/default_and_empty/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("*.c", ".c", "|*")}\n',
  },
  {
    name: 'conflict/universal/default_and_empty/output.css',
    data: 'a {\n  b: *.c;\n}\n',
  },
  {
    name: 'conflict/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c > .d", ".d", "e > .f")}\n',
  },
  {
    name: 'conflict/parent/output.css',
    data: 'a {\n  b: c > .d;\n}\n',
  },
  {
    name: 'conflict/next_sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c + .d", ".d", "e + .f")}\n',
  },
  {
    name: 'conflict/next_sibling/output.css',
    data: 'a {\n  b: c + .d;\n}\n',
  },
  {
    name: 'unification/identical_to_extendee/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c.d", ".d", ".d")}\n',
  },
  {
    name: 'unification/identical_to_extendee/output.css',
    data: 'a {\n  b: c.d;\n}\n',
  },
  {
    name: 'unification/identical_to_selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c.d", ".d", "c.d")}\n',
  },
  {
    name: 'unification/identical_to_selector/output.css',
    data: 'a {\n  b: c.d;\n}\n',
  },
  {
    name: 'unification/additional/simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "c", "c.d")}\n',
  },
  {
    name: 'unification/additional/simple/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'unification/additional/ancestor/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "c", "d c")}\n',
  },
  {
    name: 'unification/additional/ancestor/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'unification/additional/parent/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "c", "d > c")}\n',
  },
  {
    name: 'unification/additional/parent/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'unification/additional/sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "c", "d ~ c")}\n',
  },
  {
    name: 'unification/additional/sibling/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'unification/additional/next_sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("c", "c", "d + c")}\n',
  },
  {
    name: 'unification/additional/next_sibling/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'unification/subselector_of_target/is/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c:is(d)", ":is(d)", "d.e")}\n',
  },
  {
    name: 'unification/subselector_of_target/is/output.css',
    data: 'a {\n  b: .c:is(d);\n}\n',
  },
  {
    name: 'unification/subselector_of_target/where/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c:where(d)", ":where(d)", "d.e")}\n',
  },
  {
    name: 'unification/subselector_of_target/where/output.css',
    data: 'a {\n  b: .c:where(d);\n}\n',
  },
  {
    name: 'unification/subselector_of_target/matches/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c:matches(d)", ":matches(d)", "d.e")}\n',
  },
  {
    name: 'unification/subselector_of_target/matches/output.css',
    data: 'a {\n  b: .c:matches(d);\n}\n',
  },
  {
    name: 'unification/specificity_modification/where/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.extend(":where(.x)", ".x", ".x .y");\n}\n',
  },
  {
    name: 'unification/specificity_modification/where/output.css',
    data: 'a {\n  b: :where(.x, .x .y);\n}\n',
  },
]
