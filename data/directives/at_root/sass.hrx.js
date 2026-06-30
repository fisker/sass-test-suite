// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/at_root/sass.hrx

export default [
  {
    name: 'empty/no_query/input.sass',
    data: '@at-root\n',
  },
  {
    name: 'empty/no_query/output.css',
    data: '',
  },
  {
    name: 'empty/query/input.sass',
    data: '@at-root (with: rule)\n',
  },
  {
    name: 'empty/query/output.css',
    data: '',
  },
  {
    name: 'empty/selector/input.sass',
    data: '@at-root a\n',
  },
  {
    name: 'empty/selector/output.css',
    data: '',
  },
  {
    name: 'empty/selector/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | @at-root a\n  |          ^\n  '\n    input.sass 1:10  root stylesheet\n",
  },
]
