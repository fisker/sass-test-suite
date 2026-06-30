// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/null.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream" with ($a: null);\n',
  },
  {
    name: '_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: original;\n}\n',
  },
]
