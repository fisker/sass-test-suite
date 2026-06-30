// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/multi_load.hrx

export default [
  {
    name: 'README.md',
    data: 'If a module is first loaded with a configuration, future loads with no\nconfiguration will use the configured module.\n',
  },
  {
    name: 'use/input.scss',
    data: '@forward "upstream" with ($a: configured);\n@use "midstream";\n',
  },
  {
    name: 'use/_midstream.scss',
    data: '@use "upstream";\nb {c: upstream.$a}\n',
  },
  {
    name: 'use/_upstream.scss',
    data: '$a: original !default;\n',
  },
  {
    name: 'use/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'forward/input.scss',
    data: '@forward "upstream" with ($a: configured);\n@use "midstream";\nb {c: midstream.$a}\n',
  },
  {
    name: 'forward/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'forward/_upstream.scss',
    data: '$a: original !default;\n',
  },
  {
    name: 'forward/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'transitive/input.scss',
    data: '@use "downstream";\n\nb {\n  midstream1: downstream.$m1-a;\n  midstream2: downstream.$m2-a;\n}\n',
  },
  {
    name: 'transitive/_downstream.scss',
    data: '// Regression test for sass/dart-sass#854.\n@forward "midstream1" as m1-* with ($a: overridden 1);\n@forward "midstream2" as m2-* with ($a: overridden 2);\n',
  },
  {
    name: 'transitive/_midstream1.scss',
    data: '@use "upstream";\n$a: default 1 !default;\n',
  },
  {
    name: 'transitive/_midstream2.scss',
    data: '@use "upstream";\n$a: default 2 !default;\n',
  },
  {
    name: 'transitive/_upstream.scss',
    data: 'c {d: e}\n',
  },
  {
    name: 'transitive/output.css',
    data: 'c {\n  d: e;\n}\n\nb {\n  midstream1: overridden 1;\n  midstream2: overridden 2;\n}\n',
  },
  {
    name: 'through_forward/input.scss',
    data: '@use "downstream";\n\nb {\n  midstream: downstream.$a;\n}\n',
  },
  {
    name: 'through_forward/_downstream.scss',
    data: '@use "upstream";\n@forward "midstream" with ($a: overridden);\n',
  },
  {
    name: 'through_forward/_midstream.scss',
    data: '@forward "upstream";\n\n$a: default !default;\n',
  },
  {
    name: 'through_forward/_upstream.scss',
    data: "// This file defines no variables, so it's allowed to be loaded with and without\n// configuration.\n",
  },
  {
    name: 'through_forward/output.css',
    data: 'b {\n  midstream: overridden;\n}\n',
  },
  {
    name: 'already_configred_empty/input.scss',
    data: '// Regression test for sass/dart-sass#2598\n@use "downstream";\n\nb {\n  midstream: downstream.$a;\n}\n',
  },
  {
    name: 'already_configred_empty/_downstream.scss',
    data: '@use "upstream";\n@forward "midstream" with ($a: overridden);\n',
  },
  {
    name: 'already_configred_empty/_midstream.scss',
    data: '$a: default !default;\n@forward "upstream";\n',
  },
  {
    name: 'already_configred_empty/_upstream.scss',
    data: "// This file defines no variables, so it's allowed to be loaded with and without\n// configuration.\n",
  },
  {
    name: 'already_configred_empty/output.css',
    data: 'b {\n  midstream: overridden;\n}\n',
  },
]
