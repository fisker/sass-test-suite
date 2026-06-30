// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1596.hrx

export default [
  {
    name: 'input.scss',
    data: '@document url(http://www.w3.org/),\n               url-prefix(http://www.w3.org/Style/),\n               domain(mozilla.org),\n               regexp("https:.*");\n',
  },
  {
    name: 'output.css',
    data: '@document url(http://www.w3.org/),\n               url-prefix(http://www.w3.org/Style/),\n               domain(mozilla.org),\n               regexp("https:.*");\n',
  },
]
