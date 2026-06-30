// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/mixin/content/arguments/error/syntax.hrx

export default [
  {
    name: 'arglist/invalid/input.scss',
    data: '@mixin mixin {\n  @content;\n}\n\n@include mixin() using ($arg1: ) {}\n',
  },
  {
    name: 'arglist/invalid/error',
    data: "Error: Expected expression.\n  ,\n5 | @include mixin() using ($arg1: ) {}\n  |                                ^\n  '\n  input.scss 5:32  root stylesheet\n",
  },
  {
    name: 'arglist/missing/input.scss',
    data: '@mixin mixin {\n  @content;\n}\n\n@include mixin using {}\n',
  },
  {
    name: 'arglist/missing/error',
    data: 'Error: expected "(".\n  ,\n5 | @include mixin using {}\n  |                      ^\n  \'\n  input.scss 5:22  root stylesheet\n',
  },
  {
    name: 'arglist/missing_parens/input.scss',
    data: '@mixin mixin {\n  @content;\n}\n\n@include mixin using $arg1 {}\n',
  },
  {
    name: 'arglist/missing_parens/error',
    data: 'Error: expected "(".\n  ,\n5 | @include mixin using $arg1 {}\n  |                      ^\n  \'\n  input.scss 5:22  root stylesheet\n',
  },
  {
    name: 'missing_using/input.scss',
    data: '@mixin mixin {\n  @content;\n}\n\n@include mixin() () {}\n',
  },
  {
    name: 'missing_using/error',
    data: 'Error: expected ";".\n  ,\n5 | @include mixin() () {}\n  |                  ^\n  \'\n  input.scss 5:18  root stylesheet\n',
  },
  {
    name: 'missing_block/input.scss',
    data: '@mixin mixin {\n  @content;\n}\n\n@include mixin using ();\n',
  },
  {
    name: 'missing_block/error',
    data: 'Error: expected "{".\n  ,\n5 | @include mixin using ();\n  |                        ^\n  \'\n  input.scss 5:24  root stylesheet\n',
  },
]
