export default [
  {
    name: 'before_arg/scss/input.scss',
    data: 'a {b: c}\nd {@extend\n  a}\n',
  },
  {
    name: 'before_arg/scss/output.css',
    data: 'a, d {\n  b: c;\n}\n',
  },
  {
    name: 'before_arg/sass/input.sass',
    data: 'a\n  b: c\nd\n  @extend\n    a\n  e: f\n',
  },
  {
    name: 'before_arg/sass/output.css',
    data: 'a, d {\n  b: c;\n}\n\nd {\n  e: f;\n}\n',
  },
  {
    name: 'before_optional/scss/input.scss',
    data: 'a {@extend b \n  !optional}\n',
  },
  {
    name: 'before_optional/scss/output.css',
    data: '',
  },
  {
    name: 'after_arg/sass/input.sass',
    data: 'a\n  b: c\nd\n  @extend\n    a\nb\n  e: f\n',
  },
  {
    name: 'after_arg/sass/output.css',
    data: 'a, d {\n  b: c;\n}\n\nb {\n  e: f;\n}\n',
  },
  {
    name: 'multiple_selectors/newline/sass/input.sass',
    data: 'a\n  b: c\nd\n  e: f\n\ng\n  @extend a\n  d\n',
  },
  {
    name: 'multiple_selectors/newline/sass/output.css',
    data: 'a, g {\n  b: c;\n}\n\nd {\n  e: f;\n}\n',
  },
  {
    name: 'multiple_selectors/newline/sass/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n8 |   d\n  |   ^\n  '\n    input.sass 8:3  root stylesheet\n",
  },
  {
    name: 'multiple_selectors/comma/sass/input.sass',
    data: 'a\n  b: c\nd\n  e: f\n\ng\n  @extend a,\n  d\n',
  },
  {
    name: 'multiple_selectors/comma/sass/output.css',
    data: 'a, g {\n  b: c;\n}\n\nd {\n  e: f;\n}\n',
  },
  {
    name: 'multiple_selectors/comma/sass/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n8 |   d\n  |   ^\n  '\n    input.sass 8:3  root stylesheet\n",
  },
  {
    name: 'error/before_optional/sass/input.sass',
    data: 'a\n  @extend b\n  !optional\n',
  },
  {
    name: 'error/before_optional/sass/error',
    data: "Error: Expected newline.\n  ,\n2 |   @extend b\n  |            ^\n  '\n  input.sass 2:12  root stylesheet\n",
  },
  {
    name: 'error/after_arg_indented/sass/input.sass',
    data: 'a\n  b: c\nd\n  @extend\n    a\n    b\n  e: f\n',
  },
  {
    name: 'error/after_arg_indented/sass/error',
    data: "Error: Nothing may be indented beneath a @extend rule.\n  ,\n6 |     b\n  |     ^\n  '\n  input.sass 6:5  root stylesheet\n",
  },
]
