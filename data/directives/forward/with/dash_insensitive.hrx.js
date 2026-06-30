// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/dash_insensitive.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream" with ($a_b: configured);\n',
  },
  {
    name: '_upstream.scss',
    data: '$a-b: original !default;\nb {c: $a-b}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
