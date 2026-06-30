// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/known_incompatible/time.hrx

export default [
  {
    name: 's/hz/input.scss',
    data: 'a {b: calc(1s + 1Hz)}\n',
  },
  {
    name: 's/hz/error',
    data: "Error: 1s and 1Hz are incompatible.\n  ,\n1 | a {b: calc(1s + 1Hz)}\n  |            ^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 's/khz/input.scss',
    data: 'a {b: calc(1s + 1kHz)}\n',
  },
  {
    name: 's/khz/error',
    data: "Error: 1s and 1kHz are incompatible.\n  ,\n1 | a {b: calc(1s + 1kHz)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 's/dpi/input.scss',
    data: 'a {b: calc(1s + 1dpi)}\n',
  },
  {
    name: 's/dpi/error',
    data: "Error: 1s and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1s + 1dpi)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 's/dpcm/input.scss',
    data: 'a {b: calc(1s + 1dpcm)}\n',
  },
  {
    name: 's/dpcm/error',
    data: "Error: 1s and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1s + 1dpcm)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 's/dppx/input.scss',
    data: 'a {b: calc(1s + 1dppx)}\n',
  },
  {
    name: 's/dppx/error',
    data: "Error: 1s and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1s + 1dppx)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'ms/hz/input.scss',
    data: 'a {b: calc(1ms + 1Hz)}\n',
  },
  {
    name: 'ms/hz/error',
    data: "Error: 1ms and 1Hz are incompatible.\n  ,\n1 | a {b: calc(1ms + 1Hz)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'ms/khz/input.scss',
    data: 'a {b: calc(1ms + 1kHz)}\n',
  },
  {
    name: 'ms/khz/error',
    data: "Error: 1ms and 1kHz are incompatible.\n  ,\n1 | a {b: calc(1ms + 1kHz)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'ms/dpi/input.scss',
    data: 'a {b: calc(1ms + 1dpi)}\n',
  },
  {
    name: 'ms/dpi/error',
    data: "Error: 1ms and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1ms + 1dpi)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'ms/dpcm/input.scss',
    data: 'a {b: calc(1ms + 1dpcm)}\n',
  },
  {
    name: 'ms/dpcm/error',
    data: "Error: 1ms and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1ms + 1dpcm)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'ms/dppx/input.scss',
    data: 'a {b: calc(1ms + 1dppx)}\n',
  },
  {
    name: 'ms/dppx/error',
    data: "Error: 1ms and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1ms + 1dppx)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
