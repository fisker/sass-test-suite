export default [
  {
    name: 'before_colon/loud/input.scss',
    data: '$a /**/: b\n',
  },
  {
    name: 'before_colon/loud/output.css',
    data: '',
  },
  {
    name: 'before_colon/silent/input.scss',
    data: '$a //\n  : b\n',
  },
  {
    name: 'before_colon/silent/output.css',
    data: '',
  },
  {
    name: 'after_colon/loud/input.scss',
    data: '$a: /**/ b\n',
  },
  {
    name: 'after_colon/loud/output.css',
    data: '',
  },
  {
    name: 'after_colon/silent/input.scss',
    data: '$a: //\n  b\n',
  },
  {
    name: 'after_colon/silent/output.css',
    data: '',
  },
  {
    name: 'after_value/loud/input.scss',
    data: '$a: b /**/\n',
  },
  {
    name: 'after_value/loud/output.css',
    data: '',
  },
  {
    name: 'after_value/silent/input.scss',
    data: '$a: b //\n',
  },
  {
    name: 'after_value/silent/output.css',
    data: '',
  },
]
