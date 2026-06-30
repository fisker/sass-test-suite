export default [
  {
    name: 'global/first_declaration/top_level/input.scss',
    data: '$var: value !global;\na {b: $var}\n',
  },
  {
    name: 'global/first_declaration/top_level/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'global/first_declaration/top_level/warning',
    data: "DEPRECATION WARNING [new-global]: As of Dart Sass 2.0.0, !global assignments won't be able to declare new variables.\n\nSince this assignment is at the root of the stylesheet, the !global flag is\nunnecessary and can safely be removed.\n\n  ,\n1 | $var: value !global;\n  | ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'global/first_declaration/nested/input.scss',
    data: 'x {$var: value !global}\na {b: $var}\n',
  },
  {
    name: 'global/first_declaration/nested/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'global/first_declaration/nested/warning',
    data: "DEPRECATION WARNING [new-global]: As of Dart Sass 2.0.0, !global assignments won't be able to declare new variables.\n\nRecommendation: add `$var: null` at the stylesheet root.\n\n  ,\n1 | x {$var: value !global}\n  |    ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:4  root stylesheet\n",
  },
]
