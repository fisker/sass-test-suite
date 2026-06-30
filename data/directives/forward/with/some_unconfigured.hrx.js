// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/some_unconfigured.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream" with ($a: configured a);\n',
  },
  {
    name: '_upstream.scss',
    data: '$a: original a !default;\n$b: original b !default;\n\nc {\n  a: $a;\n  b: $b;\n}\n',
  },
  {
    name: 'output.css',
    data: 'c {\n  a: configured a;\n  b: original b;\n}\n',
  },
]
