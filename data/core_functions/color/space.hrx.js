export default [
  {
    name: 'rgb/input.scss',
    data: '@use "sass:color";\na {b: color.space(rgb(0 255 0))}\n',
  },
  {
    name: 'rgb/output.css',
    data: 'a {\n  b: rgb;\n}\n',
  },
  {
    name: 'rgba/input.scss',
    data: '@use "sass:color";\na {b: color.space(rgba(72 122 180 / .2))}\n',
  },
  {
    name: 'rgba/output.css',
    data: 'a {\n  b: rgb;\n}\n',
  },
  {
    name: 'hwb/input.scss',
    data: '@use "sass:color";\na {b: color.space(hwb(0 50% 0%))}\n',
  },
  {
    name: 'hwb/output.css',
    data: 'a {\n  b: hwb;\n}\n',
  },
  {
    name: 'hsl/input.scss',
    data: '@use "sass:color";\na {b: color.space(hsl(110 31% 32%))}\n',
  },
  {
    name: 'hsl/output.css',
    data: 'a {\n  b: hsl;\n}\n',
  },
  {
    name: 'hex/input.scss',
    data: '@use "sass:color";\na {b: color.space(#f2ece4)}\n',
  },
  {
    name: 'hex/output.css',
    data: 'a {\n  b: rgb;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.space($color: midnightblue)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb;\n}\n',
  },
  {
    name: 'srgb/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(srgb 0.45098 0.07843 0.823530))}\n',
  },
  {
    name: 'srgb/output.css',
    data: 'a {\n  b: srgb;\n}\n',
  },
  {
    name: 'srgb-linear/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(srgb-linear 0.45098 0.07843 0.823530))}\n',
  },
  {
    name: 'srgb-linear/output.css',
    data: 'a {\n  b: srgb-linear;\n}\n',
  },
  {
    name: 'display-p3/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(display-p3 0.515 0.35 0.3 / 1))}\n',
  },
  {
    name: 'display-p3/output.css',
    data: 'a {\n  b: display-p3;\n}\n',
  },
  {
    name: 'display_p3_linear/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(display-p3-linear 0.515 0.35 0.3 / 1))}\n',
  },
  {
    name: 'display_p3_linear/output.css',
    data: 'a {\n  b: display-p3-linear;\n}\n',
  },
  {
    name: 'a98-rgb/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(a98-rgb 0 1 0))}\n',
  },
  {
    name: 'a98-rgb/output.css',
    data: 'a {\n  b: a98-rgb;\n}\n',
  },
  {
    name: 'prophoto-rgb/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(prophoto-rgb 0.42444 0.934918 0.190922))}\n',
  },
  {
    name: 'prophoto-rgb/output.css',
    data: 'a {\n  b: prophoto-rgb;\n}\n',
  },
  {
    name: 'rec2020/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(rec2020 0.42053 0.979780 0.00579))}\n',
  },
  {
    name: 'rec2020/output.css',
    data: 'a {\n  b: rec2020;\n}\n',
  },
  {
    name: 'xyz/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(xyz 0.0426 0.0442 0.0364))}\n',
  },
  {
    name: 'xyz/output.css',
    data: 'a {\n  b: xyz;\n}\n',
  },
  {
    name: 'xyz-d50/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(xyz-d50 0.2005 0.14089 0.4472))}\n',
  },
  {
    name: 'xyz-d50/output.css',
    data: 'a {\n  b: xyz-d50;\n}\n',
  },
  {
    name: 'xyz-d65/input.scss',
    data: '@use "sass:color";\na {b: color.space(color(xyz-d65 0.21661 0.14602 0.59452))}\n',
  },
  {
    name: 'xyz-d65/output.css',
    data: 'a {\n  b: xyz;\n}\n',
  },
  {
    name: 'lab/input.scss',
    data: '@use "sass:color";\na {b: color.space(lab(5 110 115))}\n',
  },
  {
    name: 'lab/output.css',
    data: 'a {\n  b: lab;\n}\n',
  },
  {
    name: 'lch/input.scss',
    data: '@use "sass:color";\na {b: color.space(lch(90.6 52.8 197))}\n',
  },
  {
    name: 'lch/output.css',
    data: 'a {\n  b: lch;\n}\n',
  },
  {
    name: 'oklab/input.scss',
    data: '@use "sass:color";\na {b: color.space(oklab(0.44027 0.08818 -0.13386))}\n',
  },
  {
    name: 'oklab/output.css',
    data: 'a {\n  b: oklab;\n}\n',
  },
  {
    name: 'oklch/input.scss',
    data: '@use "sass:color";\na {b: color.space(oklch(70% 0.1 200))}\n',
  },
  {
    name: 'oklch/output.css',
    data: 'a {\n  b: oklch;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.space()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.space()}\n  |       ^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function space($color) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/error ',
    data: '',
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.space(rgb(0 255 0), a)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: color.space(rgb(0 255 0), a)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function space($color) {\n  |           ============= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.space(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.space(1)}\n  |       ^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
