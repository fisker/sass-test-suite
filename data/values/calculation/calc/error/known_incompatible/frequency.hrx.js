// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/known_incompatible/frequency.hrx

export default [
  {
    name: 'hz/dpi/input.scss',
    data: 'a {b: calc(1Hz + 1dpi)}\n',
  },
  {
    name: 'hz/dpi/error',
    data: "Error: 1Hz and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1Hz + 1dpi)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'hz/dpcm/input.scss',
    data: 'a {b: calc(1Hz + 1dpcm)}\n',
  },
  {
    name: 'hz/dpcm/error',
    data: "Error: 1Hz and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1Hz + 1dpcm)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'hz/dppx/input.scss',
    data: 'a {b: calc(1Hz + 1dppx)}\n',
  },
  {
    name: 'hz/dppx/error',
    data: "Error: 1Hz and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1Hz + 1dppx)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'khz/dpi/input.scss',
    data: 'a {b: calc(1kHz + 1dpi)}\n',
  },
  {
    name: 'khz/dpi/error',
    data: "Error: 1kHz and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1kHz + 1dpi)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'khz/dpcm/input.scss',
    data: 'a {b: calc(1kHz + 1dpcm)}\n',
  },
  {
    name: 'khz/dpcm/error',
    data: "Error: 1kHz and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1kHz + 1dpcm)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'khz/dppx/input.scss',
    data: 'a {b: calc(1kHz + 1dppx)}\n',
  },
  {
    name: 'khz/dppx/error',
    data: "Error: 1kHz and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1kHz + 1dppx)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
