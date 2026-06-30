// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/import/in_css.hrx

export default [
  {
    name: 'string/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'string/plain.css',
    data: '@import "whatever";\n',
  },
  {
    name: 'string/output.css',
    data: '@import "whatever";\n',
  },
  {
    name: 'url/unquoted/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'url/unquoted/plain.css',
    data: '@import url(whatever);\n',
  },
  {
    name: 'url/unquoted/output.css',
    data: '@import url(whatever);\n',
  },
  {
    name: 'url/quoted/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'url/quoted/plain.css',
    data: '@import url("whatever");\n',
  },
  {
    name: 'url/quoted/output.css',
    data: '@import url("whatever");\n',
  },
]
