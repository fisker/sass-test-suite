// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/change/hwb.hrx

export default [
  {
    name: 'whiteness/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(#cc6666, $whiteness: 100%)}\n',
  },
  {
    name: 'whiteness/max/output.css',
    data: 'a {\n  b: rgb(212.5, 212.5, 212.5);\n}\n',
  },
  {
    name: 'whiteness/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(#cc6666, $whiteness: 0%)}\n',
  },
  {
    name: 'whiteness/min/output.css',
    data: 'a {\n  b: #cc0000;\n}\n',
  },
  {
    name: 'whiteness/high/input.scss',
    data: '@use "sass:color";\na {b: color.change(#cc6666, $whiteness: 80%)}\n',
  },
  {
    name: 'whiteness/high/output.css',
    data: 'a {\n  b: #cccccc;\n}\n',
  },
  {
    name: 'whiteness/low/input.scss',
    data: '@use "sass:color";\na {b: color.change(#cc6666, $whiteness: 20%)}\n',
  },
  {
    name: 'whiteness/low/output.css',
    data: 'a {\n  b: #cc3333;\n}\n',
  },
  {
    name: 'whiteness/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(hwb(180deg 30% 50%), $whiteness: none)}\n',
  },
  {
    name: 'whiteness/none/output.css',
    data: 'a {\n  b: hwb(180deg none 50%);\n}\n',
  },
  {
    name: 'blackness/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(#993333, $blackness: 100%)}\n',
  },
  {
    name: 'blackness/max/output.css',
    data: 'a {\n  b: rgb(42.5, 42.5, 42.5);\n}\n',
  },
  {
    name: 'blackness/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(#993333, $blackness: 0%)}\n',
  },
  {
    name: 'blackness/min/output.css',
    data: 'a {\n  b: #ff3333;\n}\n',
  },
  {
    name: 'blackness/high/input.scss',
    data: '@use "sass:color";\na {b: color.change(#993333, $blackness: 80%)}\n',
  },
  {
    name: 'blackness/high/output.css',
    data: 'a {\n  b: #333333;\n}\n',
  },
  {
    name: 'blackness/low/input.scss',
    data: '@use "sass:color";\na {b: color.change(#993333, $blackness: 20%)}\n',
  },
  {
    name: 'blackness/low/output.css',
    data: 'a {\n  b: #cc3333;\n}\n',
  },
  {
    name: 'blackness/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(hwb(180deg 30% 50%), $blackness: none)}\n',
  },
  {
    name: 'blackness/none/output.css',
    data: 'a {\n  b: hwb(180deg 30% none);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(#993333, $whiteness: 50%, $blackness: -20%)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: hsl(0, 233.3333333333%, 85%);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(blue, $hue: 150, $whiteness: 20%, $blackness: 40%)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: #339966;\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgba(blue, 0.7), $hue: 150, $whiteness: 20%, $blackness: 40%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: rgba(51, 153, 102, 0.7);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(blue, $hue: 150, $whiteness: 20%, $blackness: 40%, $alpha: 0.3)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: rgba(51, 153, 102, 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.change($color: blue, $hue: 150, $whiteness: 20%, $blackness: 40%)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: #339966;\n}\n',
  },
]
