export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n$character-code: f102;\n\ntest {\n\n  /* Expected: "\\f102" */\n\n  /* Sass 3.4 */\n  content: string.unquote("\\"\\\\#{$character-code}\\"");\n\n  /* Sass 3.3 */\n  content: string.slice("\\x", 1, 1) + $character-code;\n\n}',
  },
  {
    name: 'output.css',
    data: 'test {\n  /* Expected: "\\f102" */\n  /* Sass 3.4 */\n  content: "\\f102";\n  /* Sass 3.3 */\n  content: "xf102";\n}\n',
  },
]
