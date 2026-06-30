// https://github.com/sass/sass-spec/blob/HEAD/spec/css/comment.hrx

export default [
  {
    name: 'multiple/input.scss',
    data: '.foo {\n  /* Foo Bar */\n  /* Baz Bang */ }\n',
  },
  {
    name: 'multiple/output.css',
    data: '.foo {\n  /* Foo Bar */\n  /* Baz Bang */\n}\n',
  },
  {
    name: 'multiple_stars/input.scss',
    data: 'a /***/ b {x: y}\na /****/ b {x: y}\na /* **/ b {x: y}\na /** */ b {x: y}\n',
  },
  {
    name: 'multiple_stars/output.css',
    data: 'a b {\n  x: y;\n}\na b {\n  x: y;\n}\na b {\n  x: y;\n}\na b {\n  x: y;\n}\n',
  },
  {
    name: 'weird_indentation/input.scss',
    data: '.foo {\n    /* Foo\n Bar\nBaz */\n  a: b; }\n',
  },
  {
    name: 'weird_indentation/output.css',
    data: '.foo {\n  /* Foo\n   Bar\n  Baz */\n  a: b;\n}\n',
  },
  {
    name: 'converts_newlines/README.md',
    data: "Everything CSS considers a newline (including `\\r\\n`, `\\r`, and `\\f`) should be\nconverted to a newline in a comment's contents.\n\nNote that we don't test CR LF because the spec runner normalizes those itself,\nso we can't usefully verify that they're converted. Individual implementations\nshould include their own tests for CR LF newlines.\n",
  },
  {
    name: 'converts_newlines/scss/cr/input.scss',
    data: '/* foo\r * bar */\n',
  },
  {
    name: 'converts_newlines/scss/cr/output.css',
    data: '/* foo\n * bar */\n',
  },
  {
    name: 'converts_newlines/scss/ff/input.scss',
    data: '/* foo\f * bar */\n',
  },
  {
    name: 'converts_newlines/scss/ff/output.css',
    data: '/* foo\n * bar */\n',
  },
  {
    name: 'converts_newlines/sass/cr/input.sass',
    data: '/*\n  foo\r  bar\n',
  },
  {
    name: 'converts_newlines/sass/cr/output.css',
    data: '/* foo\n * bar */\n',
  },
  {
    name: 'converts_newlines/sass/ff/input.sass',
    data: '/*\n  foo\f  bar\n',
  },
  {
    name: 'converts_newlines/sass/ff/output.css',
    data: '/* foo\n * bar */\n',
  },
  {
    name: 'inline/silent/scss/input.scss',
    data: 'a {\n  b: c // d\n}\n',
  },
  {
    name: 'inline/silent/scss/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'inline/silent/sass/input.sass',
    data: 'a\n  b: c // d\n',
  },
  {
    name: 'inline/silent/sass/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'inline/loud/scss/input.scss',
    data: 'a {\n  b: c /* d */ e;\n}\n',
  },
  {
    name: 'inline/loud/scss/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: 'inline/loud/sass/input.sass',
    data: 'a\n  b: c /* d */ e\n',
  },
  {
    name: 'inline/loud/sass/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: 'block/loud/sass/trailing_whitespace/input.sass',
    data: '// Regression test for sass/dart-sass#2381\n/* */ \n',
  },
  {
    name: 'block/loud/sass/trailing_whitespace/output.css',
    data: '/* */\n',
  },
  {
    name: 'block/loud/sass/content_after_close/loud_comment/input.sass',
    data: '/* */ /* */\n',
  },
  {
    name: 'block/loud/sass/content_after_close/loud_comment/output.css',
    data: '/* */\n',
  },
  {
    name: 'block/loud/sass/content_after_close/silent_comment/input.sass',
    data: '/* */ //\n',
  },
  {
    name: 'block/loud/sass/content_after_close/silent_comment/output.css',
    data: '/* */\n',
  },
  {
    name: 'block/loud/sass/end_of_file/input.sass',
    data: '/* */',
  },
  {
    name: 'block/loud/sass/end_of_file/output.css',
    data: '/* */\n',
  },
  {
    name: 'loud/interleaved/final/input.scss',
    data: 'a {\n  b {c: d}\n  /* */\n}\n',
  },
  {
    name: 'loud/interleaved/final/output.css',
    data: 'a b {\n  c: d;\n}\na {\n  /* */\n}\n',
  },
  {
    name: 'loud/interleaved/before_rule/input.scss',
    data: 'a {\n  b {c: d}\n  /* */\n  e {f: g}\n}\n',
  },
  {
    name: 'loud/interleaved/before_rule/output.css',
    data: 'a b {\n  c: d;\n}\na {\n  /* */\n}\na e {\n  f: g;\n}\n',
  },
  {
    name: 'loud/interleaved/before_declaration/input.scss',
    data: 'a {\n  b {c: d}\n  /* */\n  e: f;\n}\n',
  },
  {
    name: 'loud/interleaved/before_declaration/output.css',
    data: 'a b {\n  c: d;\n}\na {\n  /* */\n  e: f;\n}\n',
  },
  {
    name: 'loud/multi_line/sass/input.sass',
    data: 'a\n  b: c /* d\n          e */ f\n',
  },
  {
    name: 'loud/multi_line/sass/output.css',
    data: 'a {\n  b: c f;\n}\n',
  },
  {
    name: 'sourcemap/sourcemappingurl/input.scss',
    data: 'a { b: c }\n/*# sourceMappingURL=whatever */\n',
  },
  {
    name: 'sourcemap/sourcemappingurl/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'sourcemap/between_loads/input.scss',
    data: "@use 'sass:math';\n/*# sourceMappingURL=whatever */\n@use 'sass:list';\n\na { b: c }\n",
  },
  {
    name: 'sourcemap/between_loads/output.css',
    data: '\na {\n  b: c;\n}\n',
  },
  {
    name: 'sourcemap/sourceurl/input.scss',
    data: 'a { b: c }\n/*# sourceURL=whatever */\n',
  },
  {
    name: 'sourcemap/sourceurl/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'error/loud/unterminated/scss/input.scss',
    data: 'a {\n  b: c /* d\n}\n',
  },
  {
    name: 'error/loud/unterminated/scss/error',
    data: "Error: expected more input.\n  ,\n3 | }\n  |  ^\n  '\n  input.scss 3:2  root stylesheet\n",
  },
  {
    name: 'error/loud/unterminated/sass/input.sass',
    data: 'a\n  b: c /* d\n',
  },
  {
    name: 'error/loud/unterminated/sass/error',
    data: "Error: expected more input.\n  ,\n2 |   b: c /* d\n  |            ^\n  '\n  input.sass 2:12  root stylesheet\n",
  },
  {
    name: 'error/loud/interpolation/unterminated/input.scss',
    data: '/* #{broken */\n',
  },
  {
    name: 'error/loud/interpolation/unterminated/error',
    data: "Error: Expected expression.\n  ,\n1 | /* #{broken */\n  |               ^\n  '\n  input.scss 1:15  root stylesheet\n",
  },
  {
    name: 'error/loud/interpolation/failure/input.scss',
    data: '/* #{$undefined} */\n',
  },
  {
    name: 'error/loud/interpolation/failure/error',
    data: "Error: Undefined variable.\n  ,\n1 | /* #{$undefined} */\n  |      ^^^^^^^^^^\n  '\n  input.scss 1:6  root stylesheet\n",
  },
  {
    name: 'error/loud/sass/content_after_close/single_line/input.sass',
    data: '/* */ a\n',
  },
  {
    name: 'error/loud/sass/content_after_close/single_line/error',
    data: "Error: Unexpected text after end of comment\n  ,\n1 | /* */ a\n  |       ^ extra text\n  | ===== comment\n  '\n  input.sass 1:7  root stylesheet\n",
  },
  {
    name: 'error/loud/sass/content_after_close/multi_line/input.sass',
    data: '/*\n  */\n  a\n',
  },
  {
    name: 'error/loud/sass/content_after_close/multi_line/error',
    data: "Error: Unexpected text after end of comment\n  ,\n1 | / /*\n2 | |   */\n  | '--- comment\n3 |     a\n  |     ^ extra text\n  '\n  input.sass 3:3  root stylesheet\n",
  },
]
