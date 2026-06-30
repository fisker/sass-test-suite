export default [
  {
    name: 'input.scss',
    data: "@use \"sass:selector\";\n.theme1, .theme2 {\n  .something {\n    /* nothing */\n  }\n}\n\n$sel: selector.nest('.theme1, .theme2', '.something');\n  \n#{$sel} {\n  /* nothing */\n}\n",
  },
  {
    name: 'output.css',
    data: '.theme1 .something, .theme2 .something {\n  /* nothing */\n}\n\n.theme1 .something, .theme2 .something {\n  /* nothing */\n}\n',
  },
]
