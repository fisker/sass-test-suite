export default [
  {
    name: 'input.scss',
    data: 'test {\n  filter: progid:DXImageTransform.Microsoft.#{Alpha(opacity=20)};\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected "(".\n  ,\n2 |   filter: progid:DXImageTransform.Microsoft.#{Alpha(opacity=20)};\n  |                                             ^\n  \'\n  input.scss 2:45  root stylesheet\n',
  },
]
