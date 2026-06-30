// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/hwb.hrx

export default [
  {
    name: 'whiteness/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#66cc99, $whiteness: 100%)}\n',
  },
  {
    name: 'whiteness/max/output.css',
    data: 'a {\n  b: rgb(212.5, 212.5, 212.5);\n}\n',
  },
  {
    name: 'whiteness/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#66cc99, $whiteness: 0%)}\n',
  },
  {
    name: 'whiteness/zero/output.css',
    data: 'a {\n  b: #66cc99;\n}\n',
  },
  {
    name: 'whiteness/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#66cc99, $whiteness: -100%)}\n',
  },
  {
    name: 'whiteness/min/output.css',
    data: 'a {\n  b: #00cc66;\n}\n',
  },
  {
    name: 'whiteness/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#33cc80, $whiteness: 50%)}\n',
  },
  {
    name: 'whiteness/high/output.css',
    data: 'a {\n  b: rgb(153, 204, 178.6666666667);\n}\n',
  },
  {
    name: 'whiteness/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#66cc99, $whiteness: -50%)}\n',
  },
  {
    name: 'whiteness/low/output.css',
    data: 'a {\n  b: rgb(51, 204, 127.5);\n}\n',
  },
  {
    name: 'blackness/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#339966, $blackness: 100%)}\n',
  },
  {
    name: 'blackness/max/output.css',
    data: 'a {\n  b: rgb(42.5, 42.5, 42.5);\n}\n',
  },
  {
    name: 'blackness/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#339966, $blackness: 0%)}\n',
  },
  {
    name: 'blackness/zero/output.css',
    data: 'a {\n  b: #339966;\n}\n',
  },
  {
    name: 'blackness/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#339966, $blackness: -100%)}\n',
  },
  {
    name: 'blackness/min/output.css',
    data: 'a {\n  b: #33ff99;\n}\n',
  },
  {
    name: 'blackness/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#33cc80, $blackness: 50%)}\n',
  },
  {
    name: 'blackness/high/output.css',
    data: 'a {\n  b: rgb(51, 102, 76.6666666667);\n}\n',
  },
  {
    name: 'blackness/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#339966, $blackness: -50%)}\n',
  },
  {
    name: 'blackness/low/output.css',
    data: 'a {\n  b: rgb(51, 204, 127.5);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#66cc99, $whiteness: -50%, $blackness: 50%)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: rgb(51, 102, 76.5);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgba(#66cc99, 0.7), $whiteness: -50%, $blackness: 50%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(51, 102, 76.5, 0.7);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.scale(#66cc99, $whiteness: -50%, $blackness: 50%, $alpha: -70%)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(51, 102, 76.5, 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.scale($color: #66cc99, $whiteness: -50%, $blackness: 50%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb(51, 102, 76.5);\n}\n',
  },
]
