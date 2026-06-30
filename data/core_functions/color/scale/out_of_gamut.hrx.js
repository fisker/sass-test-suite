// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/out_of_gamut.hrx

export default [
  {
    name: 'above_gamut/up/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(srgb 1.2 0.5 0.7), $red: 10%)}\n',
  },
  {
    name: 'above_gamut/up/output.css',
    data: 'a {\n  b: color(srgb 1.2 0.5 0.7);\n}\n',
  },
  {
    name: 'above_gamut/down/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(srgb 1.2 0.5 0.7), $red: -10%)}\n',
  },
  {
    name: 'above_gamut/down/output.css',
    data: 'a {\n  b: color(srgb 1.08 0.5 0.7);\n}\n',
  },
  {
    name: 'below_gamut/up/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(srgb -0.5 0.5 0.7), $red: 10%)}\n',
  },
  {
    name: 'below_gamut/up/output.css',
    data: 'a {\n  b: color(srgb -0.35 0.5 0.7);\n}\n',
  },
  {
    name: 'below_gamut/down/input.scss',
    data: '@use "sass:color";\na {b: color.scale(color(srgb -0.5 0.5 0.7), $red: -10%)}\n',
  },
  {
    name: 'below_gamut/down/output.css',
    data: 'a {\n  b: color(srgb -0.5 0.5 0.7);\n}\n',
  },
]
