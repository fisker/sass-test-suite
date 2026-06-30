// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/trailing_comma.hrx

export default [
  {
    name: 'single/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'single/_midstream.scss',
    data: '@forward "upstream" with ($a: configured,);\n',
  },
  {
    name: 'single/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'single/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'default/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'default/_midstream.scss',
    data: '@forward "upstream" with ($a: configured !default,);\n',
  },
  {
    name: 'default/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'default/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
