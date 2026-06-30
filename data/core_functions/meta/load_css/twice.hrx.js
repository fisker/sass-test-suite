// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/twice.hrx

export default [
  {
    name: 'shares_state/input.scss',
    data: '@use "sass:meta";\n@use "shared";\n@include meta.load-css("other");\n\na {shared-b: shared.$b}\n',
  },
  {
    name: 'shares_state/_other.scss',
    data: '@use "shared";\n\nshared.$b: value set by other;\n',
  },
  {
    name: 'shares_state/_shared.scss',
    data: '$b: default value;\n',
  },
  {
    name: 'shares_state/output.css',
    data: 'a {\n  shared-b: value set by other;\n}\n',
  },
  {
    name: 'use/different_nesting/input.scss',
    data: '@use "sass:meta";\n@use "other";\na {@include meta.load-css("other")}\n',
  },
  {
    name: 'use/different_nesting/_other.scss',
    data: 'b {c: d}\n',
  },
  {
    name: 'use/different_nesting/output.css',
    data: 'b {\n  c: d;\n}\n\na b {\n  c: d;\n}\n',
  },
  {
    name: 'use/different_extend/input.scss',
    data: '@use "sass:meta";\n@use "midstream";\n@include meta.load-css("other")\n',
  },
  {
    name: 'use/different_extend/_midstream.scss',
    data: '@use "other";\n\n// This extension should only apply to the copy of `_other.scss` loaded from\n// `@use`, *not* the copy loaded from `load-css()`.\na {@extend b}\n',
  },
  {
    name: 'use/different_extend/_other.scss',
    data: 'b {c: d}\n',
  },
  {
    name: 'use/different_extend/output.css',
    data: 'b, a {\n  c: d;\n}\n\nb {\n  c: d;\n}\n',
  },
  {
    name: 'use/runs_once/same_text/input.scss',
    data: '@use "sass:meta";\n@use "other";\n@include meta.load-css("other");\n\n/* No output other than this */\n',
  },
  {
    name: 'use/runs_once/same_text/_other.scss',
    data: '@debug "in other";\n',
  },
  {
    name: 'use/runs_once/same_text/output.css',
    data: '/* No output other than this */\n',
  },
  {
    name: 'use/runs_once/same_text/warning',
    data: '_other.scss:1 DEBUG: in other\n',
  },
  {
    name: 'use/runs_once/different_text/input.scss',
    data: '@use "sass:meta";\n@use "other";\n@include meta.load-css("_other");\n\n/* No output other than this */\n',
  },
  {
    name: 'use/runs_once/different_text/_other.scss',
    data: '@debug "in other";\n',
  },
  {
    name: 'use/runs_once/different_text/output.css',
    data: '/* No output other than this */\n',
  },
  {
    name: 'use/runs_once/different_text/warning',
    data: '_other.scss:1 DEBUG: in other\n',
  },
  {
    name: 'load_css/different_nesting/input.scss',
    data: '@use "sass:meta";\na {@include meta.load-css("other")}\nb {@include meta.load-css("other")}\n',
  },
  {
    name: 'load_css/different_nesting/_other.scss',
    data: 'c {d: e}\n',
  },
  {
    name: 'load_css/different_nesting/output.css',
    data: 'a c {\n  d: e;\n}\n\nb c {\n  d: e;\n}\n',
  },
  {
    name: 'load_css/different_extend/input.scss',
    data: '@use "left";\n@use "right";\n',
  },
  {
    name: 'load_css/different_extend/_left.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\nleft {@extend a}\n',
  },
  {
    name: 'load_css/different_extend/_right.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\nright {@extend a}\n',
  },
  {
    name: 'load_css/different_extend/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'load_css/different_extend/output.css',
    data: 'a, left {\n  b: c;\n}\n\na, right {\n  b: c;\n}\n',
  },
  {
    name: 'load_css/runs_once/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n@include meta.load-css("other");\n\n/* No output other than this */\n',
  },
  {
    name: 'load_css/runs_once/_other.scss',
    data: '@debug "in other";\n',
  },
  {
    name: 'load_css/runs_once/output.css',
    data: '/* No output other than this */\n',
  },
  {
    name: 'load_css/runs_once/warning',
    data: '_other.scss:1 DEBUG: in other\n',
  },
]
