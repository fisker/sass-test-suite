export default [
  {
    name: 'one_arg/length/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: list.length(meta.calc-args(calc(var(--c))))}\n',
  },
  {
    name: 'one_arg/length/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'one_arg/first/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: list.nth(meta.calc-args(calc(var(--c))), 1)}\n',
  },
  {
    name: 'one_arg/first/output.css',
    data: 'a {\n  b: var(--c);\n}\n',
  },
  {
    name: 'multi_args/length/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: list.length(meta.calc-args(clamp(1%, 2px, 3px)))}\n',
  },
  {
    name: 'multi_args/length/output.css',
    data: 'a {\n  b: 3;\n}\n',
  },
  {
    name: 'multi_args/first/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: list.nth(meta.calc-args(clamp(1%, 2px, 3px)), 1)}\n',
  },
  {
    name: 'multi_args/first/output.css',
    data: 'a {\n  b: 1%;\n}\n',
  },
  {
    name: 'multi_args/second/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: list.nth(meta.calc-args(clamp(1%, 2px, 3px)), 2)}\n',
  },
  {
    name: 'multi_args/second/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'multi_args/third/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: list.nth(meta.calc-args(clamp(1%, 2px, 3px)), 3)}\n',
  },
  {
    name: 'multi_args/third/output.css',
    data: 'a {\n  b: 3px;\n}\n',
  },
  {
    name: 'type/number/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.type-of(list.nth(meta.calc-args(min(1%, 2px)), 1))}\n',
  },
  {
    name: 'type/number/output.css',
    data: 'a {\n  b: number;\n}\n',
  },
  {
    name: 'type/css_function/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.type-of(list.nth(meta.calc-args(calc(var(--c))), 1))}\n',
  },
  {
    name: 'type/css_function/output.css',
    data: 'a {\n  b: string;\n}\n',
  },
  {
    name: 'type/interpolation/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.type-of(list.nth(meta.calc-args(calc(#{1px})), 1))}\n',
  },
  {
    name: 'type/interpolation/output.css',
    data: 'a {\n  b: string;\n}\n',
  },
  {
    name: 'type/math/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.type-of(list.nth(meta.calc-args(calc(1% + 1px)), 1))}\n',
  },
  {
    name: 'type/math/output.css',
    data: 'a {\n  b: string;\n}\n',
  },
  {
    name: 'type/string_variable/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n$a: b;\nc {d: meta.type-of(list.nth(meta.calc-args(calc($a)), 1))}\n',
  },
  {
    name: 'type/string_variable/output.css',
    data: 'c {\n  d: string;\n}\n',
  },
  {
    name: 'type/calculation/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.type-of(list.nth(meta.calc-args(min(max(1%, 1px), 2px)), 1))}\n',
  },
  {
    name: 'type/calculation/output.css',
    data: 'a {\n  b: calculation;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-args($calc: calc(var(--c)))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: var(--c);\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-args()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $calc.\n  ,--> input.scss\n2 | a {b: meta.calc-args()}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function calc-args($calc) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-args(calc(var(--c)), calc(var(--d)))}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: meta.calc-args(calc(var(--c)), calc(var(--d)))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function calc-args($calc) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/invalid_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-args(1)}\n',
  },
  {
    name: 'error/invalid_args/error',
    data: "Error: $calc: 1 is not a calculation.\n  ,\n2 | a {b: meta.calc-args(1)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
