export default [
  {
    name: 'input.sass',
    data: '$grid-width: 40px\r\n$gutter-width: 10px\r\n\r\n@function grid-width($n)\r\n  @return $n * $grid-width + ($n - 1) * $gutter-width\r\n\r\n#sidebar\r\n  width: grid-width(5)',
  },
  {
    name: 'output.css',
    data: '#sidebar {\n  width: 240px;\n}\n',
  },
]
