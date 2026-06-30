export default [
  {
    name: 'lightness/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $lightness: 100%)}\n',
  },
  {
    name: 'lightness/max/output.css',
    data: 'a {\n  b: oklab(100% 0.3 -0.25);\n}\n',
  },
  {
    name: 'lightness/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $lightness: -100%)}\n',
  },
  {
    name: 'lightness/min/output.css',
    data: 'a {\n  b: oklab(0% 0.3 -0.25);\n}\n',
  },
  {
    name: 'lightness/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $lightness: 0%)}\n',
  },
  {
    name: 'lightness/zero/output.css',
    data: 'a {\n  b: oklab(70% 0.3 -0.25);\n}\n',
  },
  {
    name: 'lightness/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $lightness: -33%)}\n',
  },
  {
    name: 'lightness/low/output.css',
    data: 'a {\n  b: oklab(46.9% 0.3 -0.25);\n}\n',
  },
  {
    name: 'lightness/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $lightness: 86%)}\n',
  },
  {
    name: 'lightness/high/output.css',
    data: 'a {\n  b: oklab(95.8% 0.3 -0.25);\n}\n',
  },
  {
    name: 'a/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $a: 100%)}\n',
  },
  {
    name: 'a/max/output.css',
    data: 'a {\n  b: oklab(70% 0.4 -0.25);\n}\n',
  },
  {
    name: 'a/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $a: -100%)}\n',
  },
  {
    name: 'a/min/output.css',
    data: 'a {\n  b: oklab(70% -0.4 -0.25);\n}\n',
  },
  {
    name: 'a/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $a: 0%)}\n',
  },
  {
    name: 'a/zero/output.css',
    data: 'a {\n  b: oklab(70% 0.3 -0.25);\n}\n',
  },
  {
    name: 'a/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $a: -86%)}\n',
  },
  {
    name: 'a/low/output.css',
    data: 'a {\n  b: oklab(70% -0.302 -0.25);\n}\n',
  },
  {
    name: 'a/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $a: 12%)}\n',
  },
  {
    name: 'a/high/output.css',
    data: 'a {\n  b: oklab(70% 0.312 -0.25);\n}\n',
  },
  {
    name: 'b/max/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $b: 100%)}\n',
  },
  {
    name: 'b/max/output.css',
    data: 'a {\n  b: oklab(70% 0.3 0.4);\n}\n',
  },
  {
    name: 'b/min/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $b: -100%)}\n',
  },
  {
    name: 'b/min/output.css',
    data: 'a {\n  b: oklab(70% 0.3 -0.4);\n}\n',
  },
  {
    name: 'b/zero/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $b: 0%)}\n',
  },
  {
    name: 'b/zero/output.css',
    data: 'a {\n  b: oklab(70% 0.3 -0.25);\n}\n',
  },
  {
    name: 'b/low/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $b: -16%)}\n',
  },
  {
    name: 'b/low/output.css',
    data: 'a {\n  b: oklab(70% 0.3 -0.274);\n}\n',
  },
  {
    name: 'b/high/input.scss',
    data: '@use "sass:color";\na {b: color.scale(oklab(70% 0.3 -0.25), $b: 42%)}\n',
  },
  {
    name: 'b/high/output.css',
    data: 'a {\n  b: oklab(70% 0.3 0.023);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(oklab(70% 0.3 -0.25), $lightness: 12%, $a: 24%, $b: 48%);\n}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: oklab(73.6% 0.324 0.062);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(oklab(70% 0.3 -0.25 / 0.3), $lightness: 12%, $a: 24%, $b: 48%);\n}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: oklab(73.6% 0.324 0.062 / 0.3);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale(\n    oklab(70% 0.3 -0.25),\n    $lightness: 12%, $a: 24%, $b: 48%, $alpha: -70%\n  );\n}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: oklab(73.6% 0.324 0.062 / 0.3);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {\n  b: color.scale($color: oklab(70% 0.3 -0.25), $lightness: 12%, $a: 24%, $b: 48%);\n}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: oklab(73.6% 0.324 0.062);\n}\n',
  },
]
