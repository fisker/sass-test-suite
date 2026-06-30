// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/with/core_module.hrx

export default [
  {
    name: 'indirect/use/input.scss',
    data: '// Regression test for sass/dart-sass#838.\n@use "other" with ($c: e);\n\na {b: other.$c}\n',
  },
  {
    name: 'indirect/use/_other.scss',
    data: '@use "sass:color";\n\n$c: d !default;\n',
  },
  {
    name: 'indirect/use/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'indirect/forward/input.scss',
    data: '// Regression test for sass/dart-sass#838.\n@use "other" with ($c: e);\n\na {b: other.$c}\n',
  },
  {
    name: 'indirect/forward/_other.scss',
    data: '@forward "sass:color";\n\n$c: d !default;\n',
  },
  {
    name: 'indirect/forward/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
]
