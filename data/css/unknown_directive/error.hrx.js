// https://github.com/sass/sass-spec/blob/HEAD/spec/css/unknown_directive/error.hrx

export default [
  {
    name: 'space_after_at/input.scss',
    data: '// No whitespace is allowed between the @ and the rule name.\n@ unknown;\n',
  },
  {
    name: 'space_after_at/error',
    data: "Error: Expected identifier.\n  ,\n2 | @ unknown;\n  |  ^\n  '\n  input.scss 2:2  root stylesheet\n",
  },
  {
    name: 'in_declaration/input.scss',
    data: "// Unknown at-rules aren't allowed in property declarations.\n.x {\n  y: {\n    @asdf;\n  }\n}\n",
  },
  {
    name: 'in_declaration/error',
    data: "Error: This at-rule is not allowed here.\n  ,\n4 |     @asdf;\n  |     ^^^^^\n  '\n  input.scss 4:5  root stylesheet\n",
  },
  {
    name: 'in_function/input.scss',
    data: "// Unknown at-rules aren't allowed in functions.\n@function foo() {\n  @asdf;\n  @return null;\n}\n",
  },
  {
    name: 'in_function/error',
    data: "Error: This at-rule is not allowed here.\n  ,\n3 |   @asdf;\n  |   ^^^^^\n  '\n  input.scss 3:3  root stylesheet\n",
  },
  {
    name: 'interpolation/space_after_at/input.scss',
    data: '// No whitespace is allowed between the @ and the rule name.\n@ #{"unknown"};\n',
  },
  {
    name: 'interpolation/space_after_at/error',
    data: 'Error: Expected identifier.\n  ,\n2 | @ #{"unknown"};\n  |  ^\n  \'\n  input.scss 2:2  root stylesheet\n',
  },
  {
    name: 'interpolation/in_declaration/input.scss',
    data: '// Unknown at-rules aren\'t allowed in property declarations.\n.x {\n  y: {\n    @#{"asdf"};\n  }\n}\n',
  },
  {
    name: 'interpolation/in_declaration/error',
    data: 'Error: Expected identifier.\n  ,\n4 |     @#{"asdf"};\n  |      ^\n  \'\n  input.scss 4:6  root stylesheet\n',
  },
  {
    name: 'interpolation/in_function/input.scss',
    data: '// Unknown at-rules aren\'t allowed in functions.\n@function foo() {\n  @#{"asdf"};\n  @return null;\n}\n',
  },
  {
    name: 'interpolation/in_function/error',
    data: 'Error: Expected identifier.\n  ,\n3 |   @#{"asdf"};\n  |    ^\n  \'\n  input.scss 3:4  root stylesheet\n',
  },
]
