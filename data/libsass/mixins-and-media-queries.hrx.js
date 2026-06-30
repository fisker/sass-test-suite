export default [
  {
    name: 'input.scss',
    data: '@media screen and (orientation:landscape) {\n  span {\n    background: blue;\n  }\n  /* fudge */\n  // @include foo;\n  /* budge */\n  div {\n    color: red;\n  }\n}\n\n@mixin testComments {\n  /* crash */\n  p {\n    width: 100px;\n  }\n}\n\n@media screen and (orientation:landscape) {\n  @include testComments;\n}',
  },
  {
    name: 'output.css',
    data: '@media screen and (orientation: landscape) {\n  span {\n    background: blue;\n  }\n\n  /* fudge */\n  /* budge */\n  div {\n    color: red;\n  }\n}\n@media screen and (orientation: landscape) {\n  /* crash */\n  p {\n    width: 100px;\n  }\n}\n',
  },
]
