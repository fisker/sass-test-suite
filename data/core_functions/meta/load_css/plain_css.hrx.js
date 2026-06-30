export default [
  {
    name: 'empty/user_defined/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n\n/* No output other than this */\n',
  },
  {
    name: 'empty/user_defined/_other.scss',
    data: '// No CSS here!\n',
  },
  {
    name: 'empty/user_defined/output.css',
    data: '/* No output other than this */\n',
  },
  {
    name: 'empty/built_in/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("sass:color");\n\n/* No output other than this */\n',
  },
  {
    name: 'empty/built_in/output.css',
    data: '/* No output other than this */\n',
  },
  {
    name: 'style_rule/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n',
  },
  {
    name: 'style_rule/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'style_rule/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'at_rule/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n',
  },
  {
    name: 'at_rule/_other.scss',
    data: '@media screen {a {b: c}}\n',
  },
  {
    name: 'at_rule/output.css',
    data: '@media screen {\n  a {\n    b: c;\n  }\n}\n',
  },
  {
    name: 'plain_css_import/input.scss',
    data: '@use "sass:meta";\n\na {b: c}\n\n@include meta.load-css("other");\n',
  },
  {
    name: 'plain_css_import/_other.scss',
    data: 'd {e: f}\n\n// This should be lifted to the top of the output stylesheet.\n@import "style.css";\n',
  },
  {
    name: 'plain_css_import/output.css',
    data: '@import "style.css";\n\na {\n  b: c;\n}\n\nd {\n  e: f;\n}\n',
  },
  {
    name: 'through_other_mixin/input.scss',
    data: '@use "subdir/midstream";\n@include midstream.load-css("upstream");\n',
  },
  {
    name: 'through_other_mixin/_upstream.scss',
    data: 'a {b: in main dir}\n',
  },
  {
    name: 'through_other_mixin/subdir/_midstream.scss',
    data: '@use "sass:meta";\n\n// This should load relative to _midstream.scss, not input.scss.\n@mixin load-css($module) {\n  @include meta.load-css($module);\n}\n',
  },
  {
    name: 'through_other_mixin/subdir/_upstream.scss',
    data: 'a {b: in subdir}\n',
  },
  {
    name: 'through_other_mixin/output.css',
    data: 'a {\n  b: in subdir;\n}\n',
  },
  {
    name: 'nested/plain_plain_css/input.scss',
    data: '@use "sass:meta";\na {@include meta.load-css("other")}\n',
  },
  {
    name: 'nested/plain_plain_css/_other.scss',
    data: 'b {c: d}\n',
  },
  {
    name: 'nested/plain_plain_css/output.css',
    data: 'a b {\n  c: d;\n}\n',
  },
  {
    name: 'nested/parent_selector/input.scss',
    data: '@use "sass:meta";\na {@include meta.load-css("other")}\n',
  },
  {
    name: 'nested/parent_selector/_other.scss',
    data: 'b {\n  // This & should *not* refer to the `a` in `input.scss`, because the CSS is\n  // resolved context-independently.\n  c & {x: y}\n}\n',
  },
  {
    name: 'nested/parent_selector/output.css',
    data: 'a c b {\n  x: y;\n}\n',
  },
  {
    name: 'nested/media_query/input.scss',
    data: '// Regression test for dart-sass#843\n@use "sass:meta";\n@include meta.load-css("midstream")\n',
  },
  {
    name: 'nested/media_query/_midstream.scss',
    data: '@use "upstream";\n\na {\n  @media b {c: d}\n}\n',
  },
  {
    name: 'nested/media_query/_upstream.scss',
    data: '/**/\n',
  },
  {
    name: 'nested/media_query/output.css',
    data: '/**/\n\n@media b {\n  a {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css($url: "other");\n',
  },
  {
    name: 'named/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
