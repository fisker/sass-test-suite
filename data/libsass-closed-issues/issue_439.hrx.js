export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n@mixin odd( $selector, $n) {\n  $selector: "& + " + $selector + " + " + $selector;\n  $placeholder: string.unique_id();\n  %#{$placeholder} { @content; }\n  #{$selector}:first-child {\n    #{$selector} { @extend %#{$placeholder}; }\n  }\n}\n\nul > {\n  @include odd( li, 5 ) { background: #ccc;  }\n}\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector "ul > + li + li:first-child + li + li" is invalid CSS and can\'t be an extender.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n7 |     #{$selector} { @extend %#{$placeholder}; }\n  |     ^^^^^^^^^^^^ invalid selector\n  |                    ======================== @extend rule\n  \'\n    input.scss 7:5   odd()\n    input.scss 12:3  root stylesheet\n',
  },
]
