// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/136_test_combinator_unification_for_hacky_combinators.hrx

export default [
  {
    name: 'input.scss',
    data: '.a ~ > + x {a: b}\n.b > + y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ".a ~ > + x" is invalid CSS. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n1 | .a ~ > + x {a: b}\n  | ^^^^^^^^^^\n  \'\n    input.scss 1:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector ".b > + y" is invalid CSS and can\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | .b > + y {@extend x}\n  | ^^^^^^^^ invalid selector\n  |           ========= @extend rule\n  \'\n    input.scss 2:1  root stylesheet\n',
  },
]
