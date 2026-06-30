// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/simple/pseudo/selector/idempotent/nth_last_child.hrx

export default [
  {
    name: 'simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":nth-last-child(2n + 1 of .c)", ".c", ".d")}\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b: :nth-last-child(2n+1 of .c, .d);\n}\n',
  },
  {
    name: 'list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":nth-last-child(2n + 1 of .c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'list/output.css',
    data: 'a {\n  b: :nth-last-child(2n+1 of .c, .d, .e);\n}\n',
  },
  {
    name: 'same_arg_in_extender/input.scss',
    data: '@use "sass:selector";\na {\n  b: selector.extend(\n      ":nth-last-child(2n + 1 of .c)",\n      ".c",\n      ":nth-last-child(2n + 1 of .d, .e)");\n}\n',
  },
  {
    name: 'same_arg_in_extender/output.css',
    data: 'a {\n  b: :nth-last-child(2n+1 of .c, .d, .e);\n}\n',
  },
  {
    name: 'different_arg_in_extender/input.scss',
    data: '@use "sass:selector";\n// This should produce\n// `:nth-last-child(2n + 1 of .c, :nth-last-child(2n + 1 of .d, .e))`.\n// See sass/sass#2828.\na {\n  b: selector.extend(\n      ":nth-last-child(2n + 1 of .c)",\n      ".c",\n      ":nth-last-child(2n + 2 of .d, .e)");\n}\n',
  },
  {
    name: 'different_arg_in_extender/output.css',
    data: 'a {\n  b: :nth-last-child(2n+1 of .c);\n}\n',
  },
]
