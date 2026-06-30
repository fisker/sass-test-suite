export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.hwb($hue: 0, $whiteness: 30%, $blackness: 40%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: hsl(0, 33.3333333333%, 45%);\n}\n',
  },
]
