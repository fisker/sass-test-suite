// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/mix/explicit_method.hrx

export default [
  {
    name: 'srgb/input.scss',
    data: '@use "sass:color";\na {b: color.mix(red, green, $method: xyz)}\n',
  },
  {
    name: 'srgb/output.css',
    data: 'a {\n  b: rgb(187.5160306784, 92.3735312967, 0);\n}\n',
  },
  {
    name: 'non_srgb/input.scss',
    data: '@use "sass:color";\na {b: color.mix(lab(54.3 80.8 69.9), lch(46.3 68 134), $method: oklch)}\n',
  },
  {
    name: 'non_srgb/output.css',
    data: 'a {\n  b: lab(50.3820988862% 23.7394813109 159.7498356926);\n}\n',
  },
  {
    name: 'previously_invalid/input.scss',
    data: '@use "sass:color";\n// An earlier draft of CSS Colors 4 didn\'t allow some spaces because they were\n// redundant with others, but they should be allowed now.\na {b: color.mix(lab(54.3 80.8 69.9), lch(46.3 68 134), $method: display-p3)}\n',
  },
  {
    name: 'previously_invalid/output.css',
    data: 'a {\n  b: lab(43.9078099681% 26.0060363023 48.9943374049);\n}\n',
  },
  {
    name: 'weighted/input.scss',
    data: '@use "sass:color";\na {b: color.mix(lab(54.3 80.8 69.9), lch(46.3 68 134), 30%, oklch)}\n',
  },
  {
    name: 'weighted/output.css',
    data: 'a {\n  b: lab(48.9468096831% -7.9262402391 131.5295999957);\n}\n',
  },
]
