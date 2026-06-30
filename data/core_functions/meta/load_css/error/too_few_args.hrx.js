export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css();\n',
  },
  {
    name: 'error',
    data: "Error: Missing argument $url.\n  ,--> input.scss\n2 | @include meta.load-css();\n  | ^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @mixin load-css($url, $with: null) {\n  |        =========================== declaration\n  '\n  input.scss 2:1  root stylesheet\n",
  },
]
