export default [
  {
    name: 'is_unique/input.scss',
    data: '@use "sass:map";\n@use "sass:string";\n// As the name suggests, every call to unique-id() should return a different\n// value.\n$ids: ();\n@for $i from 1 to 1000 {\n  $id: string.unique-id();\n  @if map.has-key($ids, $id) {\n    @error "#{$id} generated more than once";\n  }\n\n  $ids: map.merge($ids, ($id: null));\n}\n',
  },
  {
    name: 'is_unique/output.css',
    data: '',
  },
  {
    name: 'is_identifier/input.scss',
    data: '@use "sass:selector";\n@use "sass:string";\n// Every call to unique-id() should return a valid CSS identifier. We can\'t test\n// this directly, so we make sure it can parse as a class selector with\n// selector-parse().\n@for $i from 1 to 1000 {\n  $_: selector.parse(".#{string.unique-id()}");\n}\n',
  },
  {
    name: 'is_identifier/output.css',
    data: '',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.unique-id(c)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 0 arguments allowed, but 1 was passed.\n  ,--> input.scss\n2 | a {b: string.unique-id(c)}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:string\n1 | @function unique-id() {\n  |           =========== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
