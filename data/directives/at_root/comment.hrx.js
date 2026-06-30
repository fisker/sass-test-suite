// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/at_root/comment.hrx

export default [
  {
    name: 'before_query/loud/input.scss',
    data: '@at-root /**/ (without: media) {}\n',
  },
  {
    name: 'before_query/loud/output.css',
    data: '',
  },
  {
    name: 'before_query/silent/input.scss',
    data: '@at-root //\n  (without: media) {}\n',
  },
  {
    name: 'before_query/silent/output.css',
    data: '',
  },
  {
    name: 'after_open_paren/loud/input.scss',
    data: '@at-root (/**/ without: media) {}\n',
  },
  {
    name: 'after_open_paren/loud/output.css',
    data: '',
  },
  {
    name: 'after_open_paren/silent/input.scss',
    data: '@at-root (//\n  without: media) {}\n',
  },
  {
    name: 'after_open_paren/silent/output.css',
    data: '',
  },
  {
    name: 'before_colon/loud/input.scss',
    data: '@at-root (without /**/ : media) {}\n',
  },
  {
    name: 'before_colon/loud/output.css',
    data: '',
  },
  {
    name: 'before_colon/silent/input.scss',
    data: '@at-root (without //\n  : media) {}\n',
  },
  {
    name: 'before_colon/silent/output.css',
    data: '',
  },
  {
    name: 'after_colon/loud/input.scss',
    data: '@at-root (without: /**/ media) {}\n',
  },
  {
    name: 'after_colon/loud/output.css',
    data: '',
  },
  {
    name: 'after_colon/silent/input.scss',
    data: '@at-root (without: //\n  media) {}\n',
  },
  {
    name: 'after_colon/silent/output.css',
    data: '',
  },
  {
    name: 'before_close_paren/loud/input.scss',
    data: '@at-root (without: media /**/) {}\n',
  },
  {
    name: 'before_close_paren/loud/output.css',
    data: '',
  },
  {
    name: 'before_close_paren/silent/input.scss',
    data: '@at-root (without: media //\n  ) {}\n',
  },
  {
    name: 'before_close_paren/silent/output.css',
    data: '',
  },
  {
    name: 'after_query/loud/input.scss',
    data: '@at-root (without: media) /**/ {}\n',
  },
  {
    name: 'after_query/loud/output.css',
    data: '',
  },
  {
    name: 'after_query/silent/input.scss',
    data: '@at-root (without: media) //\n  {}\n',
  },
  {
    name: 'after_query/silent/output.css',
    data: '',
  },
  {
    name: 'no_query/loud/input.scss',
    data: '@at-root /**/ {}\n',
  },
  {
    name: 'no_query/loud/output.css',
    data: '',
  },
  {
    name: 'no_query/silent/input.scss',
    data: '@at-root //\n  {}\n',
  },
  {
    name: 'no_query/silent/output.css',
    data: '',
  },
]
