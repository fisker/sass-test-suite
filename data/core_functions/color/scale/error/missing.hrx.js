// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/scale/error/missing.hrx

export default [
  {
    name: 'legacy/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgb(none 0 0), $red: 10%)}\n',
  },
  {
    name: 'legacy/error',
    data: "Error: $red: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: rgb(none 0 0)).\n  ,\n2 | a {b: color.scale(rgb(none 0 0), $red: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'modern/input.scss',
    data: '@use "sass:color";\na {b: color.scale(lab(none 0 0), $lightness: 10%, $space: lab)}\n',
  },
  {
    name: 'modern/error',
    data: "Error: $lightness: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: lab(none 0 0)).\n  ,\n2 | a {b: color.scale(lab(none 0 0), $lightness: 10%, $space: lab)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/input.scss',
    data: '@use "sass:color";\na {b: color.scale(rgb(0 0 0 / none), $alpha: 10%)}\n',
  },
  {
    name: 'alpha/error',
    data: "Error: $alpha: Because the CSS working group is still deciding on the best behavior, Sass doesn't currently support modifying missing channels (color: rgb(0 0 0 / none)).\n  ,\n2 | a {b: color.scale(rgb(0 0 0 / none), $alpha: 10%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
