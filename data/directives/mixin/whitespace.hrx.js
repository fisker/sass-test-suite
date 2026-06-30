export default [
  {
    name: 'mixin/before_name/scss/input.scss',
    data: '@mixin\n  a {}\n',
  },
  {
    name: 'mixin/before_name/scss/output.css',
    data: '',
  },
  {
    name: 'mixin/before_name/sass/input.sass',
    data: '@mixin\n  a\n',
  },
  {
    name: 'mixin/before_name/sass/output.css',
    data: '',
  },
  {
    name: 'mixin/after_args/scss/input.scss',
    data: '@mixin a()\n  {}\n',
  },
  {
    name: 'mixin/after_args/scss/output.css',
    data: '',
  },
  {
    name: 'mixin/equals/before_name/sass/input.sass',
    data: '=\n  a\n\nd\n  @include a\n',
  },
  {
    name: 'mixin/equals/before_name/sass/output.css',
    data: '',
  },
  {
    name: 'include/before_name/scss/input.scss',
    data: '@mixin a {}\n@include\n  a\n',
  },
  {
    name: 'include/before_name/scss/output.css',
    data: '',
  },
  {
    name: 'include/before_name/sass/input.sass',
    data: '@mixin a\n@include\n  a\n',
  },
  {
    name: 'include/before_name/sass/output.css',
    data: '',
  },
  {
    name: 'include/plus/none_before_name/sass/input.sass',
    data: '@mixin a\n  b: c\nd\n  +a\n',
  },
  {
    name: 'include/plus/none_before_name/sass/output.css',
    data: 'd {\n  b: c;\n}\n',
  },
  {
    name: 'include/plus/space_before_name/sass/input.sass',
    data: '@mixin a\n  b: c\nd\n  + a\n',
  },
  {
    name: 'include/plus/space_before_name/sass/output.css',
    data: '',
  },
  {
    name: 'include/plus/space_before_name/sass/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n4 |   + a\n  |   ^^^\n  '\n    input.sass 4:3  root stylesheet\n",
  },
  {
    name: 'include/plus/newline_before_name/sass/input.sass',
    data: '@mixin a\n  b: c\nd\n  +\n    a\n',
  },
  {
    name: 'include/plus/newline_before_name/sass/output.css',
    data: '',
  },
  {
    name: 'include/plus/newline_before_name/sass/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n5 |     a\n  |     ^\n  '\n    input.sass 5:5  root stylesheet\n",
  },
  {
    name: 'include/plus/before_name/sass/input.sass',
    data: '@mixin a\nb\n  +\n    a\n',
  },
  {
    name: 'include/plus/before_name/sass/output.css',
    data: '',
  },
  {
    name: 'include/plus/before_name/sass/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n4 |     a\n  |     ^\n  '\n    input.sass 4:5  root stylesheet\n",
  },
  {
    name: 'include/before_block/scss/input.scss',
    data: '@mixin a {@content}\n@include a()\n  {}\n',
  },
  {
    name: 'include/before_block/scss/output.css',
    data: '',
  },
  {
    name: 'include/before_using/scss/input.scss',
    data: '@mixin a {@content}\n@include a()\n  using () {}\n',
  },
  {
    name: 'include/before_using/scss/output.css',
    data: '',
  },
  {
    name: 'include/after_using/scss/input.scss',
    data: '@mixin a {@content}\n@include a() using\n  () {}\n',
  },
  {
    name: 'include/after_using/scss/output.css',
    data: '',
  },
  {
    name: 'include/after_using/sass/input.sass',
    data: '@mixin a\n  @content\n@include a() using\n  ()\n',
  },
  {
    name: 'include/after_using/sass/output.css',
    data: '',
  },
  {
    name: 'include/after_using_arglist/scss/input.scss',
    data: '@mixin a {@content}\n@include a() using ()\n  {}\n',
  },
  {
    name: 'include/after_using_arglist/scss/output.css',
    data: '',
  },
  {
    name: 'error/include/before_using/sass/input.sass',
    data: '@mixin a \n  @content\n@include a()\n  using ()\n',
  },
  {
    name: 'error/include/before_using/sass/error',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n4 |   using ()\n  |   ^^^^^^^^\n  '\n    input.sass 4:3  root stylesheet\n\nError: expected selector.\n  ,\n4 |   using ()\n  |         ^\n  '\n  input.sass 4:9  @content\n  input.sass 2:3  a()\n  input.sass 3:1  root stylesheet\n",
  },
]
