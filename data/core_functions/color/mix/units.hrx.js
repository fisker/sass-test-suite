// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/mix/units.hrx

export default [
  {
    name: 'weight/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, #0144bf, 50)}\n',
  },
  {
    name: 'weight/unitless/output.css',
    data: 'a {\n  b: rgb(73, 146.5, 151);\n}\n',
  },
  {
    name: 'weight/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $weight: Passing a number without unit % (50) is deprecated.\n\nTo preserve current behavior: $weight * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.mix(#91e16f, #0144bf, 50)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'weight/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, #0144bf, 50px)}\n',
  },
  {
    name: 'weight/unknown/output.css',
    data: 'a {\n  b: rgb(73, 146.5, 151);\n}\n',
  },
  {
    name: 'weight/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $weight: Passing a number without unit % (50px) is deprecated.\n\nTo preserve current behavior: calc($weight / 1px * 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.mix(#91e16f, #0144bf, 50px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
]
