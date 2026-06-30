// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/error/too_few_args.hrx

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
