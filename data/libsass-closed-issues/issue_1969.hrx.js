export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n$base-text-color: #666;\n\n@function calcNavbarTextColor ($base-text-color) {\n        @return $base-text-color;\n}\n\n$header-text-color: calcNavbarTextColor($base-text-color);\n\n.test_class {\n        color: color.adjust($header-text-color, $lightness: 20%);\n}',
  },
  {
    name: 'output.css',
    data: '.test_class {\n  color: #999999;\n}\n',
  },
]
