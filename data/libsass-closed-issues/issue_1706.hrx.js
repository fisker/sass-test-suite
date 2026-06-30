export default [
  {
    name: 'input.scss',
    data: '@function calc($e) { @return custom; }\n@function -foo-calc($e) { @return custom; }\n\n.test {\n    a: calc(1px * 1%);\n    b: -foo-calc(2px * 2%);\n    c: call(calc, 3px * 3%);\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  a: custom;\n  b: -foo-calc(2px * 2%);\n  c: custom;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.call instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n7 |     c: call(calc, 3px * 3%);\n  |        ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 7:8  root stylesheet\n\nDEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function(calc))\n\n  ,\n7 |     c: call(calc, 3px * 3%);\n  |        ^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 7:8  root stylesheet\n",
  },
]
