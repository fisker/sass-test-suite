// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/from_variable.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: '_midstream.scss',
    data: '$a: configured;\n@forward "upstream" with ($a: $a);\n',
  },
  {
    name: '_upstream.scss',
    data: '$a: original a !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
