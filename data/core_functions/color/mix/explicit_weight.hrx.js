// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/mix/explicit_weight.hrx

export default [
  {
    name: 'even/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, #0144bf, 50%)}\n',
  },
  {
    name: 'even/output.css',
    data: 'a {\n  b: rgb(73, 146.5, 151);\n}\n',
  },
  {
    name: 'first/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, #0144bf, 100%)}\n',
  },
  {
    name: 'first/output.css',
    data: 'a {\n  b: #91e16f;\n}\n',
  },
  {
    name: 'last/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, #0144bf, 0%)}\n',
  },
  {
    name: 'last/output.css',
    data: 'a {\n  b: #0144bf;\n}\n',
  },
  {
    name: 'firstwards/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, #0144bf, 92%)}\n',
  },
  {
    name: 'firstwards/output.css',
    data: 'a {\n  b: rgb(133.48, 212.44, 117.4);\n}\n',
  },
  {
    name: 'lastwards/input.scss',
    data: '@use "sass:color";\na {b: color.mix(#91e16f, #0144bf, 43%)}\n',
  },
  {
    name: 'lastwards/output.css',
    data: 'a {\n  b: rgb(62.92, 135.51, 156.6);\n}\n',
  },
]
