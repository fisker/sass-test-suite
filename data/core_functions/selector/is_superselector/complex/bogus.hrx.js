// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/complex/bogus.hrx

export default [
  {
    name: 'super/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("> c", "c")}\n',
  },
  {
    name: 'super/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'super/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $super: > c is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.is-superselector("> c", "c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'sub/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("c", "d + ~ c")}\n',
  },
  {
    name: 'sub/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'sub/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $sub: d + ~ c is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.is-superselector("c", "d + ~ c")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
]
