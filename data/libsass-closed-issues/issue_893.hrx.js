export default [
  {
    name: 'input.scss',
    data: '$gutter: 20px;\n\n.row {\n  margin: 0 -$gutter;\n}',
  },
  {
    name: 'output.css',
    data: '.row {\n  margin: -20px;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [strict-unary]: This operation is parsed as:\n\n    0 - $gutter\n\nbut you may have intended it to mean:\n\n    0 (-$gutter)\n\nAdd a space after - to clarify that it's meant to be a binary operation, or wrap\nit in parentheses to make it a unary operation. This will be an error in future\nversions of Sass.\n\nMore info and automated migrator: https://sass-lang.com/d/strict-unary\n\n  ,\n4 |   margin: 0 -$gutter;\n  |           ^^^^^^^^^^\n  '\n    input.scss 4:11  root stylesheet\n",
  },
]
