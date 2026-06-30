export default [
  {
    name: 'indirect/use/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c}\n',
  },
  {
    name: 'indirect/use/_midstream.scss',
    data: '// Regression test for sass/dart-sass#838.\n@forward "upstream" with ($c: e);\n',
  },
  {
    name: 'indirect/use/_upstream.scss',
    data: '@use "sass:color";\n\n$c: d !default;\n',
  },
  {
    name: 'indirect/use/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'indirect/forward/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c}\n',
  },
  {
    name: 'indirect/forward/_midstream.scss',
    data: '// Regression test for sass/dart-sass#838.\n@forward "upstream" with ($c: e);\n',
  },
  {
    name: 'indirect/forward/_upstream.scss',
    data: '@forward "sass:color";\n\n$c: d !default;\n',
  },
  {
    name: 'indirect/forward/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
]
