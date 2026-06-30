// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/at_root/whitespace.hrx

export default [
  {
    name: 'before_query/scss/input.scss',
    data: '@at-root\n  (without: media) {}\n',
  },
  {
    name: 'before_query/scss/output.css',
    data: '',
  },
  {
    name: 'after_open_paren/scss/input.scss',
    data: '@at-root (\n  without: media) {}\n',
  },
  {
    name: 'after_open_paren/scss/output.css',
    data: '',
  },
  {
    name: 'after_open_paren/sass/input.sass',
    data: '@at-root (\n  without: media)\n',
  },
  {
    name: 'after_open_paren/sass/output.css',
    data: '',
  },
  {
    name: 'before_colon/scss/input.scss',
    data: '@at-root (without\n : media) {}\n',
  },
  {
    name: 'before_colon/scss/output.css',
    data: '',
  },
  {
    name: 'before_colon/sass/input.sass',
    data: '@at-root (without\n  : media)\n',
  },
  {
    name: 'before_colon/sass/output.css',
    data: '',
  },
  {
    name: 'after_colon/scss/input.scss',
    data: '@at-root (without: \n  media) {}\n',
  },
  {
    name: 'after_colon/scss/output.css',
    data: '',
  },
  {
    name: 'after_colon/sass/input.sass',
    data: '@at-root (without:\n  media)\n',
  },
  {
    name: 'after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'before_close_paren/scss/input.scss',
    data: '@at-root (without: media\n  ) {}\n',
  },
  {
    name: 'before_close_paren/scss/output.css',
    data: '',
  },
  {
    name: 'before_close_paren/sass/input.sass',
    data: '@at-root (without: media\n  )\n',
  },
  {
    name: 'before_close_paren/sass/output.css',
    data: '',
  },
  {
    name: 'after_query/scss/input.scss',
    data: '@at-root (without: media) \n  {}\n',
  },
  {
    name: 'after_query/scss/output.css',
    data: '',
  },
  {
    name: 'no_query/scss/input.scss',
    data: '@at-root\n  {}\n',
  },
  {
    name: 'no_query/scss/output.css',
    data: '',
  },
  {
    name: 'no_query/sass/input.sass',
    data: 'a\n  @at-root\n    b\n      c: d\n',
  },
  {
    name: 'no_query/sass/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'error/before_query/sass/input.sass',
    data: '@at-root\n  (without: media)\n',
  },
  {
    name: 'error/before_query/sass/error',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n2 |   (without: media)\n  |   ^^^^^^^^^^^^^^^^\n  '\n    input.sass 2:3  root stylesheet\n\nError: expected selector.\n  ,\n1 | @at-root\n  |         ^\n  '\n  input.sass 1:9  root stylesheet\n",
  },
]
