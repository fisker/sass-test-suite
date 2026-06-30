// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/complement.hrx

export default [
  {
    name: 'red/input.scss',
    data: '@use "sass:color";\na {b: color.complement(red)}\n',
  },
  {
    name: 'red/output.css',
    data: 'a {\n  b: aqua;\n}\n',
  },
  {
    name: 'turquoise/input.scss',
    data: '@use "sass:color";\na {b: color.complement(turquoise)}\n',
  },
  {
    name: 'turquoise/output.css',
    data: 'a {\n  b: #e04050;\n}\n',
  },
  {
    name: 'grayscale/gray/input.scss',
    data: '@use "sass:color";\na {b: color.complement(gray)}\n',
  },
  {
    name: 'grayscale/gray/output.css',
    data: 'a {\n  b: gray;\n}\n',
  },
  {
    name: 'grayscale/white/input.scss',
    data: '@use "sass:color";\na {b: color.complement(white)}\n',
  },
  {
    name: 'grayscale/white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'grayscale/black/input.scss',
    data: '@use "sass:color";\na {b: color.complement(black)}\n',
  },
  {
    name: 'grayscale/black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'alpha/input.scss',
    data: '@use "sass:color";\na {b: color.complement(rgba(turquoise, 0.7))}\n',
  },
  {
    name: 'alpha/output.css',
    data: 'a {\n  b: rgba(224, 64, 80, 0.7);\n}\n',
  },
  {
    name: 'explicit_space/input.scss',
    data: '@use "sass:color";\na {b: color.complement(red, hwb)}\n',
  },
  {
    name: 'explicit_space/output.css',
    data: 'a {\n  b: aqua;\n}\n',
  },
  {
    name: 'space/legacy/to_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.complement(red, $space: hwb)}\n',
  },
  {
    name: 'space/legacy/to_legacy/output.css',
    data: 'a {\n  b: aqua;\n}\n',
  },
  {
    name: 'space/legacy/to_modern/input.scss',
    data: '@use "sass:color";\na {b: color.complement(red, $space: oklch)}\n',
  },
  {
    name: 'space/legacy/to_modern/output.css',
    data: 'a {\n  b: hsl(188.199882451, 488.180958059%, 14.5886916745%);\n}\n',
  },
  {
    name: 'space/modern/to_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.complement(lab(50% 10 -20), $space: hsl)}\n',
  },
  {
    name: 'space/modern/to_legacy/output.css',
    data: 'a {\n  b: lab(61.7521821385% -8.5219772697 19.4842183485);\n}\n',
  },
  {
    name: 'space/modern/to_modern/input.scss',
    data: '@use "sass:color";\na {b: color.complement(lab(50% 10 -20), $space: oklch)}\n',
  },
  {
    name: 'space/modern/to_modern/output.css',
    data: 'a {\n  b: lab(51.226961501% -7.7080869407 21.8652805706);\n}\n',
  },
  {
    name: 'space/missing/legacy/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.complement(hsl(0deg 50% none))}\n',
  },
  {
    name: 'space/missing/legacy/same/implicit/output.css',
    data: 'a {\n  b: hsl(180deg 50% none);\n}\n',
  },
  {
    name: 'space/missing/legacy/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.complement(hsl(0deg 50% none), $space: hsl)}\n',
  },
  {
    name: 'space/missing/legacy/same/explicit/output.css',
    data: 'a {\n  b: hsl(180deg 50% none);\n}\n',
  },
  {
    name: 'space/missing/legacy/different/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.complement(hwb(0deg 50% none))}\n',
  },
  {
    name: 'space/missing/legacy/different/implicit/output.css',
    data: 'a {\n  b: hsl(180, 100%, 75%);\n}\n',
  },
  {
    name: 'space/missing/legacy/different/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.complement(hwb(0deg 50% none), $space: hsl)}\n',
  },
  {
    name: 'space/missing/legacy/different/explicit/output.css',
    data: 'a {\n  b: hsl(180, 100%, 75%);\n}\n',
  },
  {
    name: 'space/missing/modern/same/input.scss',
    data: '@use "sass:color";\na {b: color.complement(lch(none 50% 0deg), $space: hsl)}\n',
  },
  {
    name: 'space/missing/modern/same/output.css',
    data: 'a {\n  b: lch(none 0 none);\n}\n',
  },
  {
    name: 'space/missing/modern/different/input.scss',
    data: '@use "sass:color";\na {b: color.complement(color(srgb none 100 200), $space: oklch)}\n',
  },
  {
    name: 'space/missing/modern/different/output.css',
    data: 'a {\n  b: color(srgb 156.4212742119 85.1578604941 -71.226404054);\n}\n',
  },
  {
    name: 'space/missing/modern/analogous/input.scss',
    data: '@use "sass:color";\na {b: color.complement(lch(none 50% 0deg), $space: oklch)}\n',
  },
  {
    name: 'space/missing/modern/analogous/output.css',
    data: 'a {\n  b: lch(none 24.5072331187 180.9107983391deg);\n}\n',
  },
  {
    name: 'space/powerless/legacy/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.complement(hsl(0deg 0% 50%))}\n',
  },
  {
    name: 'space/powerless/legacy/implicit/output.css',
    data: 'a {\n  b: hsl(180, 0%, 50%);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.complement($color: red, $space: hwb)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: aqua;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.complement()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.complement()}\n  |       ^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function complement($color, $space: null) {\n  |           ================================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.complement(red, lch, 1)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: color.complement(red, lch, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function complement($color, $space: null) {\n  |           ================================ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.complement(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: 1 is not a color.\n  ,\n2 | a {b: color.complement(1)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/null_space/non_legacy/input.scss',
    data: '@use "sass:color";\na {b: color.complement(oklch(0.63 0.26 29.2))}\n',
  },
  {
    name: 'error/null_space/non_legacy/error',
    data: "Error: $space: null is not a string.\n  ,\n2 | a {b: color.complement(oklch(0.63 0.26 29.2))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space/non_polar_angle/input.scss',
    data: '@use "sass:color";\na {b: color.complement(red, xyz)}\n',
  },
  {
    name: 'error/space/non_polar_angle/error',
    data: "Error: $space: Color space xyz doesn't have a hue channel.\n  ,\n2 | a {b: color.complement(red, xyz)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space/missing/legacy/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.complement(hsl(none 30% 40%))}\n',
  },
  {
    name: 'error/space/missing/legacy/same/implicit/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: hsl(none 30% 40%)).\n  ,\n2 | a {b: color.complement(hsl(none 30% 40%))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space/missing/legacy/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.complement(hsl(none 30% 40%), $space: hsl)}\n',
  },
  {
    name: 'error/space/missing/legacy/same/explicit/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: hsl(none 30% 40%)).\n  ,\n2 | a {b: color.complement(hsl(none 30% 40%), $space: hsl)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space/missing/legacy/analogous/hue/input.scss',
    data: '@use "sass:color";\na {b: color.complement(hsl(none 30% 40%), $space: lch)}\n',
  },
  {
    name: 'error/space/missing/legacy/analogous/hue/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: lch(38.0910184332% 29.3078189694 none)).\n  ,\n2 | a {b: color.complement(hsl(none 30% 40%), $space: lch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space/missing/legacy/analogous/lightness/input.scss',
    data: '// This is an error specifically because hsl(0deg 50% none) converts through\n// rgb(0 0 0) to lch(none 0 none), so adjusting the hue fails.\n@use "sass:color";\na {b: color.complement(hsl(0deg 50% none), $space: lch)}\n',
  },
  {
    name: 'error/space/missing/legacy/analogous/lightness/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: lch(none 0 none)).\n  ,\n4 | a {b: color.complement(hsl(0deg 50% none), $space: lch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 4:7  root stylesheet\n",
  },
  {
    name: 'error/space/missing/modern/same/input.scss',
    data: '@use "sass:color";\na {b: color.complement(lch(40% 30% none), $space: hsl)}\n',
  },
  {
    name: 'error/space/missing/modern/same/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: hsl(none 46.6772108151% 42.1546574074%)).\n  ,\n2 | a {b: color.complement(lch(40% 30% none), $space: hsl)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space/missing/modern/analogous/input.scss',
    data: '@use "sass:color";\na {b: color.complement(lch(40% 30% none), $space: lch)}\n',
  },
  {
    name: 'error/space/missing/modern/analogous/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: lch(40% 45 none)).\n  ,\n2 | a {b: color.complement(lch(40% 30% none), $space: lch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space/powerless/legacy/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.complement(grey, $space: hsl)}\n',
  },
  {
    name: 'error/space/powerless/legacy/explicit/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: hsl(none 0% 50.1960784314%)).\n  ,\n2 | a {b: color.complement(grey, $space: hsl)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/space/powerless/modern/input.scss',
    data: '@use "sass:color";\na {b: color.complement(lab(50% 0 0), $space: lch)}\n',
  },
  {
    name: 'error/space/powerless/modern/error',
    data: "Error: $hue: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: lch(50% 0 none)).\n  ,\n2 | a {b: color.complement(lab(50% 0 0), $space: lch)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
