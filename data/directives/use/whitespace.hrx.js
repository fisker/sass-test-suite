// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/whitespace.hrx

export default [
  {
    name: 'before_url/scss/input.scss',
    data: '@use\n  "other"\n',
  },
  {
    name: 'before_url/scss/other.scss',
    data: '',
  },
  {
    name: 'before_url/scss/output.css',
    data: '',
  },
  {
    name: 'before_url/sass/input.sass',
    data: '@use\n  "other"\n',
  },
  {
    name: 'before_url/sass/other.scss',
    data: '',
  },
  {
    name: 'before_url/sass/output.css',
    data: '',
  },
  {
    name: 'before_keyword/scss/input.scss',
    data: '@use "other"\n  as a\n',
  },
  {
    name: 'before_keyword/scss/other.scss',
    data: '',
  },
  {
    name: 'before_keyword/scss/output.css',
    data: '',
  },
  {
    name: 'after_keyword/scss/input.scss',
    data: '@use "other" as\n  a\n',
  },
  {
    name: 'after_keyword/scss/other.scss',
    data: '',
  },
  {
    name: 'after_keyword/scss/output.css',
    data: '',
  },
  {
    name: 'after_keyword/sass/input.sass',
    data: '@use "other" as\n  a\n',
  },
  {
    name: 'after_keyword/sass/other.scss',
    data: '',
  },
  {
    name: 'after_keyword/sass/output.css',
    data: '',
  },
  {
    name: 'after_with/scss/input.scss',
    data: '@use "other" with\n  ($a: b)\n',
  },
  {
    name: 'after_with/scss/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_with/scss/output.css',
    data: '',
  },
  {
    name: 'after_with/sass/input.sass',
    data: '@use "other" with\n  ($a: b)\n',
  },
  {
    name: 'after_with/sass/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_with/sass/output.css',
    data: '',
  },
  {
    name: 'after_paren/scss/input.scss',
    data: '@use "other" with (\n  $a: b)\n',
  },
  {
    name: 'after_paren/scss/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_paren/scss/output.css',
    data: '',
  },
  {
    name: 'after_paren/sass/input.sass',
    data: '@use "other" with (\n  $a: b)\n',
  },
  {
    name: 'after_paren/sass/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_paren/sass/output.css',
    data: '',
  },
  {
    name: 'before_colon/scss/input.scss',
    data: '@use "other" with ($a\n : b)\n',
  },
  {
    name: 'before_colon/scss/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'before_colon/scss/output.css',
    data: '',
  },
  {
    name: 'before_colon/sass/input.sass',
    data: '@use "other" with ($a\n  : b)\n',
  },
  {
    name: 'before_colon/sass/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'before_colon/sass/output.css',
    data: '',
  },
  {
    name: 'after_colon/scss/input.scss',
    data: '@use "other" with ($a:\n  b)\n',
  },
  {
    name: 'after_colon/scss/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_colon/scss/output.css',
    data: '',
  },
  {
    name: 'after_colon/sass/input.sass',
    data: '@use "other" with ($a:\n  b)\n',
  },
  {
    name: 'after_colon/sass/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'before_close_paren/scss/input.scss',
    data: '@use "other" with ($a: b\n  )\n',
  },
  {
    name: 'before_close_paren/scss/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'before_close_paren/scss/output.css',
    data: '',
  },
  {
    name: 'before_close_paren/sass/input.sass',
    data: '@use "other" with ($a: b\n  )\n',
  },
  {
    name: 'before_close_paren/sass/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'before_close_paren/sass/output.css',
    data: '',
  },
  {
    name: 'before_variable_comma/scss/input.scss',
    data: '@use "other" with ($a: b\n  , $c: d)\n',
  },
  {
    name: 'before_variable_comma/scss/other.scss',
    data: '$a: 1 !default;\n$c: 1 !default\n',
  },
  {
    name: 'before_variable_comma/scss/output.css',
    data: '',
  },
  {
    name: 'before_variable_comma/sass/input.sass',
    data: '@use "other" with ($a: b\n  , $c: d)\n',
  },
  {
    name: 'before_variable_comma/sass/other.sass',
    data: '$a: 1 !default\n$c: 1 !default\n',
  },
  {
    name: 'before_variable_comma/sass/output.css',
    data: '',
  },
  {
    name: 'after_variable_comma/scss/input.scss',
    data: '@use "other" with ($a: b,\n  $c: d)\n',
  },
  {
    name: 'after_variable_comma/scss/other.scss',
    data: '$a: 1 !default;\n$c: 1 !default\n',
  },
  {
    name: 'after_variable_comma/scss/output.css',
    data: '',
  },
  {
    name: 'after_variable_comma/sass/input.sass',
    data: '@use "other" with ($a: b,\n  $c: d)\n',
  },
  {
    name: 'after_variable_comma/sass/other.sass',
    data: '$a: 1 !default\n$c: 1 !default\n',
  },
  {
    name: 'after_variable_comma/sass/output.css',
    data: '',
  },
  {
    name: 'error/before_keyword/sass/input.sass',
    data: '@use "other"\n  as a\n',
  },
  {
    name: 'error/before_keyword/sass/other.scss',
    data: '',
  },
  {
    name: 'error/before_keyword/sass/error',
    data: "Error: Nothing may be indented beneath a @use rule.\n  ,\n2 |   as a\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
]
