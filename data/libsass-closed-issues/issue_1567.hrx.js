export default [
  {
    name: 'input.scss',
    data: '/* any */@media/* first */\n/* screen */screen /*something */ , /* else */\n/* not */not/* print */print /* final */ {  /* whatever */\n    body { line-height: 1.2 }\n}\n',
  },
  {
    name: 'output.css',
    data: '/* any */\n@media screen, not print { /* whatever */\n  body {\n    line-height: 1.2;\n  }\n}\n',
  },
]
