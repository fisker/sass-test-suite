// https://github.com/sass/sass-spec/blob/HEAD/spec/values/maps/invalid-key.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n\n$id: meta.inspect((a,b:c)...)\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n3 | $id: meta.inspect((a,b:c)...)\n  |                       ^\n  \'\n  input.scss 3:23  root stylesheet\n',
  },
]
