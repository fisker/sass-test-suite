export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(0deg 20% 30%), hwb)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: hsl(0, 55.5555555556%, 45%);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(20deg 200% -125%), hwb)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: hsl(200, 11.1111111111%, 212.5%);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(none 20% 30%), hsl)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: hsl(0, 55.5555555556%, 45%);\n}\n',
  },
  {
    name: 'missing/whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg none 30%), hsl)}\n',
  },
  {
    name: 'missing/whiteness/output.css',
    data: 'a {\n  b: hsl(10, 100%, 35%);\n}\n',
  },
  {
    name: 'missing/blackness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hwb(10deg 20% none), hsl)}\n',
  },
  {
    name: 'missing/blackness/output.css',
    data: 'a {\n  b: hsl(10, 100%, 60%);\n}\n',
  },
]
