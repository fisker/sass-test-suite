// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/with/core_module.hrx

export default [
  {
    name: 'indirect/input.scss',
    data: '// Regression test for sass/dart-sass#838.\n@use "sass:meta";\n@include meta.load-css("other", $with: (c: e));\n',
  },
  {
    name: 'indirect/_other.scss',
    data: '@use "sass:color";\n\n$c: d !default;\n\na {b: $c}\n',
  },
  {
    name: 'indirect/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
]
