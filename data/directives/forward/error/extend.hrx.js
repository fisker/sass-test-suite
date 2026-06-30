export default [
  {
    name: 'input.scss',
    data: '@use "midstream";\n\nin-input {a: b}\n',
  },
  {
    name: 'README.md',
    data: '`@forward` should handle extensions in the same way as `@use`, and as such\nshould produce the same errors when extensions fail. We assume that they use\nshared infrastructure, though, and as such only test a basic case.\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: '_upstream.scss',
    data: 'in-upstream {@extend in-input}\n',
  },
  {
    name: 'error',
    data: 'Error: The target selector was not found.\nUse "@extend in-input !optional" to avoid this error.\n  ,\n1 | in-upstream {@extend in-input}\n  |              ^^^^^^^^^^^^^^^^\n  \'\n  _upstream.scss 1:14  root stylesheet\n',
  },
]
