// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/nested.hrx

export default [
  {
    name: 'scope/function/input.scss',
    data: ".parent {\n  // This should be visible to the imported stylesheet. There's not really a\n  // good reason for this, but it's the historical behavior so whatever.\n  @function local() {\n    @return value;\n  }\n\n  @import 'other';\n}\n",
  },
  {
    name: 'scope/function/other.scss',
    data: 'x {\n  function: local();\n}\n',
  },
  {
    name: 'scope/function/output.css',
    data: '.parent x {\n  function: value;\n}\n',
  },
  {
    name: 'scope/function/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n8 |   @import 'other';\n  |           ^^^^^^^\n  '\n    input.scss 8:11  root stylesheet\n",
  },
  {
    name: 'scope/mixin/input.scss',
    data: ".parent {\n  // This should be visible to the imported stylesheet. There's not really a\n  // good reason for this, but it's the historical behavior so whatever.\n  @mixin local {\n    x {y: z}\n  }\n\n  @import 'other';\n}\n",
  },
  {
    name: 'scope/mixin/other.scss',
    data: '@include local;\n',
  },
  {
    name: 'scope/mixin/output.css',
    data: '.parent x {\n  y: z;\n}\n',
  },
  {
    name: 'scope/mixin/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n8 |   @import 'other';\n  |           ^^^^^^^\n  '\n    input.scss 8:11  root stylesheet\n",
  },
  {
    name: 'scope/variable/input.scss',
    data: ".parent {\n  // This should be visible to the imported stylesheet. There's not really a\n  // good reason for this, but it's the historical behavior so whatever.\n  $var: value;\n  @import 'other';\n}\n",
  },
  {
    name: 'scope/variable/other.scss',
    data: 'x {\n  var: $var;\n}\n',
  },
  {
    name: 'scope/variable/output.css',
    data: '.parent x {\n  var: value;\n}\n',
  },
  {
    name: 'scope/variable/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n5 |   @import 'other';\n  |           ^^^^^^^\n  '\n    input.scss 5:11  root stylesheet\n",
  },
  {
    name: 'at_rule/keyframes/input.scss',
    data: 'a {@import "other"}\n',
  },
  {
    name: 'at_rule/keyframes/_other.scss',
    data: '// This should ignore the parent selector, since Sass knows @keyframes is only\n// valid at the root of a document.\n@keyframes b {\n  0% {c: d}\n}\n',
  },
  {
    name: 'at_rule/keyframes/output.css',
    data: '@keyframes b {\n  0% {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'at_rule/keyframes/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "other"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'at_rule/childless/input.scss',
    data: 'a {@import "other"}\n',
  },
  {
    name: 'at_rule/childless/_other.scss',
    data: '@b c;\n',
  },
  {
    name: 'at_rule/childless/output.css',
    data: 'a {\n  @b c;\n}\n',
  },
  {
    name: 'at_rule/childless/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "other"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'at_rule/declaration_child/input.scss',
    data: 'a {@import "other"}\n',
  },
  {
    name: 'at_rule/declaration_child/_other.scss',
    data: '@b {c: d}\n',
  },
  {
    name: 'at_rule/declaration_child/output.css',
    data: '@b {\n  a {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'at_rule/declaration_child/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "other"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'at_rule/rule_child/input.scss',
    data: 'a {@import "other"}\n',
  },
  {
    name: 'at_rule/rule_child/_other.scss',
    data: '@b {\n  c {d: e}\n}\n',
  },
  {
    name: 'at_rule/rule_child/output.css',
    data: '@b {\n  a c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'at_rule/rule_child/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import "other"}\n  |            ^^^^^^^\n  \'\n    input.scss 1:12  root stylesheet\n',
  },
  {
    name: 'with_comment/input.scss',
    data: "@import 'b';\n@import 'c';\n",
  },
  {
    name: 'with_comment/_a.scss',
    data: '/* Y */\n',
  },
  {
    name: 'with_comment/_b.scss',
    data: "@import 'a';\n",
  },
  {
    name: 'with_comment/_c.scss',
    data: "@import 'a';\n",
  },
  {
    name: 'with_comment/output.css',
    data: '/* Y */\n/* Y */\n',
  },
  {
    name: 'with_comment/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'b';\n  |         ^^^\n  '\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import 'c';\n  |         ^^^\n  '\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'a';\n  |         ^^^\n  '\n    _b.scss 1:9     @import\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'a';\n  |         ^^^\n  '\n    _c.scss 1:9     @import\n    input.scss 2:9  root stylesheet\n",
  },
  {
    name: 'top_level_declaration/README.md',
    data: 'These are regression tests for https://github.com/sass/dart-sass/issues/2588.\n',
  },
  {
    name: 'top_level_declaration/include/without_use/input.scss',
    data: ".a {\n  @import 'upstream';\n}\n",
  },
  {
    name: 'top_level_declaration/include/without_use/_upstream.scss',
    data: '@mixin b { c: d }\n@include b;\n',
  },
  {
    name: 'top_level_declaration/include/without_use/output.css',
    data: '.a {\n  c: d;\n}\n',
  },
  {
    name: 'top_level_declaration/include/without_use/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\nMore info and automated migrator: https://sass-lang.com/d/import\n  ,\n2 |   @import 'upstream';\n  |           ^^^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n",
  },
  {
    name: 'top_level_declaration/include/with_use/input.scss',
    data: ".a {\n  @import 'midstream';\n}\n",
  },
  {
    name: 'top_level_declaration/include/with_use/_midstream.scss',
    data: "@use 'upstream';\n@mixin b { c: d }\n@include b;\n",
  },
  {
    name: 'top_level_declaration/include/with_use/_upstream.scss',
    data: '// Intentionally empty.\n',
  },
  {
    name: 'top_level_declaration/include/with_use/output.css',
    data: '.a {\n  c: d;\n}\n',
  },
  {
    name: 'top_level_declaration/include/with_use/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import 'midstream';\n  |           ^^^^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n",
  },
  {
    name: 'top_level_declaration/include/with_use_two_levels_deep/input.scss',
    data: ".a {\n  @import 'midstream1';\n}\n",
  },
  {
    name: 'top_level_declaration/include/with_use_two_levels_deep/_midstream1.scss',
    data: "@import 'midstream2';\n",
  },
  {
    name: 'top_level_declaration/include/with_use_two_levels_deep/_midstream2.scss',
    data: "@use 'upstream';\n@mixin b { c: d }\n@include b;\n",
  },
  {
    name: 'top_level_declaration/include/with_use_two_levels_deep/_upstream.scss',
    data: '// Intentionally empty.\n',
  },
  {
    name: 'top_level_declaration/include/with_use_two_levels_deep/output.css',
    data: '.a {\n  c: d;\n}\n',
  },
  {
    name: 'top_level_declaration/include/with_use_two_levels_deep/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import 'midstream1';\n  |           ^^^^^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'midstream2';\n  |         ^^^^^^^^^^^^\n  '\n    _midstream1.scss 1:9  @import\n    input.scss 2:11       root stylesheet\n",
  },
  {
    name: 'top_level_declaration/parent_selector/input.scss',
    data: ".a {\n  @import 'upstream';\n}\n",
  },
  {
    name: 'top_level_declaration/parent_selector/_upstream.scss',
    data: '& { b: c }\n',
  },
  {
    name: 'top_level_declaration/parent_selector/output.css',
    data: '.a {\n  b: c;\n}\n',
  },
  {
    name: 'top_level_declaration/parent_selector/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\nMore info and automated migrator: https://sass-lang.com/d/import\n  ,\n2 |   @import 'upstream';\n  |           ^^^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n",
  },
]
