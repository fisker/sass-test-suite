// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/for/whitespace.hrx

export default [
  {
    name: 'before_var/scss/input.scss',
    data: '@for \n  $i from 1 through 10 {}\n',
  },
  {
    name: 'before_var/scss/output.css',
    data: '',
  },
  {
    name: 'before_var/sass/input.sass',
    data: '@for \n  $i from 1 through 10\n\n',
  },
  {
    name: 'before_var/sass/output.css',
    data: '',
  },
  {
    name: 'before_from/scss/input.scss',
    data: '@for $i\n  from 1 through 10 {}\n',
  },
  {
    name: 'before_from/scss/output.css',
    data: '',
  },
  {
    name: 'before_from/sass/input.sass',
    data: '@for $i\n  from 1 through 10\n',
  },
  {
    name: 'before_from/sass/output.css',
    data: '',
  },
  {
    name: 'after_from/scss/input.scss',
    data: '@for $i from \n  1 through 10 {}\n',
  },
  {
    name: 'after_from/scss/output.css',
    data: '',
  },
  {
    name: 'after_from/sass/input.sass',
    data: '@for $i from \n  1 through 10\n',
  },
  {
    name: 'after_from/sass/output.css',
    data: '',
  },
  {
    name: 'before_through/scss/input.scss',
    data: '@for $i from 1\n  through 10 {}\n',
  },
  {
    name: 'before_through/scss/output.css',
    data: '',
  },
  {
    name: 'before_through/sass/input.sass',
    data: '@for $i from 1\n  through 10\n',
  },
  {
    name: 'before_through/sass/output.css',
    data: '',
  },
  {
    name: 'after_through/scss/input.scss',
    data: '@for $i from 1 through\n  10 {}\n\n',
  },
  {
    name: 'after_through/scss/output.css',
    data: '',
  },
  {
    name: 'after_through/sass/input.sass',
    data: '@for $i from 1 through\n  10\n',
  },
  {
    name: 'after_through/sass/output.css',
    data: '',
  },
  {
    name: 'before_to/scss/input.scss',
    data: '@for $i from 1\n  to 10 {}\n',
  },
  {
    name: 'before_to/scss/output.css',
    data: '',
  },
  {
    name: 'before_to/sass/input.sass',
    data: '@for $i from 1\n  to 10\n',
  },
  {
    name: 'before_to/sass/output.css',
    data: '',
  },
  {
    name: 'after_to/scss/input.scss',
    data: '@for $i from 1 to\n  10 {}\n\n',
  },
  {
    name: 'after_to/scss/output.css',
    data: '',
  },
  {
    name: 'after_to/sass/input.sass',
    data: '@for $i from 1 to\n  10\n',
  },
  {
    name: 'after_to/sass/output.css',
    data: '',
  },
  {
    name: 'before_block/scss/input.scss',
    data: '@for $i from 1 through 10 \n  {}\n',
  },
  {
    name: 'before_block/scss/output.css',
    data: '',
  },
]
