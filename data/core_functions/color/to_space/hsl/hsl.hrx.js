// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hsl/hsl.hrx

export default [
  {
    name: 'in_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 20% 40%), hsl)}\n',
  },
  {
    name: 'in_range/output.css',
    data: 'a {\n  b: hsl(0, 20%, 40%);\n}\n',
  },
  {
    name: 'out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 200% -50%), hsl)}\n',
  },
  {
    name: 'out_of_range/output.css',
    data: 'a {\n  b: hsl(20, 200%, -50%);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(none 20% 30%), hsl)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: hsl(none 20% 30%);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg none 30%), hsl)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: hsl(10deg none 30%);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% none), hsl)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: hsl(10deg 20% none);\n}\n',
  },
]
