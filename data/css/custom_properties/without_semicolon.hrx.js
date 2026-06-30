export default [
  {
    name: 'input.scss',
    data: ".simple-value {\n  // A custom property at the end of a style rule doesn't need a semicolon.\n  --without-semicolon: value\n}\n\n.bracketed-value {\n  --without-semicolon: {\n    a: b\n  }\n}\n",
  },
  {
    name: 'output.css',
    data: '.simple-value {\n  --without-semicolon: value ;\n}\n\n.bracketed-value {\n  --without-semicolon: {\n    a: b\n  } ;\n}\n',
  },
]
