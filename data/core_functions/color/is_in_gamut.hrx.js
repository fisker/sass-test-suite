export default [
  {
    name: 'rgb/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color.change(black, $green: 300))}\n',
  },
  {
    name: 'rgb/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'rgba/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color.change(rgba(0 122 180 / 0.4), $red: -1))}\n',
  },
  {
    name: 'rgba/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'hwb/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(hwb(0 300% -1%))}\n',
  },
  {
    name: 'hwb/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'hsl/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(hsl(0 0% -1%))}\n',
  },
  {
    name: 'hsl/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'srgb/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(srgb 0 0 1.5))}\n',
  },
  {
    name: 'srgb/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'srgb-linear/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(srgb-linear -1 0 0))}\n',
  },
  {
    name: 'srgb-linear/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'display-p3/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(display-p3 0 2 0))}\n',
  },
  {
    name: 'display-p3/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'display-p3-linear/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(display-p3-linear 0 2 0))}\n',
  },
  {
    name: 'display-p3-linear/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'a98-rgb/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(a98-rgb 0 1 -1))}\n',
  },
  {
    name: 'a98-rgb/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'prophoto-rgb/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(prophoto-rgb 2 0 0))}\n',
  },
  {
    name: 'prophoto-rgb/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'rec2020/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(rec2020 0.979780 -1 0.00579))}\n',
  },
  {
    name: 'rec2020/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'xyz/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(xyz 0.0426 0.0442 0.0364))}\n',
  },
  {
    name: 'xyz/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'xyz-d50/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(xyz-d50 0.2005 0.14089 0.4472))}\n',
  },
  {
    name: 'xyz-d50/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'xyz-d65/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(xyz-d65 0.21661 0.14602 0.59452))}\n',
  },
  {
    name: 'xyz-d65/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'lab/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(lab(5 110 115))}\n',
  },
  {
    name: 'lab/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'lch/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(lch(90.6 52.8 197))}\n',
  },
  {
    name: 'lch/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'oklab/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(oklab(0.44027 0.08818 -0.13386))}\n',
  },
  {
    name: 'oklab/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'oklch/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(oklch(70% 0.1 200))}\n',
  },
  {
    name: 'oklch/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hex/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(#f2ece4)}\n',
  },
  {
    name: 'hex/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'color_keyword/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(midnightblue)}\n',
  },
  {
    name: 'color_keyword/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut($color: color(display-p3 1 1 0), $space: srgb)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'space/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(display-p3 1 1 0), oklch)}\n',
  },
  {
    name: 'space/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'wide_narrow/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(color(display-p3 1 1 0), hwb)}\n',
  },
  {
    name: 'wide_narrow/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'narrow_wide/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(hsl(50 40% 30%), oklab)}\n',
  },
  {
    name: 'narrow_wide/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'oklab_lch/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(oklab(0.44027 0.08818 -0.13386), lch)}\n',
  },
  {
    name: 'oklab_lch/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.is-in-gamut()}\n  |       ^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function is-in-gamut($color, $space: null) {\n  |           ================================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/error ',
    data: '',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(rgb(0 255 0), hwb, c)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: color.is-in-gamut(rgb(0 255 0), hwb, c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function is-in-gamut($color, $space: null) {\n  |           ================================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.is-in-gamut(1)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space_unknown/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(rgb(0 255 0), c)}\n',
  },
  {
    name: 'error/space_unknown/error',
    data: 'Error: $space: Unknown color space "c".\n  ,\n2 | a {b: color.is-in-gamut(rgb(0 255 0), c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/invalid_character_start/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(rgb(0 255 0), .hsl)}\n',
  },
  {
    name: 'error/invalid_character_start/error',
    data: "Error: Expected digit.\n  ,\n2 | a {b: color.is-in-gamut(rgb(0 255 0), .hsl)}\n  |                                        ^\n  '\n  input.scss 2:40  root stylesheet\n",
  },
  {
    name: 'error/invalid_character_end/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(rgb(0 255 0), hsl.)}\n',
  },
  {
    name: 'error/invalid_character_end/error',
    data: "Error: Expected identifier.\n  ,\n2 | a {b: color.is-in-gamut(rgb(0 255 0), hsl.)}\n  |                                           ^\n  '\n  input.scss 2:43  root stylesheet\n",
  },
  {
    name: 'error/quoted/input.scss',
    data: '@use "sass:color";\na {b: color.is-in-gamut(rgb(0 255 0), "hsl")}\n',
  },
  {
    name: 'error/quoted/error',
    data: 'Error: $space: Expected "hsl" to be an unquoted string.\n  ,\n2 | a {b: color.is-in-gamut(rgb(0 255 0), "hsl")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n\n',
  },
]
