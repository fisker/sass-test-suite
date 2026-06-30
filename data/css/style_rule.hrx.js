// https://github.com/sass/sass-spec/blob/HEAD/spec/css/style_rule.hrx

export default [
  {
    name: 'comment/after_selector/loud/input.scss',
    data: 'a /**/ {b: c}\n',
  },
  {
    name: 'comment/after_selector/loud/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'comment/after_selector/silent/input.scss',
    data: 'a //\n  {b: c}\n',
  },
  {
    name: 'comment/after_selector/silent/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'declaration/interleaved/before_style_rule/input.scss',
    data: '.a {\n  b: c;\n  .d {e: f}\n}\n',
  },
  {
    name: 'declaration/interleaved/before_style_rule/output.css',
    data: '.a {\n  b: c;\n}\n.a .d {\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/around_style_rule/input.scss',
    data: '.a {\n  b: c;\n  .d {e: f}\n  g: h;\n}\n',
  },
  {
    name: 'declaration/interleaved/around_style_rule/output.css',
    data: '.a {\n  b: c;\n}\n.a .d {\n  e: f;\n}\n.a {\n  g: h;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/higher_specificity/input.scss',
    data: '.a {\n  .b {c: d}\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/higher_specificity/output.css',
    data: '.a .b {\n  c: d;\n}\n.a {\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/same_specificity/input.scss',
    data: '.a {\n  :where(.b) {c: d}\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/same_specificity/output.css',
    data: '.a :where(.b) {\n  c: d;\n}\n.a {\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/mixed_specificity_parent/input.scss',
    data: '.a, :where(.a) {\n  .b {c: d}\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/mixed_specificity_parent/output.css',
    data: '.a .b, :where(.a) .b {\n  c: d;\n}\n.a, :where(.a) {\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/mixed_specificity_child/input.scss',
    data: '.a {\n  .b, :where(.b) {c: d}\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/mixed_specificity_child/output.css',
    data: '.a .b, .a :where(.b) {\n  c: d;\n}\n.a {\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/extended_parent/input.scss',
    data: '.a {\n  .b {c: d}\n  e: f;\n}\n\n:where(.g) {@extend .a}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/extended_parent/output.css',
    data: '.a .b, :where(.g) .b {\n  c: d;\n}\n.a, :where(.g) {\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/extended_child/input.scss',
    data: '.a {\n  .b {c: d}\n  e: f;\n}\n\n:where(.g) {@extend .b}\n',
  },
  {
    name: 'declaration/interleaved/after_style_rule/extended_child/output.css',
    data: '.a .b, .a :where(.g) {\n  c: d;\n}\n.a {\n  e: f;\n}\n',
  },
  {
    name: 'declaration/interleaved/in_at_rule/input.scss',
    data: '@a {\n  .b {\n    .c {d: e}\n    f: g;\n  }\n}\n',
  },
  {
    name: 'declaration/interleaved/in_at_rule/output.css',
    data: '@a {\n  .b .c {\n    d: e;\n  }\n  .b {\n    f: g;\n  }\n}\n',
  },
  {
    name: 'declaration/interleaved/in_bubbled_rule/input.scss',
    data: '.a {\n  .b {c: d}\n  @e {f: g}\n}\n',
  },
  {
    name: 'declaration/interleaved/in_bubbled_rule/output.css',
    data: '.a .b {\n  c: d;\n}\n@e {\n  .a {\n    f: g;\n  }\n}\n',
  },
  {
    name: 'declaration/comment/before_colon/loud/input.scss',
    data: 'a {b /**/ : c}\n',
  },
  {
    name: 'declaration/comment/before_colon/loud/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'declaration/comment/before_colon/silent/input.scss',
    data: 'a {b //\n  : c}\n',
  },
  {
    name: 'declaration/comment/before_colon/silent/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'declaration/comment/after_colon/loud/input.scss',
    data: 'a {b: /**/ c}\n',
  },
  {
    name: 'declaration/comment/after_colon/loud/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'declaration/comment/after_colon/silent/input.scss',
    data: 'a {b: //\n  c}\n',
  },
  {
    name: 'declaration/comment/after_colon/silent/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'declaration/comment/after_value/loud/input.scss',
    data: 'a {b: c /**/}\n',
  },
  {
    name: 'declaration/comment/after_value/loud/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'declaration/comment/after_value/silent/input.scss',
    data: 'a {b: c //\n  }\n',
  },
  {
    name: 'declaration/comment/after_value/silent/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'declaration/result/input.scss',
    data: 'a {\n  // Outside of a plain CSS `@function`, `result` is parsed like any other\n  // declaration.\n  result: 1 + 1;\n}\n',
  },
  {
    name: 'declaration/result/output.css',
    data: 'a {\n  result: 2;\n}\n',
  },
  {
    name: 'sass/declaration/semicolon/input.sass',
    data: 'a\n  b: c;\n\n',
  },
  {
    name: 'sass/declaration/semicolon/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'sass/multiple/cr/input.sass',
    data: 'a\n  b: c;\n  d: e;\n',
  },
  {
    name: 'sass/multiple/cr/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'sass/multiple/ff/input.sass',
    data: 'a\n  b: c;\f\n  d: e;\n',
  },
  {
    name: 'sass/multiple/ff/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'sass/trailing_whitespace/input.sass',
    data: 'a\n  b: c; \n  d: e;\n',
  },
  {
    name: 'sass/trailing_whitespace/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'sass/preceding_whitespace/input.sass',
    data: 'a\n  b: c ;\n  d: e;\n',
  },
  {
    name: 'sass/preceding_whitespace/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'sass/trailing_comment/input.sass',
    data: 'a\n  b: c; // f\n  d: e;\n',
  },
  {
    name: 'sass/trailing_comment/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'sass/trailing_inline_comment/input.sass',
    data: 'a\n  b: c; /* f */\n  d: e;\n',
  },
  {
    name: 'sass/trailing_inline_comment/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'sass/trailing_loud_comment/input.sass',
    data: 'a\n  b: c;\n  /* f */\n  d: e;\n',
  },
  {
    name: 'sass/trailing_loud_comment/output.css',
    data: 'a {\n  b: c;\n  /* f */\n  d: e;\n}\n',
  },
  {
    name: 'sass/nested/input.sass',
    data: 'a\n  b: c;\n  d\n    e: f;\n',
  },
  {
    name: 'sass/nested/output.css',
    data: 'a {\n  b: c;\n}\na d {\n  e: f;\n}\n',
  },
]
