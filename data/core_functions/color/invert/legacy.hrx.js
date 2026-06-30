export default [
  {
    name: 'no_space/white/input.scss',
    data: '@use "sass:color";\na {b: color.invert(white)}\n',
  },
  {
    name: 'no_space/white/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'no_space/black/input.scss',
    data: '@use "sass:color";\na {b: color.invert(black)}\n',
  },
  {
    name: 'no_space/black/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'no_space/gray/input.scss',
    data: '@use "sass:color";\na {b: color.invert(gray)}\n',
  },
  {
    name: 'no_space/gray/output.css',
    data: 'a {\n  b: #7f7f7f;\n}\n',
  },
  {
    name: 'no_space/turquoise/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise)}\n',
  },
  {
    name: 'no_space/turquoise/output.css',
    data: 'a {\n  b: #bf1f2f;\n}\n',
  },
  {
    name: 'no_space/out_of_gamut/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(\n  color.invert(color.change(rgb(0 50 0), $red: -100, $blue: 500))\n);\n',
  },
  {
    name: 'no_space/out_of_gamut/output.css',
    data: 'a {\n  value: hsl(45, 545.4545454545%, 21.568627451%);\n  space: rgb;\n  channels: 355 205 -245 / 1;\n}\n',
  },
  {
    name: 'no_space/weighted/min/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise, 0%)}\n',
  },
  {
    name: 'no_space/weighted/min/output.css',
    data: 'a {\n  b: turquoise;\n}\n',
  },
  {
    name: 'no_space/weighted/max/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise, 100%)}\n',
  },
  {
    name: 'no_space/weighted/max/output.css',
    data: 'a {\n  b: #bf1f2f;\n}\n',
  },
  {
    name: 'no_space/weighted/middle/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise, 50%)}\n',
  },
  {
    name: 'no_space/weighted/middle/output.css',
    data: 'a {\n  b: rgb(127.5, 127.5, 127.5);\n}\n',
  },
  {
    name: 'no_space/weighted/low/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise, 23%)}\n',
  },
  {
    name: 'no_space/weighted/low/output.css',
    data: 'a {\n  b: rgb(93.21, 179.61, 170.97);\n}\n',
  },
  {
    name: 'no_space/weighted/high/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise, 92%)}\n',
  },
  {
    name: 'no_space/weighted/high/output.css',
    data: 'a {\n  b: rgb(180.84, 46.44, 59.88);\n}\n',
  },
  {
    name: 'no_space/hsl/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hsl(30deg 20% 40%))}\n',
  },
  {
    name: 'no_space/hsl/output.css',
    data: 'a {\n  b: hsl(210, 20%, 60%);\n}\n',
  },
  {
    name: 'no_space/hwb/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hsl(30deg 20% 40%))}\n',
  },
  {
    name: 'no_space/hwb/output.css',
    data: 'a {\n  b: hsl(210, 20%, 60%);\n}\n',
  },
  {
    name: 'space/hsl/no_missing/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hsl(30deg 20% 40%), $space: hsl)}\n',
  },
  {
    name: 'space/hsl/no_missing/output.css',
    data: 'a {\n  b: hsl(210, 20%, 60%);\n}\n',
  },
  {
    name: 'space/hsl/missing/same/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hsl(30deg none 40%), $space: hsl)}\n',
  },
  {
    name: 'space/hsl/missing/same/output.css',
    data: 'a {\n  b: hsl(210deg none 60%);\n}\n',
  },
  {
    name: 'space/hsl/missing/analogous/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hsl(30deg none 40%), $space: lch)}\n',
  },
  {
    name: 'space/hsl/missing/analogous/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: lch(43.192289563% none none)).\n  ,\n2 | a {b: color.invert(hsl(30deg none 40%), $space: lch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'space/hwb/no_missing/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hwb(30deg 20% 40%), $space: hwb)}\n',
  },
  {
    name: 'space/hwb/no_missing/output.css',
    data: 'a {\n  b: #6699cc;\n}\n',
  },
  {
    name: 'space/hwb/missing/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hwb(30deg none 40%), $space: hwb)}\n',
  },
  {
    name: 'space/hwb/missing/output.css',
    data: 'a {\n  b: hwb(210deg 40% none);\n}\n',
  },
  {
    name: 'space/powerless/same/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hsl(120deg 0% 40%), $space: hsl)}\n',
  },
  {
    name: 'space/powerless/same/output.css',
    data: 'a {\n  b: hsl(300, 0%, 60%);\n}\n',
  },
  {
    name: 'space/powerless/different/input.scss',
    data: '@use "sass:color";\na {b: color.invert(hsl(120deg 0% 40%), $space: rgb)}\n',
  },
  {
    name: 'space/powerless/different/output.css',
    data: 'a {\n  b: hsl(0, 0%, 60%);\n}\n',
  },
  {
    name: 'space/modern/input.scss',
    data: '@use "sass:color";\na {b: color.invert(#abcdef, $space: display-p3)}\n',
  },
  {
    name: 'space/modern/output.css',
    data: 'a {\n  b: rgb(81.948808543, 49.5520621504, 10.5024231747);\n}\n',
  },
  {
    name: 'units/weight/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise, 10)}\n',
  },
  {
    name: 'units/weight/unitless/output.css',
    data: 'a {\n  b: rgb(76.7, 204.7, 191.9);\n}\n',
  },
  {
    name: 'units/weight/unitless/warning',
    data: "DEPRECATION WARNING [function-units]: $weight: Passing a number without unit % (10) is deprecated.\n\nTo preserve current behavior: $weight * 1%\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.invert(turquoise, 10)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'units/weight/unknown/input.scss',
    data: '@use "sass:color";\na {b: color.invert(turquoise, 10px)}\n',
  },
  {
    name: 'units/weight/unknown/output.css',
    data: 'a {\n  b: rgb(76.7, 204.7, 191.9);\n}\n',
  },
  {
    name: 'units/weight/unknown/warning',
    data: "DEPRECATION WARNING [function-units]: $weight: Passing a number without unit % (10px) is deprecated.\n\nTo preserve current behavior: calc($weight / 1px * 1%)\n\nMore info: https://sass-lang.com/d/function-units\n\n  ,\n2 | a {b: color.invert(turquoise, 10px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
]
