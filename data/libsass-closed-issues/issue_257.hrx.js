// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_257.hrx

export default [
  {
    name: 'input.scss',
    data: 'body{background:blue; a{color:black;}}',
  },
  {
    name: 'output.css',
    data: 'body {\n  background: blue;\n}\nbody a {\n  color: black;\n}\n',
  },
]
