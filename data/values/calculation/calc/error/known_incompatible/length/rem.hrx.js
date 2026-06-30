// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/known_incompatible/length/rem.hrx

export default [
  {
    name: 'deg/input.scss',
    data: 'a {b: calc(1rem + 1deg)}\n',
  },
  {
    name: 'deg/error',
    data: "Error: 1rem and 1deg are incompatible.\n  ,\n1 | a {b: calc(1rem + 1deg)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/input.scss',
    data: 'a {b: calc(1rem + 1grad)}\n',
  },
  {
    name: 'grad/error',
    data: "Error: 1rem and 1grad are incompatible.\n  ,\n1 | a {b: calc(1rem + 1grad)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/input.scss',
    data: 'a {b: calc(1rem + 1rad)}\n',
  },
  {
    name: 'rad/error',
    data: "Error: 1rem and 1rad are incompatible.\n  ,\n1 | a {b: calc(1rem + 1rad)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/input.scss',
    data: 'a {b: calc(1rem + 1turn)}\n',
  },
  {
    name: 'turn/error',
    data: "Error: 1rem and 1turn are incompatible.\n  ,\n1 | a {b: calc(1rem + 1turn)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 's/input.scss',
    data: 'a {b: calc(1rem + 1s)}\n',
  },
  {
    name: 's/error',
    data: "Error: 1rem and 1s are incompatible.\n  ,\n1 | a {b: calc(1rem + 1s)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'ms/input.scss',
    data: 'a {b: calc(1rem + 1ms)}\n',
  },
  {
    name: 'ms/error',
    data: "Error: 1rem and 1ms are incompatible.\n  ,\n1 | a {b: calc(1rem + 1ms)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'hz/input.scss',
    data: 'a {b: calc(1rem + 1Hz)}\n',
  },
  {
    name: 'hz/error',
    data: "Error: 1rem and 1Hz are incompatible.\n  ,\n1 | a {b: calc(1rem + 1Hz)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'khz/input.scss',
    data: 'a {b: calc(1rem + 1kHz)}\n',
  },
  {
    name: 'khz/error',
    data: "Error: 1rem and 1kHz are incompatible.\n  ,\n1 | a {b: calc(1rem + 1kHz)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'dpi/input.scss',
    data: 'a {b: calc(1rem + 1dpi)}\n',
  },
  {
    name: 'dpi/error',
    data: "Error: 1rem and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1rem + 1dpi)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'dpcm/input.scss',
    data: 'a {b: calc(1rem + 1dpcm)}\n',
  },
  {
    name: 'dpcm/error',
    data: "Error: 1rem and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1rem + 1dpcm)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'dppx/input.scss',
    data: 'a {b: calc(1rem + 1dppx)}\n',
  },
  {
    name: 'dppx/error',
    data: "Error: 1rem and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1rem + 1dppx)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
