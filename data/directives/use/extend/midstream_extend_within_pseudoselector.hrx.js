// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/extend/midstream_extend_within_pseudoselector.hrx

export default [
  {
    name: 'README.md',
    data: 'Regression tests for sass/dart-sass#1297.\n',
  },
  {
    name: 'three_files/is/input.scss',
    data: '@use "midstream";\nin-input {\n  @extend in-midstream;\n  y: z;\n}\n',
  },
  {
    name: 'three_files/is/_midstream.scss',
    data: '@use "upstream";\n:is(in-midstream) {@extend in-upstream}\n',
  },
  {
    name: 'three_files/is/_upstream.scss',
    data: 'in-upstream {a: b}\n',
  },
  {
    name: 'three_files/is/output.css',
    data: 'in-upstream, :is(in-midstream, in-input) {\n  a: b;\n}\n\nin-input {\n  y: z;\n}\n',
  },
  {
    name: 'three_files/matches/input.scss',
    data: '@use "midstream";\nin-input {\n  @extend in-midstream;\n  y: z;\n}\n',
  },
  {
    name: 'three_files/matches/_midstream.scss',
    data: '@use "upstream";\n:matches(in-midstream) {@extend in-upstream}\n',
  },
  {
    name: 'three_files/matches/_upstream.scss',
    data: 'in-upstream {a: b}\n',
  },
  {
    name: 'three_files/matches/output.css',
    data: 'in-upstream, :matches(in-midstream, in-input) {\n  a: b;\n}\n\nin-input {\n  y: z;\n}\n',
  },
  {
    name: 'two_files/is/input.scss',
    data: '@use "upstream";\n:is(in-midstream) {@extend in-upstream}\n\nin-input {\n  @extend in-midstream;\n  y: z;\n}\n',
  },
  {
    name: 'two_files/is/_upstream.scss',
    data: 'in-upstream {a: b}\n',
  },
  {
    name: 'two_files/is/output.css',
    data: 'in-upstream, :is(in-midstream, in-input) {\n  a: b;\n}\n\nin-input {\n  y: z;\n}\n',
  },
  {
    name: 'two_files/matches/input.scss',
    data: '@use "upstream";\n:matches(in-midstream) {@extend in-upstream}\n\nin-input {\n  @extend in-midstream;\n  y: z;\n}\n',
  },
  {
    name: 'two_files/matches/_upstream.scss',
    data: 'in-upstream {a: b}\n',
  },
  {
    name: 'two_files/matches/output.css',
    data: 'in-upstream, :matches(in-midstream, in-input) {\n  a: b;\n}\n\nin-input {\n  y: z;\n}\n',
  },
]
