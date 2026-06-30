// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/with/through_forward.hrx

export default [
  {
    name: 'bare/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("loaded", $with: (a: configured));\n',
  },
  {
    name: 'bare/_loaded.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'bare/_forwarded.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'bare/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'transitive/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("loaded", $with: (a: configured));\n',
  },
  {
    name: 'transitive/_loaded.scss',
    data: '@forward "midstream";\n',
  },
  {
    name: 'transitive/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'transitive/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'transitive/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'with/default/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("loaded", $with: (a: from input));\n',
  },
  {
    name: 'with/default/_loaded.scss',
    data: '@forward "forwarded" with ($a: from loaded !default);\n',
  },
  {
    name: 'with/default/_forwarded.scss',
    data: '$a: from forwarded !default;\nb {c: $a}\n',
  },
  {
    name: 'with/default/output.css',
    data: 'b {\n  c: from input;\n}\n',
  },
  {
    name: 'with/null/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("loaded", $with: (a: null));\n',
  },
  {
    name: 'with/null/_loaded.scss',
    data: '@forward "forwarded" with ($a: from loaded !default);\n',
  },
  {
    name: 'with/null/_forwarded.scss',
    data: '$a: from forwarded !default;\nb {c: $a}\n',
  },
  {
    name: 'with/null/output.css',
    data: 'b {\n  c: from loaded;\n}\n',
  },
  {
    name: 'with/unconfigured/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("loaded", $with: (a: from input));\n',
  },
  {
    name: 'with/unconfigured/_loaded.scss',
    data: '@forward "forwarded" with ($b: from loaded);\n',
  },
  {
    name: 'with/unconfigured/_forwarded.scss',
    data: '$a: from forwarded !default;\n$b: from forwarded !default;\nc {\n  a: $a;\n  b: $b;\n}\n',
  },
  {
    name: 'with/unconfigured/output.css',
    data: 'c {\n  a: from input;\n  b: from loaded;\n}\n',
  },
  {
    name: 'show/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("loaded", $with: (a: configured));\n',
  },
  {
    name: 'show/_loaded.scss',
    data: '@forward "forwarded" show $a;\n',
  },
  {
    name: 'show/_forwarded.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'show/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'hide/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("loaded", $with: (a: configured));\n',
  },
  {
    name: 'hide/_loaded.scss',
    data: '@forward "forwarded" hide $b;\n',
  },
  {
    name: 'hide/_forwarded.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'hide/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'as/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("loaded", $with: (b-a: configured));\n',
  },
  {
    name: 'as/_loaded.scss',
    data: '@forward "forwarded" as b-*;\n',
  },
  {
    name: 'as/_forwarded.scss',
    data: '$a: original !default;\nc {d: $a}\n',
  },
  {
    name: 'as/output.css',
    data: 'c {\n  d: configured;\n}\n',
  },
]
