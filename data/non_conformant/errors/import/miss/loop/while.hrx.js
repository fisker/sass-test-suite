export default [
  {
    name: 'input.scss',
    data: "$count: 0;\r\n@while ($count < 1) {\r\n  @import '_include';\r\n  $count: $count + 1;\r\n}\r\n",
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n3 |   @import '_include';\r\n  |   ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:3  root stylesheet\n",
  },
]
