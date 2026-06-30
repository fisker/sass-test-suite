export default [
  {
    name: 'input.scss',
    data: '$foo: \\/ !global;\n.foo#{$foo}bar { a: b; }\n',
  },
  {
    name: 'output.css',
    data: '.foo\\/bar {\n  a: b;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [new-global]: As of Dart Sass 2.0.0, !global assignments won't be able to declare new variables.\n\nSince this assignment is at the root of the stylesheet, the !global flag is\nunnecessary and can safely be removed.\n\n  ,\n1 | $foo: \\/ !global;\n  | ^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:1  root stylesheet\n",
  },
]
