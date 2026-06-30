// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/known_incompatible/length/cm.hrx

export default [
  {
    name: 'deg/input.scss',
    data: 'a {b: calc(1cm + 1deg)}\n',
  },
  {
    name: 'deg/error',
    data: "Error: 1cm and 1deg are incompatible.\n  ,\n1 | a {b: calc(1cm + 1deg)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/input.scss',
    data: 'a {b: calc(1cm + 1grad)}\n',
  },
  {
    name: 'grad/error',
    data: "Error: 1cm and 1grad are incompatible.\n  ,\n1 | a {b: calc(1cm + 1grad)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/input.scss',
    data: 'a {b: calc(1cm + 1rad)}\n',
  },
  {
    name: 'rad/error',
    data: "Error: 1cm and 1rad are incompatible.\n  ,\n1 | a {b: calc(1cm + 1rad)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/input.scss',
    data: 'a {b: calc(1cm + 1turn)}\n',
  },
  {
    name: 'turn/error',
    data: "Error: 1cm and 1turn are incompatible.\n  ,\n1 | a {b: calc(1cm + 1turn)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 's/input.scss',
    data: 'a {b: calc(1cm + 1s)}\n',
  },
  {
    name: 's/error',
    data: "Error: 1cm and 1s are incompatible.\n  ,\n1 | a {b: calc(1cm + 1s)}\n  |            ^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'ms/input.scss',
    data: 'a {b: calc(1cm + 1ms)}\n',
  },
  {
    name: 'ms/error',
    data: "Error: 1cm and 1ms are incompatible.\n  ,\n1 | a {b: calc(1cm + 1ms)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'hz/input.scss',
    data: 'a {b: calc(1cm + 1Hz)}\n',
  },
  {
    name: 'hz/error',
    data: "Error: 1cm and 1Hz are incompatible.\n  ,\n1 | a {b: calc(1cm + 1Hz)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'khz/input.scss',
    data: 'a {b: calc(1cm + 1kHz)}\n',
  },
  {
    name: 'khz/error',
    data: "Error: 1cm and 1kHz are incompatible.\n  ,\n1 | a {b: calc(1cm + 1kHz)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'dpi/input.scss',
    data: 'a {b: calc(1cm + 1dpi)}\n',
  },
  {
    name: 'dpi/error',
    data: "Error: 1cm and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1cm + 1dpi)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'dpcm/input.scss',
    data: 'a {b: calc(1cm + 1dpcm)}\n',
  },
  {
    name: 'dpcm/error',
    data: "Error: 1cm and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1cm + 1dpcm)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'dppx/input.scss',
    data: 'a {b: calc(1cm + 1dppx)}\n',
  },
  {
    name: 'dppx/error',
    data: "Error: 1cm and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1cm + 1dppx)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
