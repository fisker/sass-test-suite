export default [
  {
    name: 'input.scss',
    data: '@function foo() {\n  @return "hello";\n}\n\n@mixin foo() {\n  content: "hello";\n}\n\ndiv {\n  span {\n    @function length($a, $b, $c, $d) {\n      @return $a + $b + $c + $d;\n    }\n\n    div {\n      content: foo();\n      @include foo();\n      width: length(1,2,2,3);\n    }\n  }\n\n  height: length(a b c d e);\n\n}',
  },
  {
    name: 'output.css',
    data: 'div span div {\n  content: "hello";\n  content: "hello";\n  width: 8;\n}\ndiv {\n  height: 5;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse list.length instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n   ,\n22 |   height: length(a b c d e);\n   |           ^^^^^^^^^^^^^^^^^\n   '\n    input.scss 22:11  root stylesheet\n",
  },
]
