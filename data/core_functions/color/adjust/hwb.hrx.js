// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/adjust/hwb.hrx

export default [
  {
    name: 'whiteness/max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#cc6666, $whiteness: 100%)}\n',
  },
  {
    name: 'whiteness/max/output.css',
    data: 'a {\n  b: rgb(223.125, 223.125, 223.125);\n}\n',
  },
  {
    name: 'whiteness/max_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#cc6666, $whiteness: 60%)}\n',
  },
  {
    name: 'whiteness/max_remaining/output.css',
    data: 'a {\n  b: rgb(212.5, 212.5, 212.5);\n}\n',
  },
  {
    name: 'whiteness/zero/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#cc6666, $whiteness: 0%)}\n',
  },
  {
    name: 'whiteness/zero/output.css',
    data: 'a {\n  b: #cc6666;\n}\n',
  },
  {
    name: 'whiteness/min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#cc6666, $whiteness: -100%)}\n',
  },
  {
    name: 'whiteness/min/output.css',
    data: 'a {\n  b: hsl(0, 700%, 10%);\n}\n',
  },
  {
    name: 'whiteness/min_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#cc6666, $whiteness: -40%)}\n',
  },
  {
    name: 'whiteness/min_remaining/output.css',
    data: 'a {\n  b: #cc0000;\n}\n',
  },
  {
    name: 'whiteness/high/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#cc6666, $whiteness: 40%)}\n',
  },
  {
    name: 'whiteness/high/output.css',
    data: 'a {\n  b: #cccccc;\n}\n',
  },
  {
    name: 'whiteness/low/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#cc6666, $whiteness: -20%)}\n',
  },
  {
    name: 'whiteness/low/output.css',
    data: 'a {\n  b: #cc3333;\n}\n',
  },
  {
    name: 'blackness/max/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#993333, $blackness: 100%)}\n',
  },
  {
    name: 'blackness/max/output.css',
    data: 'a {\n  b: rgb(31.875, 31.875, 31.875);\n}\n',
  },
  {
    name: 'blackness/max_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#993333, $blackness: 60%)}\n',
  },
  {
    name: 'blackness/max_remaining/output.css',
    data: 'a {\n  b: rgb(42.5, 42.5, 42.5);\n}\n',
  },
  {
    name: 'blackness/zero/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#993333, $blackness: 0%)}\n',
  },
  {
    name: 'blackness/zero/output.css',
    data: 'a {\n  b: #993333;\n}\n',
  },
  {
    name: 'blackness/min/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#993333, $blackness: -100%)}\n',
  },
  {
    name: 'blackness/min/output.css',
    data: 'a {\n  b: hsl(0, 700%, 90%);\n}\n',
  },
  {
    name: 'blackness/min_remaining/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#993333, $blackness: -40%)}\n',
  },
  {
    name: 'blackness/min_remaining/output.css',
    data: 'a {\n  b: #ff3333;\n}\n',
  },
  {
    name: 'blackness/high/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#993333, $blackness: 40%)}\n',
  },
  {
    name: 'blackness/high/output.css',
    data: 'a {\n  b: #333333;\n}\n',
  },
  {
    name: 'blackness/low/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#993333, $blackness: -20%)}\n',
  },
  {
    name: 'blackness/low/output.css',
    data: 'a {\n  b: #cc3333;\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 150, $whiteness: 20%, $blackness: 40%)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: #339966;\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(rgba(red, 0.7), $hue: 150, $whiteness: 20%, $blackness: 40%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(51, 153, 102, 0.7);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {\n  b: color.adjust(\n    red,\n    $hue: 150,\n    $whiteness: 20%,\n    $blackness: 40%,\n    $alpha: -0.7\n  );\n}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(51, 153, 102, 0.3);\n}\n',
  },
  {
    name: 'alpha_arg_above_max/input.scss',
    data: '@use "sass:color";\na {\n  b: color.adjust(\n    red,\n    $hue: 150,\n    $whiteness: 20%,\n    $blackness: 40%,\n    $alpha: 0.7\n  );\n}\n',
  },
  {
    name: 'alpha_arg_above_max/output.css',
    data: 'a {\n  b: #339966;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.adjust($color: red, $hue: 150, $whiteness: 20%, $blackness: 40%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: #339966;\n}\n',
  },
]
