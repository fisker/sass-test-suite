// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/grayscale.hrx

export default [
  {
    name: 'legacy/no_saturation/white/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(white)}\n',
  },
  {
    name: 'legacy/no_saturation/white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'legacy/no_saturation/black/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(black)}\n',
  },
  {
    name: 'legacy/no_saturation/black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'legacy/no_saturation/gray/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(#494949)}\n',
  },
  {
    name: 'legacy/no_saturation/gray/output.css',
    data: 'a {\n  b: #494949;\n}\n',
  },
  {
    name: 'legacy/max_saturation/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(red)}\n',
  },
  {
    name: 'legacy/max_saturation/output.css',
    data: 'a {\n  b: rgb(127.5, 127.5, 127.5);\n}\n',
  },
  {
    name: 'legacy/mid_saturation/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(#633736)}\n',
  },
  {
    name: 'legacy/mid_saturation/output.css',
    data: 'a {\n  b: rgb(76.5, 76.5, 76.5);\n}\n',
  },
  {
    name: 'legacy/alpha/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(rgba(#633736, 0.3))}\n',
  },
  {
    name: 'legacy/alpha/output.css',
    data: 'a {\n  b: rgba(76.5, 76.5, 76.5, 0.3);\n}\n',
  },
  {
    name: 'legacy/powerless/same/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(hsl(120deg 10% 20%))}\n',
  },
  {
    name: 'legacy/powerless/same/output.css',
    data: 'a {\n  b: hsl(120, 0%, 20%);\n}\n',
  },
  {
    name: 'legacy/powerless/different/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(hwb(120deg 10% 20%))}\n',
  },
  {
    name: 'legacy/powerless/different/output.css',
    data: 'a {\n  b: hsl(0, 0%, 45%);\n}\n',
  },
  {
    name: 'legacy/missing/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(hsl(none none none))}\n',
  },
  {
    name: 'legacy/missing/output.css',
    data: 'a {\n  b: hsl(none 0% none);\n}\n',
  },
  {
    name: 'global/number/input.scss',
    data: '// A number should produce a plain function string, for CSS filter functions.\na {b: grayscale(15%)}\n',
  },
  {
    name: 'global/number/output.css',
    data: 'a {\n  b: grayscale(15%);\n}\n',
  },
  {
    name: 'global/with_css_var/input.scss',
    data: 'a {b: grayscale(var(--c))}\n',
  },
  {
    name: 'global/with_css_var/output.css',
    data: 'a {\n  b: grayscale(var(--c));\n}\n',
  },
  {
    name: 'global/with_calc/input.scss',
    data: 'a {b: grayscale(calc(1 + 2))}\n',
  },
  {
    name: 'global/with_calc/output.css',
    data: 'a {\n  b: grayscale(3);\n}\n',
  },
  {
    name: 'global/with_unquoted_calc/input.scss',
    data: "a {b: grayscale(unquote('calc(1)'))}\n",
  },
  {
    name: 'global/with_unquoted_calc/output.css',
    data: 'a {\n  b: grayscale(calc(1));\n}\n',
  },
  {
    name: 'global/with_unquoted_calc/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.unquote instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: grayscale(unquote('calc(1)'))}\n  |                 ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'number/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(1)}\n',
  },
  {
    name: 'number/output.css',
    data: 'a {\n  b: grayscale(1);\n}\n',
  },
  {
    name: 'number/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Passing a number (1) to color.grayscale() is deprecated.\n\nRecommendation: grayscale(1)\n\n  ,\n2 | a {b: color.grayscale(1)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale($color: white)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'modern/rectangular/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(lab(50 -30 40))}\n',
  },
  {
    name: 'modern/rectangular/output.css',
    data: 'a {\n  b: lab(48.5889256803% 0 0);\n}\n',
  },
  {
    name: 'modern/polar/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(lch(54.3 107 40.9))}\n',
  },
  {
    name: 'modern/polar/output.css',
    data: 'a {\n  b: lch(56.8545812484% 0 none);\n}\n',
  },
  {
    name: 'modern/predefined/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(color(xyz-d65 0.41 0.21 0.02))}\n',
  },
  {
    name: 'modern/predefined/output.css',
    data: 'a {\n  b: color(xyz 0.2328297704 0.2449664038 0.2667825607);\n}\n',
  },
  {
    name: 'modern/powerless/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(oklch(20% 10% 120deg))}\n',
  },
  {
    name: 'modern/powerless/output.css',
    data: 'a {\n  b: oklch(20% 0 120deg);\n}\n',
  },
  {
    name: 'modern/missing/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(oklch(none none none))}\n',
  },
  {
    name: 'modern/missing/output.css',
    data: 'a {\n  b: oklch(none 0 none);\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.grayscale()}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function grayscale($color) {\n  |           ================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(red, 1)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: color.grayscale(red, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function grayscale($color) {\n  |           ================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: c is not a color.\n  ,\n2 | a {b: color.grayscale(c)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/with_module/type/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(var(--c))}\n',
  },
  {
    name: 'error/with_module/type/error',
    data: "Error: $color: var(--c) is not a color.\n  ,\n2 | a {b: color.grayscale(var(--c))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
