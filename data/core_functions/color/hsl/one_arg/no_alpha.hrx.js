// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/one_arg/no_alpha.hrx

export default [
  {
    name: 'in_gamut/red/input.scss',
    data: 'a {b: hsl(0 100% 50%)}\n',
  },
  {
    name: 'in_gamut/red/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'in_gamut/blue/input.scss',
    data: 'a {b: hsl(240 100% 50%)}\n',
  },
  {
    name: 'in_gamut/blue/output.css',
    data: 'a {\n  b: hsl(240, 100%, 50%);\n}\n',
  },
  {
    name: 'in_gamut/grayish/yellow/input.scss',
    data: 'a {b: hsl(60 60% 50%)}\n',
  },
  {
    name: 'in_gamut/grayish/yellow/output.css',
    data: 'a {\n  b: hsl(60, 60%, 50%);\n}\n',
  },
  {
    name: 'out_of_gamut/saturation/above/input.scss',
    data: 'a {b: hsl(0 500% 50%)}\n',
  },
  {
    name: 'out_of_gamut/saturation/above/output.css',
    data: 'a {\n  b: hsl(0, 500%, 50%);\n}\n',
  },
  {
    name: 'clamped/saturation/below/input.scss',
    data: 'a {b: hsl(0 -100% 50%)}\n',
  },
  {
    name: 'clamped/saturation/below/output.css',
    data: 'a {\n  b: hsl(0, 0%, 50%);\n}\n',
  },
  {
    name: 'clamped/lightness/above/input.scss',
    data: 'a {b: hsl(0 100% 500%)}\n',
  },
  {
    name: 'clamped/lightness/above/output.css',
    data: 'a {\n  b: hsl(0, 100%, 500%);\n}\n',
  },
  {
    name: 'clamped/lightness/below/input.scss',
    data: 'a {b: hsl(0 100% -100%)}\n',
  },
  {
    name: 'clamped/lightness/below/output.css',
    data: 'a {\n  b: hsl(0, 100%, -100%);\n}\n',
  },
  {
    name: 'units/hue/deg/input.scss',
    data: 'a {b: hsl(0deg 100% 50%)}\n',
  },
  {
    name: 'units/hue/deg/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'units/saturation/unitless/input.scss',
    data: 'a {b: hsl(0 50 50%)}\n',
  },
  {
    name: 'units/saturation/unitless/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'units/saturation/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (50) is deprecated.\n\nTo preserve current behavior: $saturation * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0 50 50%)}\n  |       ^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'units/lightness/unitless/input.scss',
    data: 'a {b: hsl(0 100% 50)}\n',
  },
  {
    name: 'units/lightness/unitless/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'units/lightness/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (50) is deprecated.\n\nTo preserve current behavior: $lightness * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n1 | a {b: hsl(0 100% 50)}\n  |       ^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'missing/hue/input.scss',
    data: 'a {b: hsl(none 100% 50%)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: hsl(none 100% 50%);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: 'a {b: hsl(0 none 50%)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: hsl(0deg none 50%);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: 'a {b: hsl(0 100% none)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: hsl(0deg 100% none);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: 'a {b: hsl($channels: 0 100% 50%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
]
