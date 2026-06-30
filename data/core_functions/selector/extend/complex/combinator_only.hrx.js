export default [
  {
    name: 'selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("+", ".c", ".d")}\n',
  },
  {
    name: 'selector/output.css',
    data: 'a {\n  b: +;\n}\n',
  },
  {
    name: 'selector/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector: + is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend("+", ".c", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c", ".c", ">")}\n',
  },
  {
    name: 'extender/output.css',
    data: 'a {\n  b: .c, >;\n}\n',
  },
  {
    name: 'extender/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $extender: > is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c", ".c", ">")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
]
