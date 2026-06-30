export default [
  {
    name: 'whitespace/none/input.sass',
    data: '$a: (b: c, d: e)\n',
  },
  {
    name: 'whitespace/none/output.css',
    data: '',
  },
  {
    name: 'whitespace/after_lparen/input.sass',
    data: '$a: (\n  b: c, d: e)\n',
  },
  {
    name: 'whitespace/after_lparen/output.css',
    data: '',
  },
  {
    name: 'whitespace/after_first_key/input.sass',
    data: '$a: (b\n  : c, d: e)\n',
  },
  {
    name: 'whitespace/after_first_key/output.css',
    data: '',
  },
  {
    name: 'whitespace/after_first_colon/input.sass',
    data: '$a: (b:\n  c, d: e)\n',
  },
  {
    name: 'whitespace/after_first_colon/output.css',
    data: '',
  },
  {
    name: 'whitespace/after_first_value/input.sass',
    data: '$a: (b: c\n  , d: e)\n',
  },
  {
    name: 'whitespace/after_first_value/output.css',
    data: '',
  },
  {
    name: 'whitespace/between_values/input.sass',
    data: '$a: (b: c\n  d, d: e)\n',
  },
  {
    name: 'whitespace/between_values/output.css',
    data: '',
  },
  {
    name: 'whitespace/after_comma/input.sass',
    data: '$a: (b: c,\n  d: e)\n',
  },
  {
    name: 'whitespace/after_comma/output.css',
    data: '',
  },
  {
    name: 'whitespace/after_second_key/input.sass',
    data: '$a: (b: c, d\n: e)\n',
  },
  {
    name: 'whitespace/after_second_key/output.css',
    data: '',
  },
  {
    name: 'whitespace/after_second_colon/input.sass',
    data: '$a: (b: c, d:\n  e)\n',
  },
  {
    name: 'whitespace/after_second_colon/output.css',
    data: '',
  },
  {
    name: 'whitespace/after_second_value/input.sass',
    data: '$a: (b: c, d: e\n  )\n',
  },
  {
    name: 'whitespace/after_second_value/output.css',
    data: '',
  },
]
