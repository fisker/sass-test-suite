export default [
  {
    name: 'very_small/positive/bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: math.pow(10, -10)}\n",
  },
  {
    name: 'very_small/positive/bigger_than_boundary/output.css',
    data: 'a {\n  b: 0.0000000001;\n}\n',
  },
  {
    name: 'very_small/positive/slightly_bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 2 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_small/positive/slightly_bigger_than_boundary/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'very_small/positive/at_boundary/input.scss',
    data: "@use 'sass:math';\na {b: math.pow(10, -11)}\n",
  },
  {
    name: 'very_small/positive/at_boundary/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'very_small/positive/slightly_smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 0.5 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_small/positive/slightly_smaller_than_boundary/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'very_small/positive/smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 0.5 * math.pow(10, -12)}\n",
  },
  {
    name: 'very_small/positive/smaller_than_boundary/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'very_small/negative/bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -(math.pow(10, -10))}\n",
  },
  {
    name: 'very_small/negative/bigger_than_boundary/output.css',
    data: 'a {\n  b: -0.0000000001;\n}\n',
  },
  {
    name: 'very_small/negative/slightly_bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -2 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_small/negative/slightly_bigger_than_boundary/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'very_small/negative/at_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -(math.pow(10, -11))}\n",
  },
  {
    name: 'very_small/negative/at_boundary/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'very_small/negative/slightly_smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -0.5 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_small/negative/slightly_smaller_than_boundary/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'very_small/negative/smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -(math.pow(10, -12))}\n",
  },
  {
    name: 'very_small/negative/smaller_than_boundary/output.css',
    data: 'a {\n  b: 0;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/above/bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 + math.pow(10, -10)}\n",
  },
  {
    name: 'very_close_to_int/positive/above/bigger_than_boundary/output.css',
    data: 'a {\n  b: 10.0000000001;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/above/slightly_bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 + 2 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/positive/above/slightly_bigger_than_boundary/output.css',
    data: 'a {\n  b: 10;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/above/at_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 + math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/positive/above/at_boundary/output.css',
    data: 'a {\n  b: 10;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/above/slightly_smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 + 0.5 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/positive/above/slightly_smaller_than_boundary/output.css',
    data: 'a {\n  b: 10;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/above/smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 + math.pow(10, -12)}\n",
  },
  {
    name: 'very_close_to_int/positive/above/smaller_than_boundary/output.css',
    data: 'a {\n  b: 10;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/below/bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 - math.pow(10, -10)}\n",
  },
  {
    name: 'very_close_to_int/positive/below/bigger_than_boundary/output.css',
    data: 'a {\n  b: 9.9999999999;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/below/slightly_bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 - 2 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/positive/below/slightly_bigger_than_boundary/output.css',
    data: 'a {\n  b: 10;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/below/at_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 - math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/positive/below/at_boundary/output.css',
    data: 'a {\n  b: 10;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/below/slightly_smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 - 0.5 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/positive/below/slightly_smaller_than_boundary/output.css',
    data: 'a {\n  b: 10;\n}\n',
  },
  {
    name: 'very_close_to_int/positive/below/smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: 10 - math.pow(10, -12)}\n",
  },
  {
    name: 'very_close_to_int/positive/below/smaller_than_boundary/output.css',
    data: 'a {\n  b: 10;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/above/bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 + math.pow(10, -10)}\n",
  },
  {
    name: 'very_close_to_int/negative/above/bigger_than_boundary/output.css',
    data: 'a {\n  b: -9.9999999999;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/above/slightly_bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 + 2 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/negative/above/slightly_bigger_than_boundary/output.css',
    data: 'a {\n  b: -10;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/above/at_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 + math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/negative/above/at_boundary/output.css',
    data: 'a {\n  b: -10;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/above/slightly_smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 + 0.5 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/negative/above/slightly_smaller_than_boundary/output.css',
    data: 'a {\n  b: -10;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/above/smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 + math.pow(10, -12)}\n",
  },
  {
    name: 'very_close_to_int/negative/above/smaller_than_boundary/output.css',
    data: 'a {\n  b: -10;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/below/bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 - math.pow(10, -10)}\n",
  },
  {
    name: 'very_close_to_int/negative/below/bigger_than_boundary/output.css',
    data: 'a {\n  b: -10.0000000001;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/below/slightly_bigger_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 - 2 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/negative/below/slightly_bigger_than_boundary/output.css',
    data: 'a {\n  b: -10;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/below/at_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 - math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/negative/below/at_boundary/output.css',
    data: 'a {\n  b: -10;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/below/slightly_smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 - 0.5 * math.pow(10, -11)}\n",
  },
  {
    name: 'very_close_to_int/negative/below/slightly_smaller_than_boundary/output.css',
    data: 'a {\n  b: -10;\n}\n',
  },
  {
    name: 'very_close_to_int/negative/below/smaller_than_boundary/input.scss',
    data: "@use 'sass:math';\na {b: -10 - math.pow(10, -12)}\n",
  },
  {
    name: 'very_close_to_int/negative/below/smaller_than_boundary/output.css',
    data: 'a {\n  b: -10;\n}\n',
  },
]
