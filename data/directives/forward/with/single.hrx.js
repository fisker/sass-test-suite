// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/single.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream" with ($a: configured);\n',
  },
  {
    name: '_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
