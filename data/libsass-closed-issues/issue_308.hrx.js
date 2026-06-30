export default [
  {
    name: 'input.scss',
    data: '$var: orange;\n\n.test {\n  color: $var;\n}\n\n.#{$var} {\n  color: #C0362C;\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  color: orange;\n}\n\n.orange {\n  color: #C0362C;\n}\n',
  },
  {
    name: 'warning',
    data: 'WARNING: You probably don\'t mean to use the color value orange in interpolation here.\nIt may end up represented as orange, which will likely produce invalid CSS.\nAlways quote color names when using them as strings or map keys (for example, "orange").\nIf you really want to use the color value here, use \'"" + $var\'.\n\n  ,\n7 | .#{$var} {\n  |    ^^^^\n  \'\n    input.scss 7:4  root stylesheet\n',
  },
]
