// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/226_test_nested_selector_with_child_selector_hack_extender_and_extendee.hrx

export default [
  {
    name: 'input.scss',
    data: '> .foo {a: b}\n> foo bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '> .foo, > foo bar {\n  a: b;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "> .foo" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | > .foo {a: b}\n  | ^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector "> foo bar" is invalid CSS and shouldn\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | > foo bar {@extend .foo}\n  | ^^^^^^^^^ invalid selector\n  |            ============ @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
]
