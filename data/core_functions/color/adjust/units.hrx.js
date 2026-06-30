export default [
  {
    name: 'hue/deg/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 60deg)}\n',
  },
  {
    name: 'hue/deg/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'hue/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 60)}\n',
  },
  {
    name: 'hue/unitless/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'hue/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 60in)}\n',
  },
  {
    name: 'hue/unknown/output.css',
    data: 'a {\n  b: yellow;\n}\n',
  },
  {
    name: 'hue/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $hue: Passing a unit other than deg (60in) is deprecated.\n\nTo preserve current behavior: calc($hue / 1in)\n\nSee https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.adjust(red, $hue: 60in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'hue/angle/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $hue: 60rad)}\n',
  },
  {
    name: 'hue/angle/output.css',
    data: 'a {\n  b: rgb(0, 179.576224164, 255);\n}\n',
  },
  {
    name: 'saturation/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $saturation: -10%)}\n',
  },
  {
    name: 'saturation/percent/output.css',
    data: 'a {\n  b: rgb(242.25, 12.75, 12.75);\n}\n',
  },
  {
    name: 'saturation/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $saturation: -10)}\n',
  },
  {
    name: 'saturation/unitless/output.css',
    data: 'a {\n  b: rgb(242.25, 12.75, 12.75);\n}\n',
  },
  {
    name: 'saturation/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (-10) is deprecated.\n\nTo preserve current behavior: $saturation * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.adjust(red, $saturation: -10)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'saturation/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $saturation: -10in)}\n',
  },
  {
    name: 'saturation/unknown/output.css',
    data: 'a {\n  b: rgb(242.25, 12.75, 12.75);\n}\n',
  },
  {
    name: 'saturation/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $saturation: Passing a number without unit % (-10in) is deprecated.\n\nTo preserve current behavior: calc($saturation / 1in * 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.adjust(red, $saturation: -10in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 10%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: #ff3333;\n}\n',
  },
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 10)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: #ff3333;\n}\n',
  },
  {
    name: 'lightness/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (10) is deprecated.\n\nTo preserve current behavior: $lightness * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.adjust(red, $lightness: 10)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'lightness/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $lightness: 10in)}\n',
  },
  {
    name: 'lightness/unknown/output.css',
    data: 'a {\n  b: #ff3333;\n}\n',
  },
  {
    name: 'lightness/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $lightness: Passing a number without unit % (10in) is deprecated.\n\nTo preserve current behavior: calc($lightness / 1in * 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.adjust(red, $lightness: 10in)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $alpha: -0.3)}\n',
  },
  {
    name: 'alpha/unitless/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.7);\n}\n',
  },
  {
    name: 'alpha/percent/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $alpha: -0.3%)}\n',
  },
  {
    name: 'alpha/percent/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.7);\n}\n',
  },
  {
    name: 'alpha/percent/warning',
    data: "DEPRECATION WARNING [function-units]: $alpha: Passing a number with unit % is deprecated.\n\nTo preserve current behavior: calc($alpha / 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.adjust(red, $alpha: -0.3%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $alpha: -0.3px)}\n',
  },
  {
    name: 'alpha/unknown/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.7);\n}\n',
  },
  {
    name: 'alpha/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $alpha: Passing a number with unit px is deprecated.\n\nTo preserve current behavior: calc($alpha / 1px)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.adjust(red, $alpha: -0.3px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
]
