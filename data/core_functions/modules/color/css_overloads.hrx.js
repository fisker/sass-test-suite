// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/css_overloads.hrx

export default [
  {
    name: 'README.md',
    data: 'CSS overloads are still supported for module functions to ease the transition,\nbut they should produce deprecation warnings.\n',
  },
  {
    name: 'grayscale/input.scss',
    data: '@use "sass:color";\na {b: color.grayscale(1)}\n',
  },
  {
    name: 'grayscale/output.css',
    data: 'a {\n  b: grayscale(1);\n}\n',
  },
  {
    name: 'grayscale/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Passing a number (1) to color.grayscale() is deprecated.\n\nRecommendation: grayscale(1)\n\n  ,\n2 | a {b: color.grayscale(1)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'invert/input.scss',
    data: '@use "sass:color";\na {b: color.invert(1)}\n',
  },
  {
    name: 'invert/output.css',
    data: 'a {\n  b: invert(1);\n}\n',
  },
  {
    name: 'invert/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Passing a number (1) to color.invert() is deprecated.\n\nRecommendation: invert(1)\n\n  ,\n2 | a {b: color.invert(1)}\n  |       ^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/one_arg/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(c=d)}\n',
  },
  {
    name: 'alpha/one_arg/output.css',
    data: 'a {\n  b: alpha(c=d);\n}\n',
  },
  {
    name: 'alpha/one_arg/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Using color.alpha() for a Microsoft filter is deprecated.\n\nRecommendation: alpha(c=d)\n\n  ,\n2 | a {b: color.alpha(c=d)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'alpha/multi_arg/input.scss',
    data: '@use "sass:color";\na {b: color.alpha(c=d, e=f, g=h)}\n',
  },
  {
    name: 'alpha/multi_arg/output.css',
    data: 'a {\n  b: alpha(c=d, e=f, g=h);\n}\n',
  },
  {
    name: 'alpha/multi_arg/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Using color.alpha() for a Microsoft filter is deprecated.\n\nRecommendation: alpha(c=d, e=f, g=h)\n\n  ,\n2 | a {b: color.alpha(c=d, e=f, g=h)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'opacity/input.scss',
    data: '@use "sass:color";\na {b: color.opacity(1)}\n',
  },
  {
    name: 'opacity/output.css',
    data: 'a {\n  b: opacity(1);\n}\n',
  },
  {
    name: 'opacity/warning',
    data: "DEPRECATION WARNING [color-module-compat]: Passing a number (1 to color.opacity() is deprecated.\n\nRecommendation: opacity(1)\n\n  ,\n2 | a {b: color.opacity(1)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
]
