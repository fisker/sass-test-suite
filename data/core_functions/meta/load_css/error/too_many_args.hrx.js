// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/error/too_many_args.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", (), "a");\n',
  },
  {
    name: 'error',
    data: 'Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | @include meta.load-css("other", (), "a");\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:meta\n1 | @mixin load-css($url, $with: null) {\n  |        =========================== declaration\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
]
