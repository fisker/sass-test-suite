export default [
  {
    name: 'README.md',
    data: 'If a module is first loaded with a configuration, future loads with no\nconfiguration will use the configured module.\n',
  },
  {
    name: 'use/input.scss',
    data: '@use "upstream" with ($a: configured);\n@use "midstream";\n',
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
    data: '@use "upstream" with ($a: configured);\n@use "midstream";\nb {c: midstream.$a}\n',
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
    data: '// Regression test for sass/dart-sass#854.\n@use "midstream1" with ($a: overridden 1);\n@use "midstream2" with ($a: overridden 2);\n\nb {\n  midstream1: midstream1.$a;\n  midstream2: midstream2.$a;\n}\n',
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
    name: 'unused_configuration/input.scss',
    data: '@use "forwarded";\n@use "midstream" with ($a: overridden);\n\nb {\n  midstream: midstream.$a;\n}\n',
  },
  {
    name: 'unused_configuration/_midstream.scss',
    data: '@forward "forwarded";\n\n$a: default !default;\n',
  },
  {
    name: 'unused_configuration/_forwarded.scss',
    data: "// This file defines no variables, so it's allowed to be loaded with and without\n// configuration.\n",
  },
  {
    name: 'unused_configuration/output.css',
    data: 'b {\n  midstream: overridden;\n}\n',
  },
]
