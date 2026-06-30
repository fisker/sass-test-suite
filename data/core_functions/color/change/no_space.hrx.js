export default [
  {
    name: 'positional/input.scss',
    data: '@use "sass:color";\na {b: color.change(red)}\n',
  },
  {
    name: 'positional/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.change($color: red)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 50 50))}\n',
  },
  {
    name: 'non_legacy/output.css',
    data: 'a {\n  b: lab(50% 50 50);\n}\n',
  },
  {
    name: 'alpha/max/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgba(red, 0.5), $alpha: 1)}\n',
  },
  {
    name: 'alpha/max/output.css',
    data: 'a {\n  b: red;\n}\n',
  },
  {
    name: 'alpha/min/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgba(red, 0.5), $alpha: 0)}\n',
  },
  {
    name: 'alpha/min/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/high/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgba(red, 0.5), $alpha: 0.72)}\n',
  },
  {
    name: 'alpha/high/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.72);\n}\n',
  },
  {
    name: 'alpha/low/input.scss',
    data: '@use "sass:color";\na {b: color.change(rgba(red, 0.5), $alpha: 0.36)}\n',
  },
  {
    name: 'alpha/low/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.36);\n}\n',
  },
  {
    name: 'alpha/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 50 50), $alpha: 0.36)}\n',
  },
  {
    name: 'alpha/non_legacy/output.css',
    data: 'a {\n  b: lab(50% 50 50 / 0.36);\n}\n',
  },
  {
    name: 'alpha/units/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $alpha: 0.5)}\n',
  },
  {
    name: 'alpha/units/unitless/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'alpha/units/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $alpha: 50%)}\n',
  },
  {
    name: 'alpha/units/percent/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'alpha/units/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $alpha: 0.5px)}\n',
  },
  {
    name: 'alpha/units/unknown/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'alpha/units/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $alpha: Passing a unit other than % (0.5px) is deprecated.\n\nTo preserve current behavior: calc($alpha / 1px)\n\nSee https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.change(red, $alpha: 0.5px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(red, $alpha: none)}\n',
  },
  {
    name: 'alpha/none/output.css',
    data: 'a {\n  b: rgb(255 0 0 / none);\n}\n',
  },
]
