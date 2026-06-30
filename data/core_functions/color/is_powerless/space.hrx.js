// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/is_powerless/space.hrx

export default [
  {
    name: 'powerless/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(grey, "hue", $space: hsl)}\n',
  },
  {
    name: 'powerless/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'not_powerless/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(grey, "a", $space: lab)}\n',
  },
  {
    name: 'not_powerless/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
