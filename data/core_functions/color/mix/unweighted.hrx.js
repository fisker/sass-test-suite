// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/mix/unweighted.hrx

export default [
  {
    name: 'min_and_max/input.scss',
    data: '@use "sass:color";\n// Each channel becomes the average of 255 and 0, which is 128 = 0xAA.\na {b: color.mix(#ff00ff, #00ff00)}\n',
  },
  {
    name: 'min_and_max/output.css',
    data: 'a {\n  b: rgb(127.5, 127.5, 127.5);\n}\n',
  },
  {
    name: 'identical/input.scss',
    data: '@use "sass:color";\n// If two channels have the same values, they should be the same in the output.\na {b: color.mix(#123456, #123456)}\n',
  },
  {
    name: 'identical/output.css',
    data: 'a {\n  b: #123456;\n}\n',
  },
  {
    name: 'average/input.scss',
    data: '@use "sass:color";\n// All channels should be averaged across the two colors.\na {b: color.mix(#91e16f, #0144bf)}\n',
  },
  {
    name: 'average/output.css',
    data: 'a {\n  b: rgb(73, 146.5, 151);\n}\n',
  },
]
