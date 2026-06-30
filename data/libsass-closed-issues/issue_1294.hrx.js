// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1294.hrx

export default [
  {
    name: 'input.scss',
    data: '/*------------------------------------*\\\n  #BUTTONS\n\\*------------------------------------*/\n\nfoo {\n  display: inline-block; /* [1] */\n}\n',
  },
  {
    name: 'output.css',
    data: '/*------------------------------------*\\\n  #BUTTONS\n\\*------------------------------------*/\nfoo {\n  display: inline-block; /* [1] */\n}\n',
  },
]
