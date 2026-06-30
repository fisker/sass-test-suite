// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/if.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: 'a {b: if(css(1): c; css(2): d; else: e)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: if(css(1): c; css(2): d; else: e);\n}\n',
  },
]
