export default [
  {
    name: 'input.scss',
    data: '.example {\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n@media screen and (min-width:768px) {\n\n    #footer {\n        .row {\n            @extend .example;\n        }\n    }\n\n}',
  },
  {
    name: 'error',
    data: "Error: From line 1, column 1 of input.scss: \n  ,\n1 | .example {\n  | ^^^^^^^^^\n  '\nYou may not @extend selectors across media queries.\n  ,\n9 |             @extend .example;\n  |             ^^^^^^^^^^^^^^^^\n  '\n  input.scss 9:13  root stylesheet\n",
  },
]
