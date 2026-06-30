export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n\n$id: meta.inspect((a#b:c)...)',
  },
  {
    name: 'error',
    data: "Error: Variable keyword argument map must have string keys.\n(a #b) is not a string in (a #b: c).\n  ,\n3 | $id: meta.inspect((a#b:c)...)\n  |                   ^^^^^^^\n  '\n  input.scss 3:19  root stylesheet\n",
  },
]
