export default [
  {
    name: 'calc/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-name(calc(var(--c)))}\n',
  },
  {
    name: 'calc/output.css',
    data: 'a {\n  b: "calc";\n}\n',
  },
  {
    name: 'clamp/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-name(clamp(1%, 2px, 3px))}\n',
  },
  {
    name: 'clamp/output.css',
    data: 'a {\n  b: "clamp";\n}\n',
  },
  {
    name: 'min/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-name(min(var(--c)))}\n',
  },
  {
    name: 'min/output.css',
    data: 'a {\n  b: "min";\n}\n',
  },
  {
    name: 'max/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-name(max(var(--c)))}\n',
  },
  {
    name: 'max/output.css',
    data: 'a {\n  b: "max";\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-name($calc: calc(var(--c)))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: "calc";\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-name()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $calc.\n  ,--> input.scss\n2 | a {b: meta.calc-name()}\n  |       ^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function calc-name($calc) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-name(calc(var(--c)), calc(var(--d)))}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: meta.calc-name(calc(var(--c)), calc(var(--d)))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function calc-name($calc) {\n  |           ================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/invalid_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.calc-name(1)}\n',
  },
  {
    name: 'error/invalid_args/error',
    data: "Error: $calc: 1 is not a calculation.\n  ,\n2 | a {b: meta.calc-name(1)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
