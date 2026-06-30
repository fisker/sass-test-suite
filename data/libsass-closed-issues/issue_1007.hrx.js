export default [
  {
    name: 'input.scss',
    data: '/* start */ foo /* foo */ baz /* bar */ {\n    /* before */ margin /* X */: /* Y */ 0 /* */; /* after */\n} /* end */',
  },
  {
    name: 'output.css',
    data: '/* start */\nfoo baz {\n  /* before */\n  margin: 0; /* after */\n} /* end */\n',
  },
]
