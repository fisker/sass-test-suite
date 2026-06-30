// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/error/known_incompatible/angle.hrx

export default [
  {
    name: 'deg/s/input.scss',
    data: 'a {b: calc(1deg + 1s)}\n',
  },
  {
    name: 'deg/s/error',
    data: "Error: 1deg and 1s are incompatible.\n  ,\n1 | a {b: calc(1deg + 1s)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'deg/ms/input.scss',
    data: 'a {b: calc(1deg + 1ms)}\n',
  },
  {
    name: 'deg/ms/error',
    data: "Error: 1deg and 1ms are incompatible.\n  ,\n1 | a {b: calc(1deg + 1ms)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'deg/hz/input.scss',
    data: 'a {b: calc(1deg + 1Hz)}\n',
  },
  {
    name: 'deg/hz/error',
    data: "Error: 1deg and 1Hz are incompatible.\n  ,\n1 | a {b: calc(1deg + 1Hz)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'deg/khz/input.scss',
    data: 'a {b: calc(1deg + 1kHz)}\n',
  },
  {
    name: 'deg/khz/error',
    data: "Error: 1deg and 1kHz are incompatible.\n  ,\n1 | a {b: calc(1deg + 1kHz)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'deg/dpi/input.scss',
    data: 'a {b: calc(1deg + 1dpi)}\n',
  },
  {
    name: 'deg/dpi/error',
    data: "Error: 1deg and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1deg + 1dpi)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'deg/dpcm/input.scss',
    data: 'a {b: calc(1deg + 1dpcm)}\n',
  },
  {
    name: 'deg/dpcm/error',
    data: "Error: 1deg and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1deg + 1dpcm)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'deg/dppx/input.scss',
    data: 'a {b: calc(1deg + 1dppx)}\n',
  },
  {
    name: 'deg/dppx/error',
    data: "Error: 1deg and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1deg + 1dppx)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/s/input.scss',
    data: 'a {b: calc(1grad + 1s)}\n',
  },
  {
    name: 'grad/s/error',
    data: "Error: 1grad and 1s are incompatible.\n  ,\n1 | a {b: calc(1grad + 1s)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/ms/input.scss',
    data: 'a {b: calc(1grad + 1ms)}\n',
  },
  {
    name: 'grad/ms/error',
    data: "Error: 1grad and 1ms are incompatible.\n  ,\n1 | a {b: calc(1grad + 1ms)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/hz/input.scss',
    data: 'a {b: calc(1grad + 1Hz)}\n',
  },
  {
    name: 'grad/hz/error',
    data: "Error: 1grad and 1Hz are incompatible.\n  ,\n1 | a {b: calc(1grad + 1Hz)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/khz/input.scss',
    data: 'a {b: calc(1grad + 1kHz)}\n',
  },
  {
    name: 'grad/khz/error',
    data: "Error: 1grad and 1kHz are incompatible.\n  ,\n1 | a {b: calc(1grad + 1kHz)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/dpi/input.scss',
    data: 'a {b: calc(1grad + 1dpi)}\n',
  },
  {
    name: 'grad/dpi/error',
    data: "Error: 1grad and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1grad + 1dpi)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/dpcm/input.scss',
    data: 'a {b: calc(1grad + 1dpcm)}\n',
  },
  {
    name: 'grad/dpcm/error',
    data: "Error: 1grad and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1grad + 1dpcm)}\n  |            ^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'grad/dppx/input.scss',
    data: 'a {b: calc(1grad + 1dppx)}\n',
  },
  {
    name: 'grad/dppx/error',
    data: "Error: 1grad and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1grad + 1dppx)}\n  |            ^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/s/input.scss',
    data: 'a {b: calc(1rad + 1s)}\n',
  },
  {
    name: 'rad/s/error',
    data: "Error: 1rad and 1s are incompatible.\n  ,\n1 | a {b: calc(1rad + 1s)}\n  |            ^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/ms/input.scss',
    data: 'a {b: calc(1rad + 1ms)}\n',
  },
  {
    name: 'rad/ms/error',
    data: "Error: 1rad and 1ms are incompatible.\n  ,\n1 | a {b: calc(1rad + 1ms)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/hz/input.scss',
    data: 'a {b: calc(1rad + 1Hz)}\n',
  },
  {
    name: 'rad/hz/error',
    data: "Error: 1rad and 1Hz are incompatible.\n  ,\n1 | a {b: calc(1rad + 1Hz)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/khz/input.scss',
    data: 'a {b: calc(1rad + 1kHz)}\n',
  },
  {
    name: 'rad/khz/error',
    data: "Error: 1rad and 1kHz are incompatible.\n  ,\n1 | a {b: calc(1rad + 1kHz)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/dpi/input.scss',
    data: 'a {b: calc(1rad + 1dpi)}\n',
  },
  {
    name: 'rad/dpi/error',
    data: "Error: 1rad and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1rad + 1dpi)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/dpcm/input.scss',
    data: 'a {b: calc(1rad + 1dpcm)}\n',
  },
  {
    name: 'rad/dpcm/error',
    data: "Error: 1rad and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1rad + 1dpcm)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'rad/dppx/input.scss',
    data: 'a {b: calc(1rad + 1dppx)}\n',
  },
  {
    name: 'rad/dppx/error',
    data: "Error: 1rad and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1rad + 1dppx)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/s/input.scss',
    data: 'a {b: calc(1turn + 1s)}\n',
  },
  {
    name: 'turn/s/error',
    data: "Error: 1turn and 1s are incompatible.\n  ,\n1 | a {b: calc(1turn + 1s)}\n  |            ^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/ms/input.scss',
    data: 'a {b: calc(1turn + 1ms)}\n',
  },
  {
    name: 'turn/ms/error',
    data: "Error: 1turn and 1ms are incompatible.\n  ,\n1 | a {b: calc(1turn + 1ms)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/hz/input.scss',
    data: 'a {b: calc(1turn + 1Hz)}\n',
  },
  {
    name: 'turn/hz/error',
    data: "Error: 1turn and 1Hz are incompatible.\n  ,\n1 | a {b: calc(1turn + 1Hz)}\n  |            ^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/khz/input.scss',
    data: 'a {b: calc(1turn + 1kHz)}\n',
  },
  {
    name: 'turn/khz/error',
    data: "Error: 1turn and 1kHz are incompatible.\n  ,\n1 | a {b: calc(1turn + 1kHz)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/dpi/input.scss',
    data: 'a {b: calc(1turn + 1dpi)}\n',
  },
  {
    name: 'turn/dpi/error',
    data: "Error: 1turn and 1dpi are incompatible.\n  ,\n1 | a {b: calc(1turn + 1dpi)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/dpcm/input.scss',
    data: 'a {b: calc(1turn + 1dpcm)}\n',
  },
  {
    name: 'turn/dpcm/error',
    data: "Error: 1turn and 1dpcm are incompatible.\n  ,\n1 | a {b: calc(1turn + 1dpcm)}\n  |            ^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'turn/dppx/input.scss',
    data: 'a {b: calc(1turn + 1dppx)}\n',
  },
  {
    name: 'turn/dppx/error',
    data: "Error: 1turn and 1dppx are incompatible.\n  ,\n1 | a {b: calc(1turn + 1dppx)}\n  |            ^^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
