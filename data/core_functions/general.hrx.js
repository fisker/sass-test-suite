// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/general.hrx

export default [
  {
    name: 'global/input.scss',
    data: '@use "sass:math" as *;\na {b: compatible(1px, 1in)}\n',
  },
  {
    name: 'global/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'as/input.scss',
    data: '@use "sass:math" as m;\na {b: m.round(0.7)}\n',
  },
  {
    name: 'as/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'error/set_variable/input.scss',
    data: '@use "sass:math";\nmath.$a: b;\n',
  },
  {
    name: 'error/set_variable/error',
    data: "Error: Undefined variable.\n  ,\n2 | math.$a: b;\n  | ^^^^^^^^^^\n  '\n  input.scss 2:1  root stylesheet\n",
  },
  {
    name: 'forward/bare/input.scss',
    data: '@use "other";\na {b: other.round(0.7)}\n',
  },
  {
    name: 'forward/bare/_other.scss',
    data: '@forward "sass:math";\n',
  },
  {
    name: 'forward/bare/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'forward/show/input.scss',
    data: '@use "other";\na {b: other.round(0.7)}\n',
  },
  {
    name: 'forward/show/_other.scss',
    data: '@forward "sass:math" show round;\n',
  },
  {
    name: 'forward/show/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'forward/hide/input.scss',
    data: '@use "other";\na {b: other.round(0.7)}\n',
  },
  {
    name: 'forward/hide/_other.scss',
    data: '@forward "sass:math" hide ceil;\n',
  },
  {
    name: 'forward/hide/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'forward/as/input.scss',
    data: '@use "other";\na {b: other.s-round(0.7)}\n',
  },
  {
    name: 'forward/as/_other.scss',
    data: '@forward "sass:math" as s-*;\n',
  },
  {
    name: 'forward/as/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'forward/error/show/input.scss',
    data: '@use "other";\na {b: other.round(0.7)}\n',
  },
  {
    name: 'forward/error/show/_other.scss',
    data: '@forward "sass:math" show ceil;\n',
  },
  {
    name: 'forward/error/show/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: other.round(0.7)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'forward/error/hide/input.scss',
    data: '@use "other";\na {b: other.round(0.7)}\n',
  },
  {
    name: 'forward/error/hide/_other.scss',
    data: '@forward "sass:math" hide round;\n',
  },
  {
    name: 'forward/error/hide/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: other.round(0.7)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
