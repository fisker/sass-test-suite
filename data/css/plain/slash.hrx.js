// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/slash.hrx

export default [
  {
    name: 'with_intermediate/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'with_intermediate/plain.css',
    data: 'a {b: 1/2/foo/bar}\n',
  },
  {
    name: 'with_intermediate/output.css',
    data: 'a {\n  b: 1/2/foo/bar;\n}\n',
  },
  {
    name: 'without_intermediate/whitespace/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'without_intermediate/whitespace/plain.css',
    data: 'a {b: 1/ / /bar}\n',
  },
  {
    name: 'without_intermediate/whitespace/output.css',
    data: 'a {\n  b: 1///bar;\n}\n',
  },
  {
    name: 'without_intermediate/no_whitespace/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'without_intermediate/no_whitespace/plain.css',
    data: 'a {b: 1///bar}\n',
  },
  {
    name: 'without_intermediate/no_whitespace/output.css',
    data: 'a {\n  b: 1///bar;\n}\n',
  },
]
