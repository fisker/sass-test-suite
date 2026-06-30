// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/units/feature-test.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@if meta.feature-exists(units-level-3) {\n  div {\n    feature: true;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  feature: true;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | @if meta.feature-exists(units-level-3) {\n  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:5  root stylesheet\n",
  },
]
