export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\nfoo {color: color.adjust(black, $lightness: -10%)}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: hsl(0, 0%, -10%);\n}\n',
  },
]
