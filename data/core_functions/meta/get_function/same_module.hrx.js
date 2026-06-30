// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/get_function/same_module.hrx

export default [
  {
    name: 'user_defined/input.scss',
    data: '@use "sass:meta";\n@function add-two($v) {@return $v + 2}\n$add-two-fn: meta.get-function(add-two);\n\na {b: meta.call($add-two-fn, 10)}\n',
  },
  {
    name: 'user_defined/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'redefined/input.scss',
    data: '@use "sass:meta";\n@function add-two($v) {@return $v + 2}\n$add-two-fn: meta.get-function(add-two);\n\n// The function returned by `get-function()` is locked in place when it\'s\n// called. Redefining the function after the fact shouldn\'t affect the stored\n// value.\n@function add-two($v) {@error "Should not be called"}\n\na {b: meta.call($add-two-fn, 10)}\n',
  },
  {
    name: 'redefined/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'built_in/input.scss',
    data: '@use "sass:meta";\n$round-fn: meta.get-function(round);\n\na {b: meta.call($round-fn, 0.6)}\n',
  },
  {
    name: 'built_in/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'built_in/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.round instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 | a {b: meta.call($round-fn, 0.6)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 4:7  root stylesheet\n",
  },
  {
    name: 'through_use/input.scss',
    data: '@use "sass:math";\n@use "sass:meta";\n$round-fn: meta.get-function(round, $module: math);\n\na {b: meta.call($round-fn, 0.6)}\n',
  },
  {
    name: 'through_use/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'through_import/input.scss',
    data: '@use "sass:meta";\n@import "other";\na {b: meta.call(meta.get-function(add-two), 10)}\n',
  },
  {
    name: 'through_import/other.scss',
    data: '@function add-two($v) {@return $v + 2}\n',
  },
  {
    name: 'through_import/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'plain_css/input.scss',
    data: '@use "sass:meta";\n$sass-fn: meta.get-function(round);\n$css-fn: meta.get-function(round, $css: true);\n\na {\n  sass-fn: meta.call($sass-fn, 0.6);\n  css-fn: meta.call($css-fn, 0.6);\n}\n',
  },
  {
    name: 'plain_css/output.css',
    data: 'a {\n  sass-fn: 1;\n  css-fn: round(0.6);\n}\n',
  },
  {
    name: 'plain_css/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse math.round instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n6 |   sass-fn: meta.call($sass-fn, 0.6);\n  |            ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 6:12  root stylesheet\n",
  },
  {
    name: 'dash_insensitive/dash_to_underscore/input.scss',
    data: '@use "sass:meta";\n@function add_two($v) {@return $v + 2}\n\na {b: meta.call(meta.get-function(add-two), 10)}\n',
  },
  {
    name: 'dash_insensitive/dash_to_underscore/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'dash_insensitive/underscore_to_dash/input.scss',
    data: '@use "sass:meta";\n@function add-two($v) {@return $v + 2}\n\na {b: meta.call(meta.get-function(add_two), 10)}\n',
  },
  {
    name: 'dash_insensitive/underscore_to_dash/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
]
