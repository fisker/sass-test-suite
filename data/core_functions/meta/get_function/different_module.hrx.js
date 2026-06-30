export default [
  {
    name: 'defined/input.scss',
    data: '@use "sass:math";\n@use "sass:meta";\na {b: meta.call(meta.get-function("round", $module: "math"), 0.6)}\n',
  },
  {
    name: 'defined/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
  {
    name: 'chosen_prefix/input.scss',
    data: '@use "sass:meta";\n@use "sass:math" as a;\nb {c: meta.call(meta.get-function("round", $module: "a"), 0.6)}\n',
  },
  {
    name: 'chosen_prefix/output.css',
    data: 'b {\n  c: 1;\n}\n',
  },
  {
    name: 'through_use/input.scss',
    data: '@use "sass:meta";\n@use "other" as *;\na {b: meta.call(meta.get-function(add-two), 10)}\n',
  },
  {
    name: 'through_use/other.scss',
    data: '@function add-two($v) {@return $v + 2}\n',
  },
  {
    name: 'through_use/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'through_forward/bare/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {b: meta.call(meta.get-function(c))}\n',
  },
  {
    name: 'through_forward/bare/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'through_forward/bare/_upstream.scss',
    data: '@function c() {@return c}\n',
  },
  {
    name: 'through_forward/bare/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'through_forward/as/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  b: meta.call(meta.get-function(c-d));\n}\n',
  },
  {
    name: 'through_forward/as/_midstream.scss',
    data: '@forward "upstream" as c-*;\n',
  },
  {
    name: 'through_forward/as/_upstream.scss',
    data: '@function d() {@return d}\n',
  },
  {
    name: 'through_forward/as/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  b: meta.call(meta.get-function(c));\n}\n',
  },
  {
    name: 'through_forward/show/_midstream.scss',
    data: '@forward "upstream" show c;\n',
  },
  {
    name: 'through_forward/show/_upstream.scss',
    data: '@function c() {@return c}\n',
  },
  {
    name: 'through_forward/show/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {\n  b: meta.call(meta.get-function(d));\n}\n',
  },
  {
    name: 'through_forward/hide/_midstream.scss',
    data: '@forward "upstream" hide c;\n',
  },
  {
    name: 'through_forward/hide/_upstream.scss',
    data: '@function d() {@return d}\n',
  },
  {
    name: 'through_forward/hide/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use "sass:math";\na {b: meta.call(meta.get-function($name: "round", $module: "math"), 0.6)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
]
