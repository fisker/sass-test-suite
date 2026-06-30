export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n@function foo() { @return null; }\n$foo: null;\na {\n    foo: bar;\n    variable: $foo;\n    function: foo();\n    unquote: string.unquote($foo);\n}\n\nb {\n    variable: $foo;\n    function: foo();\n    unquote: string.unquote($foo);\n}\n',
  },
  {
    name: 'error',
    data: "Error: $string: null is not a string.\n  ,\n8 |     unquote: string.unquote($foo);\n  |              ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 8:14  root stylesheet\n",
  },
]
