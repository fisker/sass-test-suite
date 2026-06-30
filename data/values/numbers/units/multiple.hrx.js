// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/units/multiple.hrx

export default [
  {
    name: 'multiple_denominators/input.scss',
    data: 'a {\n  b: calc(1 / 1px / 1rad);\n}\n',
  },
  {
    name: 'multiple_denominators/output.css',
    data: 'a {\n  b: calc(1 / 1px / 1rad);\n}\n',
  },
  {
    name: 'multiple_numerators/input.scss',
    data: 'a {\n  b: calc(1px * 1rad);\n}\n',
  },
  {
    name: 'multiple_numerators/output.css',
    data: 'a {\n  b: calc(1px * 1rad);\n}\n',
  },
  {
    name: 'division/by/multiple_denominators/input.scss',
    data: 'a {\n  b: calc(1 / (1 / 1px / 1rad));\n}\n',
  },
  {
    name: 'division/by/multiple_denominators/output.css',
    data: 'a {\n  b: calc(1px * 1rad);\n}\n',
  },
  {
    name: 'division/by/multiple_numerators/input.scss',
    data: 'a {\n  b: calc(1 / (1px * 1rad));\n}\n',
  },
  {
    name: 'division/by/multiple_numerators/output.css',
    data: 'a {\n  b: calc(1 / 1px / 1rad);\n}\n',
  },
  {
    name: 'division/cancels/denominator/once/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number / (1 / 1ms));\n}\n',
  },
  {
    name: 'division/cancels/denominator/once/output.css',
    data: 'a {\n  b: calc(1px * 1rad / 1Hz);\n}\n',
  },
  {
    name: 'division/cancels/denominator/twice/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number / (1 / 1ms / 1Hz));\n}\n',
  },
  {
    name: 'division/cancels/denominator/twice/output.css',
    data: 'a {\n  b: calc(1px * 1rad);\n}\n',
  },
  {
    name: 'division/cancels/numerator/once/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number / 1px);\n}\n',
  },
  {
    name: 'division/cancels/numerator/once/output.css',
    data: 'a {\n  b: calc(1rad / 1ms / 1Hz);\n}\n',
  },
  {
    name: 'division/cancels/numerator/twice/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number / (1px * 1rad));\n}\n',
  },
  {
    name: 'division/cancels/numerator/twice/output.css',
    data: 'a {\n  b: calc(1 / 1ms / 1Hz);\n}\n',
  },
  {
    name: 'division/cancels/both/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number / (1px / 1ms));\n}\n',
  },
  {
    name: 'division/cancels/both/output.css',
    data: 'a {\n  b: calc(1rad / 1Hz);\n}\n',
  },
  {
    name: 'division/cancels/compatible/input.scss',
    data: '$number: calc(96px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number / 1in);\n}\n',
  },
  {
    name: 'division/cancels/compatible/output.css',
    data: 'a {\n  b: calc(1rad / 1ms / 1Hz);\n}\n',
  },
  {
    name: 'division/cancels/unknown/input.scss',
    data: "// Units cancel even if they're totally unknown to Sass.\n$number: calc(1foo * 1bar / 1baz / 1qux);\na {\n  b: calc($number / 1foo);\n}\n",
  },
  {
    name: 'division/cancels/unknown/output.css',
    data: 'a {\n  b: calc(1bar / 1baz / 1qux);\n}\n',
  },
  {
    name: 'multiplication/cancels/denominator/once/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number * 1ms);\n}\n',
  },
  {
    name: 'multiplication/cancels/denominator/once/output.css',
    data: 'a {\n  b: calc(1px * 1rad / 1Hz);\n}\n',
  },
  {
    name: 'multiplication/cancels/denominator/twice/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number * (1ms * 1Hz));\n}\n',
  },
  {
    name: 'multiplication/cancels/denominator/twice/output.css',
    data: 'a {\n  b: calc(1px * 1rad);\n}\n',
  },
  {
    name: 'multiplication/cancels/numerator/once/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number * (1 / 1px));\n}\n',
  },
  {
    name: 'multiplication/cancels/numerator/once/output.css',
    data: 'a {\n  b: calc(1rad / 1ms / 1Hz);\n}\n',
  },
  {
    name: 'multiplication/cancels/numerator/twice/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number * (1 / 1px / 1rad));\n}\n',
  },
  {
    name: 'multiplication/cancels/numerator/twice/output.css',
    data: 'a {\n  b: calc(1 / 1ms / 1Hz);\n}\n',
  },
  {
    name: 'multiplication/cancels/both/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number * (1ms / 1px));\n}\n',
  },
  {
    name: 'multiplication/cancels/both/output.css',
    data: 'a {\n  b: calc(1rad / 1Hz);\n}\n',
  },
  {
    name: 'multiplication/cancels/compatible/input.scss',
    data: '$number: calc(1px * 1rad / 1ms / 1Hz);\na {\n  b: calc($number * 1s);\n}\n',
  },
  {
    name: 'multiplication/cancels/compatible/output.css',
    data: 'a {\n  b: calc(1000px * 1rad / 1Hz);\n}\n',
  },
  {
    name: 'multiplication/cancels/unknown/input.scss',
    data: "// Units cancel even if they're totally unknown to Sass.\n$number: calc(1foo * 1bar / 1baz / 1qux);\na {\n  b: calc($number * 1baz);\n}\n",
  },
  {
    name: 'multiplication/cancels/unknown/output.css',
    data: 'a {\n  b: calc(1foo * 1bar / 1qux);\n}\n',
  },
]
