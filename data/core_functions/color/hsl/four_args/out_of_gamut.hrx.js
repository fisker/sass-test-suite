// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/four_args/out_of_gamut.hrx

export default [
  {
    name: 'hue/degenerate/positive_infinity/input.scss',
    data: 'a {b: hsl(calc(infinity), 100%, 50%)}\n',
  },
  {
    name: 'hue/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: hsl(calc(NaN), 100%, 50%);\n}\n',
  },
  {
    name: 'hue/degenerate/negative_infinity/input.scss',
    data: 'a {b: hsl(calc(-infinity), 100%, 50%)}\n',
  },
  {
    name: 'hue/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: hsl(calc(NaN), 100%, 50%);\n}\n',
  },
  {
    name: 'hue/degenerate/nan/input.scss',
    data: 'a {b: hsl(calc(NaN), 100%, 50%)}\n',
  },
  {
    name: 'hue/degenerate/nan/output.css',
    data: 'a {\n  b: hsl(calc(NaN), 100%, 50%);\n}\n',
  },
  {
    name: 'saturation/finite/input.scss',
    data: 'a {b: hsl(0, -0.1%, 50%, 0.5)}\n',
  },
  {
    name: 'saturation/finite/output.css',
    data: 'a {\n  b: hsla(0, 0%, 50%, 0.5);\n}\n',
  },
  {
    name: 'saturation/degenerate/positive_infinity/input.scss',
    data: 'a {b: hsl(0, calc(infinity), 50%)}\n',
  },
  {
    name: 'saturation/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: hsl(0, calc(infinity * 1%), 50%);\n}\n',
  },
  {
    name: 'saturation/degenerate/positive_infinity/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (calc(infinity)) is deprecated.\n\nTo preserve current behavior: $saturation * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, calc(infinity), 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'saturation/degenerate/negative_infinity/input.scss',
    data: 'a {b: hsl(0, calc(-infinity), 50%)}\n',
  },
  {
    name: 'saturation/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: hsl(0, 0%, 50%);\n}\n',
  },
  {
    name: 'saturation/degenerate/negative_infinity/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (calc(-infinity)) is deprecated.\n\nTo preserve current behavior: $saturation * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, calc(-infinity), 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'saturation/degenerate/nan/input.scss',
    data: 'a {b: hsl(0, calc(NaN), 50%)}\n',
  },
  {
    name: 'saturation/degenerate/nan/output.css',
    data: 'a {\n  b: hsl(0, 0%, 50%);\n}\n',
  },
  {
    name: 'saturation/degenerate/nan/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (calc(NaN)) is deprecated.\n\nTo preserve current behavior: $saturation * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, calc(NaN), 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'lightness/finite/input.scss',
    data: 'a {b: hsl(0, 100%, 9999%, 0.5)}\n',
  },
  {
    name: 'lightness/finite/output.css',
    data: 'a {\n  b: hsla(0, 100%, 9999%, 0.5);\n}\n',
  },
  {
    name: 'lightness/degenerate/positive_infinity/input.scss',
    data: 'a {b: hsl(0, 100%, calc(infinity))}\n',
  },
  {
    name: 'lightness/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: hsl(0, 100%, calc(infinity * 1%));\n}\n',
  },
  {
    name: 'lightness/degenerate/positive_infinity/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (calc(infinity)) is deprecated.\n\nTo preserve current behavior: $lightness * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, 100%, calc(infinity))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'lightness/degenerate/negative_infinity/input.scss',
    data: 'a {b: hsl(0, 100%, calc(-infinity))}\n',
  },
  {
    name: 'lightness/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: hsl(0, 100%, calc(-infinity * 1%));\n}\n',
  },
  {
    name: 'lightness/degenerate/negative_infinity/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (calc(-infinity)) is deprecated.\n\nTo preserve current behavior: $lightness * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, 100%, calc(-infinity))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'lightness/degenerate/nan/input.scss',
    data: 'a {b: hsl(0, 100%, calc(NaN))}\n',
  },
  {
    name: 'lightness/degenerate/nan/output.css',
    data: 'a {\n  b: hsl(0, 100%, calc(NaN * 1%));\n}\n',
  },
  {
    name: 'lightness/degenerate/nan/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (calc(NaN)) is deprecated.\n\nTo preserve current behavior: $lightness * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0, 100%, calc(NaN))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'alpha/finite/above/input.scss',
    data: 'a {b: hsl(0, 100%, 50%, 1.1)}\n',
  },
  {
    name: 'alpha/finite/above/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'alpha/finite/below/input.scss',
    data: 'a {b: hsla(0, 100%, 50%, -0.1)}\n',
  },
  {
    name: 'alpha/finite/below/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0);\n}\n',
  },
  {
    name: 'alpha/degenerate/positive_infinity/input.scss',
    data: 'a {b: hsl(0, 100%, 50%, calc(infinity))}\n',
  },
  {
    name: 'alpha/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'alpha/degenerate/negative_infinity/input.scss',
    data: 'a {b: hsl(0, 100%, 50%, calc(-infinity))}\n',
  },
  {
    name: 'alpha/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0);\n}\n',
  },
  {
    name: 'alpha/degenerate/nan/input.scss',
    data: 'a {b: hsl(0, 100%, 50%, calc(NaN))}\n',
  },
  {
    name: 'alpha/degenerate/nan/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0);\n}\n',
  },
]
