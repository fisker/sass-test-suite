// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/through_forward.hrx

export default [
  {
    name: 'bare/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'bare/_downstream.scss',
    data: '@forward "midstream" with ($a: configured);\n',
  },
  {
    name: 'bare/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'bare/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'bare/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'with/default/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'with/default/_downstream.scss',
    data: '@forward "midstream" with ($a: from downstream);\n',
  },
  {
    name: 'with/default/_midstream.scss',
    data: '@forward "upstream" with ($a: from midstream !default);\n',
  },
  {
    name: 'with/default/_upstream.scss',
    data: '$a: from upstream !default;\nb {c: $a}\n',
  },
  {
    name: 'with/default/output.css',
    data: 'b {\n  c: from downstream;\n}\n',
  },
  {
    name: 'with/null/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'with/null/_downstream.scss',
    data: '@forward "midstream" with ($a: null);\n',
  },
  {
    name: 'with/null/_midstream.scss',
    data: '@forward "upstream" with ($a: from midstream !default);\n',
  },
  {
    name: 'with/null/_upstream.scss',
    data: '$a: from upstream !default;\nb {c: $a}\n',
  },
  {
    name: 'with/null/output.css',
    data: 'b {\n  c: from midstream;\n}\n',
  },
  {
    name: 'with/unconfigured/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'with/unconfigured/_downstream.scss',
    data: '@forward "midstream" with ($a: from downstream);\n',
  },
  {
    name: 'with/unconfigured/_midstream.scss',
    data: '@forward "upstream" with ($b: from midstream !default);\n',
  },
  {
    name: 'with/unconfigured/_upstream.scss',
    data: '$a: from upstream !default;\n$b: from upstream !default;\nc {\n  a: $a;\n  b: $b;\n}\n',
  },
  {
    name: 'with/unconfigured/output.css',
    data: 'c {\n  a: from downstream;\n  b: from midstream;\n}\n',
  },
  {
    name: 'show/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'show/_downstream.scss',
    data: '@forward "midstream" with ($a: configured);\n',
  },
  {
    name: 'show/_midstream.scss',
    data: '@forward "upstream" show $a;\n',
  },
  {
    name: 'show/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'show/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'hide/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'hide/_downstream.scss',
    data: '@forward "midstream" with ($a: configured);\n',
  },
  {
    name: 'hide/_midstream.scss',
    data: '@forward "upstream" hide $b;\n',
  },
  {
    name: 'hide/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'hide/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'as/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'as/_downstream.scss',
    data: '@forward "midstream" with ($b-a: configured);\n',
  },
  {
    name: 'as/_midstream.scss',
    data: '@forward "upstream" as b-*;\n',
  },
  {
    name: 'as/_upstream.scss',
    data: '$a: original !default;\nc {d: $a}\n',
  },
  {
    name: 'as/output.css',
    data: 'c {\n  d: configured;\n}\n',
  },
  {
    name: 'with_unrelated_config/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'with_unrelated_config/_downstream.scss',
    data: '@forward "midstream" with ($from-midstream: configured);\n',
  },
  {
    name: 'with_unrelated_config/_midstream.scss',
    data: '@forward "upstream";\n\n$from-midstream: original !default;\n\na {from-midstream: $from-midstream}\n',
  },
  {
    name: 'with_unrelated_config/_upstream.scss',
    data: '$from-upstream: original !default;\nb {from-upstream: $from-upstream}\n',
  },
  {
    name: 'with_unrelated_config/output.css',
    data: 'b {\n  from-upstream: original;\n}\n\na {\n  from-midstream: configured;\n}\n',
  },
  {
    name: 'and_use/input.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'and_use/_downstream.scss',
    data: '// Regression test for sass/sass#2744.\n@use "midstream" with ($c: e);\n\na {b: midstream.$c}\n',
  },
  {
    name: 'and_use/_midstream.scss',
    data: '@forward "definition";\n@forward "user";\n',
  },
  {
    name: 'and_use/_definition.scss',
    data: '$c: d !default;\n',
  },
  {
    name: 'and_use/_user.scss',
    data: '@use "definition";\n',
  },
  {
    name: 'and_use/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
]
