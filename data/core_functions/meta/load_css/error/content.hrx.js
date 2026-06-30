// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/error/content.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other") {};\n',
  },
  {
    name: '_other.scss',
    data: '',
  },
  {
    name: 'error',
    data: "Error: Mixin doesn't accept a content block.\n  ,--> input.scss\n2 | @include meta.load-css(\"other\") {};\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @mixin load-css($url, $with: null) {\n  |        =========================== declaration\n  '\n  input.scss 2:1  root stylesheet\n",
  },
]
