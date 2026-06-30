// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/hsl.hrx

export default [
  {
    name: 'saturation/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(plum, $saturation: 100%)}\n',
  },
  {
    name: 'saturation/max/output.css',
    data: 'a {\n  b: #ff7eff;\n}\n',
  },
  {
    name: 'saturation/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(plum, $saturation: 0%)}\n',
  },
  {
    name: 'saturation/zero/output.css',
    data: 'a {\n  b: plum;\n}\n',
  },
  {
    name: 'saturation/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(plum, $saturation: -100%)}\n',
  },
  {
    name: 'saturation/min/output.css',
    data: 'a {\n  b: rgb(190.5, 190.5, 190.5);\n}\n',
  },
  {
    name: 'saturation/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(plum, $saturation: 67%)}\n',
  },
  {
    name: 'saturation/high/output.css',
    data: 'a {\n  b: rgb(243.78, 137.22, 243.78);\n}\n',
  },
  {
    name: 'saturation/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(plum, $saturation: -43%)}\n',
  },
  {
    name: 'saturation/low/output.css',
    data: 'a {\n  b: rgb(207.885, 173.115, 207.885);\n}\n',
  },
  {
    name: 'lightness/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $lightness: 100%)}\n',
  },
  {
    name: 'lightness/max/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'lightness/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $lightness: 0%)}\n',
  },
  {
    name: 'lightness/zero/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'lightness/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $lightness: -100%)}\n',
  },
  {
    name: 'lightness/min/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'lightness/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $lightness: 94%)}\n',
  },
  {
    name: 'lightness/high/output.css',
    data: 'a {\n  b: rgb(255, 239.7, 239.7);\n}\n',
  },
  {
    name: 'lightness/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(red, $lightness: -14%)}\n',
  },
  {
    name: 'lightness/low/output.css',
    data: 'a {\n  b: rgb(219.3, 0, 0);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.scale(turquoise, $saturation: 24%, $lightness: -48%)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: rgb(15.8934486486, 133.8665513514, 122.0692410811);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgba(turquoise, 0.7), $saturation: 24%, $lightness: -48%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(15.8934486486, 133.8665513514, 122.0692410811, 0.7);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.scale(turquoise, $saturation: 24%, $lightness: -48%, $alpha: -70%)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(15.8934486486, 133.8665513514, 122.0692410811, 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.scale($color: turquoise, $saturation: 24%, $lightness: -48%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb(15.8934486486, 133.8665513514, 122.0692410811);\n}\n',
  },
]
