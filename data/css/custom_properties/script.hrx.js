export default [
  {
    name: 'input.scss',
    data: '.script {\n  // All script values except interpolation are interpreted statically.\n  --variable: $variable;\n  --operator: 1 + 1;\n  --function: red(#ffffff);\n  --list: (a b c);\n  --map: (a: b, c: d);\n}\n',
  },
  {
    name: 'output.css',
    data: '.script {\n  --variable: $variable;\n  --operator: 1 + 1;\n  --function: red(#ffffff);\n  --list: (a b c);\n  --map: (a: b, c: d);\n}\n',
  },
]
