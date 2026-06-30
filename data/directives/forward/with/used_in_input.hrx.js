// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/used_in_input.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "midstream";\nb {c: midstream.$a}\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream" with ($a: configured);\n',
  },
  {
    name: '_upstream.scss',
    data: '$a: original !default;\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
