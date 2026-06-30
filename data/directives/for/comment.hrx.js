// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/for/comment.hrx

export default [
  {
    name: 'before_var/loud/scss/input.scss',
    data: '@for /**/ $i from 1 through 10 {}\n',
  },
  {
    name: 'before_var/loud/scss/output.css',
    data: '',
  },
  {
    name: 'before_var/loud/sass/input.sass',
    data: '@for /**/ $i from 1 through 10\n\n',
  },
  {
    name: 'before_var/loud/sass/output.css',
    data: '',
  },
  {
    name: 'before_var/silent/scss/input.scss',
    data: '@for //\n  $i from 1 through 10 {}\n',
  },
  {
    name: 'before_var/silent/scss/output.css',
    data: '',
  },
  {
    name: 'before_var/silent/sass/input.sass',
    data: '@for //\n  $i from 1 through 10\n',
  },
  {
    name: 'before_var/silent/sass/output.css',
    data: '',
  },
  {
    name: 'before_from/silent/sass/input.sass',
    data: '@for $i //\n  from 1 through 10\n',
  },
  {
    name: 'before_from/silent/sass/output.css',
    data: '',
  },
  {
    name: 'before_from/silent/scss/input.scss',
    data: '@for $i //\n  from 1 through 10 {}\n',
  },
  {
    name: 'before_from/silent/scss/output.css',
    data: '',
  },
  {
    name: 'before_from/loud/scss/input.scss',
    data: '@for $i /**/ from 1 through 10 {}\n',
  },
  {
    name: 'before_from/loud/scss/output.css',
    data: '',
  },
  {
    name: 'before_from/loud/sass/input.sass',
    data: '@for $i /**/ from 1 through 10\n\n',
  },
  {
    name: 'before_from/loud/sass/output.css',
    data: '',
  },
  {
    name: 'after_from/silent/sass/input.sass',
    data: '@for $i from //\n  1 through 10\n',
  },
  {
    name: 'after_from/silent/sass/output.css',
    data: '',
  },
  {
    name: 'after_from/silent/scss/input.scss',
    data: '@for $i from //\n  1 through 10 {}\n',
  },
  {
    name: 'after_from/silent/scss/output.css',
    data: '',
  },
  {
    name: 'after_from/loud/scss/input.scss',
    data: '@for $i from /**/ 1 through 10 {}\n',
  },
  {
    name: 'after_from/loud/scss/output.css',
    data: '',
  },
  {
    name: 'after_from/loud/sass/input.sass',
    data: '@for $i from /**/ 1 through 10\n\n',
  },
  {
    name: 'after_from/loud/sass/output.css',
    data: '',
  },
  {
    name: 'before_through/silent/sass/input.sass',
    data: '@for $i from 1 //\n  through 10\n',
  },
  {
    name: 'before_through/silent/sass/output.css',
    data: '',
  },
  {
    name: 'before_through/silent/scss/input.scss',
    data: '@for $i from 1 //\n  through 10 {}\n',
  },
  {
    name: 'before_through/silent/scss/output.css',
    data: '',
  },
  {
    name: 'before_through/loud/scss/input.scss',
    data: '@for $i from 1 /**/ through 10 {}\n',
  },
  {
    name: 'before_through/loud/scss/output.css',
    data: '',
  },
  {
    name: 'before_through/loud/sass/input.sass',
    data: '@for $i from 1 /**/ through 10\n\n',
  },
  {
    name: 'before_through/loud/sass/output.css',
    data: '',
  },
  {
    name: 'after_through/silent/sass/input.sass',
    data: '@for $i from 1 through //\n  10\n\n',
  },
  {
    name: 'after_through/silent/sass/output.css',
    data: '',
  },
  {
    name: 'after_through/silent/scss/input.scss',
    data: '@for $i from 1 through //\n  10 {}\n',
  },
  {
    name: 'after_through/silent/scss/output.css',
    data: '',
  },
  {
    name: 'after_through/loud/scss/input.scss',
    data: '@for $i from 1 through /**/ 10 {}\n',
  },
  {
    name: 'after_through/loud/scss/output.css',
    data: '',
  },
  {
    name: 'after_through/loud/sass/input.sass',
    data: '@for $i from 1 through /**/ 10\n',
  },
  {
    name: 'after_through/loud/sass/output.css',
    data: '',
  },
  {
    name: 'before_block/loud/scss/input.scss',
    data: '@for $i from 1 through 10 /**/ {}\n',
  },
  {
    name: 'before_block/loud/scss/output.css',
    data: '',
  },
  {
    name: 'before_block/loud/sass/input.sass',
    data: '@for $i from 1 through 10 /**/\n\n',
  },
  {
    name: 'before_block/loud/sass/output.css',
    data: '',
  },
  {
    name: 'before_block/silent/scss/input.scss',
    data: '@for $i from 1 through 10 //\n  {}\n',
  },
  {
    name: 'before_block/silent/scss/output.css',
    data: '',
  },
  {
    name: 'before_block/silent/sass/input.sass',
    data: '@for $i from 1 through 10 //\n  \n',
  },
  {
    name: 'before_block/silent/sass/output.css',
    data: '',
  },
]
