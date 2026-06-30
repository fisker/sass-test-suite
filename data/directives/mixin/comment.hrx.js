export default [
  {
    name: 'mixin/before_name/loud/input.scss',
    data: '@mixin /**/ a {}\n',
  },
  {
    name: 'mixin/before_name/loud/output.css',
    data: '',
  },
  {
    name: 'mixin/before_name/silent/input.scss',
    data: '@mixin //\n  a {}\n',
  },
  {
    name: 'mixin/before_name/silent/output.css',
    data: '',
  },
  {
    name: 'mixin/after_args/loud/input.scss',
    data: '@mixin a() /**/ {}\n',
  },
  {
    name: 'mixin/after_args/loud/output.css',
    data: '',
  },
  {
    name: 'mixin/after_args/silent/input.scss',
    data: '@mixin a() //\n  {}\n',
  },
  {
    name: 'mixin/after_args/silent/output.css',
    data: '',
  },
  {
    name: 'content/after_content/loud/input.scss',
    data: '@mixin a {@content /**/}\n',
  },
  {
    name: 'content/after_content/loud/output.css',
    data: '',
  },
  {
    name: 'content/after_content/silent/input.scss',
    data: '@mixin a {\n  @content //\n}\n',
  },
  {
    name: 'content/after_content/silent/output.css',
    data: '',
  },
  {
    name: 'content/after_args/loud/input.scss',
    data: '@mixin a {@content() /**/}\n',
  },
  {
    name: 'content/after_args/loud/output.css',
    data: '',
  },
  {
    name: 'content/after_args/silent/input.scss',
    data: '@mixin a {\n  @content() //\n}\n',
  },
  {
    name: 'content/after_args/silent/output.css',
    data: '',
  },
  {
    name: 'include/before_name/loud/input.scss',
    data: '@mixin a {}\n@include /**/ a\n',
  },
  {
    name: 'include/before_name/loud/output.css',
    data: '',
  },
  {
    name: 'include/before_name/silent/input.scss',
    data: '@mixin a {}\n@include //\n  a\n',
  },
  {
    name: 'include/before_name/silent/output.css',
    data: '',
  },
  {
    name: 'include/after_name/loud/input.scss',
    data: '@mixin a {}\n@include a /**/\n',
  },
  {
    name: 'include/after_name/loud/output.css',
    data: '',
  },
  {
    name: 'include/after_name/silent/input.scss',
    data: '@mixin a {}\n@include a //\n',
  },
  {
    name: 'include/after_name/silent/output.css',
    data: '',
  },
  {
    name: 'include/after_args/loud/input.scss',
    data: '@mixin a {}\n@include a() /**/\n',
  },
  {
    name: 'include/after_args/loud/output.css',
    data: '',
  },
  {
    name: 'include/after_args/silent/input.scss',
    data: '@mixin a {}\n@include a() //\n',
  },
  {
    name: 'include/after_args/silent/output.css',
    data: '',
  },
  {
    name: 'include/before_block/loud/input.scss',
    data: '@mixin a {@content}\n@include a() /**/ {}\n',
  },
  {
    name: 'include/before_block/loud/output.css',
    data: '',
  },
  {
    name: 'include/before_block/silent/input.scss',
    data: '@mixin a {@content}\n@include a() //\n  {}\n',
  },
  {
    name: 'include/before_block/silent/output.css',
    data: '',
  },
  {
    name: 'include/before_using/loud/input.scss',
    data: '@mixin a {@content}\n@include a() /**/ using () {}\n',
  },
  {
    name: 'include/before_using/loud/output.css',
    data: '',
  },
  {
    name: 'include/before_using/silent/input.scss',
    data: '@mixin a {@content}\n@include a() //\n  using () {}\n',
  },
  {
    name: 'include/before_using/silent/output.css',
    data: '',
  },
  {
    name: 'include/after_using/loud/input.scss',
    data: '@mixin a {@content}\n@include a() using /**/ () {}\n',
  },
  {
    name: 'include/after_using/loud/output.css',
    data: '',
  },
  {
    name: 'include/after_using/silent/input.scss',
    data: '@mixin a {@content}\n@include a() using //\n  () {}\n',
  },
  {
    name: 'include/after_using/silent/output.css',
    data: '',
  },
  {
    name: 'include/after_using_arglist/loud/input.scss',
    data: '@mixin a {@content}\n@include a() using () /**/ {}\n',
  },
  {
    name: 'include/after_using_arglist/loud/output.css',
    data: '',
  },
  {
    name: 'include/after_using_arglist/silent/input.scss',
    data: '@mixin a {@content}\n@include a() using () //\n  {}\n',
  },
  {
    name: 'include/after_using_arglist/silent/output.css',
    data: '',
  },
]
