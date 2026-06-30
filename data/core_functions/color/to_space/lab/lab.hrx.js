export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 50 -75), lab)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: lab(50% 50 -75);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% -150 150), lab)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: lab(50% -150 150);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(none 20 30), lab)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: lab(none 20 30);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% none 30), lab)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: lab(10% none 30);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 none), lab)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: lab(10% 20 none);\n}\n',
  },
]
