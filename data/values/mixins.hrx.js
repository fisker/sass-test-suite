export default [
  {
    name: 'error/addition/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n@mixin b() {}\na {b: meta.get-mixin(a) + meta.get-mixin(b)}\n',
  },
  {
    name: 'error/addition/error',
    data: 'Error: get-mixin("a") isn\'t a valid CSS value.\n  ,\n4 | a {b: meta.get-mixin(a) + meta.get-mixin(b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:7  root stylesheet\n',
  },
  {
    name: 'error/subtraction/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n@mixin b() {}\na {b: meta.get-mixin(a) - meta.get-mixin(b)}\n',
  },
  {
    name: 'error/subtraction/error',
    data: 'Error: get-mixin("a") isn\'t a valid CSS value.\n  ,\n4 | a {b: meta.get-mixin(a) - meta.get-mixin(b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:7  root stylesheet\n',
  },
  {
    name: 'error/multiplication/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n@mixin b() {}\na {b: meta.get-mixin(a) * meta.get-mixin(b)}\n',
  },
  {
    name: 'error/multiplication/error',
    data: 'Error: Undefined operation "get-mixin("a") * get-mixin("b")".\n  ,\n4 | a {b: meta.get-mixin(a) * meta.get-mixin(b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:7  root stylesheet\n',
  },
  {
    name: 'error/division/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n@mixin b() {}\na {b: meta.get-mixin(a) / meta.get-mixin(b)}\n',
  },
  {
    name: 'error/division/error',
    data: 'Error: get-mixin("a") isn\'t a valid CSS value.\n  ,\n4 | a {b: meta.get-mixin(a) / meta.get-mixin(b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:7  root stylesheet\n',
  },
  {
    name: 'error/modulo/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n@mixin b() {}\na {b: meta.get-mixin(a) % meta.get-mixin(b)}\n',
  },
  {
    name: 'error/modulo/error',
    data: 'Error: Undefined operation "get-mixin("a") % get-mixin("b")".\n  ,\n4 | a {b: meta.get-mixin(a) % meta.get-mixin(b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 4:7  root stylesheet\n',
  },
]
