// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_941.hrx

export default [
  {
    name: 'input.scss',
    data: '.one, /* 1 */\n.two /* 2 */ { /* 3 */\n\tcolor: #F00; /* 4 */\n}\n',
  },
  {
    name: 'output.css',
    data: '.one,\n.two { /* 3 */\n  color: #F00; /* 4 */\n}\n',
  },
]
