export default [
  {
    name: 'input.scss',
    data: "// A content block may not be passed to a mixin that doesn't include `@content`.\n@mixin no-content {}\n@include no-content {}\n",
  },
  {
    name: 'error',
    data: "Error: Mixin doesn't accept a content block.\n  ,\n2 | @mixin no-content {}\n  |        ========== declaration\n3 | @include no-content {}\n  | ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  input.scss 3:1  root stylesheet\n",
  },
]
