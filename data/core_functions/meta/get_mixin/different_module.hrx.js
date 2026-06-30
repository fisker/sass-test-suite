export default [
  {
    name: 'defined/input.scss',
    data: '@use "sass:meta";\n@use "other";\na {@include meta.apply(meta.get-mixin("a", $module: "other"), #abcdef)}\n',
  },
  {
    name: 'defined/_other.scss',
    data: '@use "sass:color";\n@mixin a($color) {b: color.channel($color, \'red\')}\n',
  },
  {
    name: 'defined/output.css',
    data: 'a {\n  b: 171;\n}\n',
  },
  {
    name: 'chosen_prefix/input.scss',
    data: '@use "sass:meta";\n@use "other" as a;\nb {@include meta.apply(meta.get-mixin("a", $module: "a"), #abcdef)}\n',
  },
  {
    name: 'chosen_prefix/_other.scss',
    data: '@use "sass:color";\n@mixin a($color) {c: color.channel($color, \'red\')}\n',
  },
  {
    name: 'chosen_prefix/output.css',
    data: 'b {\n  c: 171;\n}\n',
  },
  {
    name: 'through_use/input.scss',
    data: '@use "sass:meta";\n@use "other" as *;\na {@include meta.apply(meta.get-mixin(add-two), 10)}\n',
  },
  {
    name: 'through_use/other.scss',
    data: '@mixin add-two($v) {b: $v + 2}\n',
  },
  {
    name: 'through_use/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'through_forward/bare/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {@include meta.apply(meta.get-mixin(c))}\n',
  },
  {
    name: 'through_forward/bare/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'through_forward/bare/_upstream.scss',
    data: '@mixin c() {b: c}\n',
  },
  {
    name: 'through_forward/bare/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'through_forward/as/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {@include meta.apply(meta.get-mixin(c-d))}\n',
  },
  {
    name: 'through_forward/as/_midstream.scss',
    data: '@forward "upstream" as c-*;\n',
  },
  {
    name: 'through_forward/as/_upstream.scss',
    data: '@mixin d() {b: d}\n',
  },
  {
    name: 'through_forward/as/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'through_forward/show/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {@include meta.apply(meta.get-mixin(c))}\n',
  },
  {
    name: 'through_forward/show/_midstream.scss',
    data: '@forward "upstream" show c;\n',
  },
  {
    name: 'through_forward/show/_upstream.scss',
    data: '@mixin c() {b: c}\n',
  },
  {
    name: 'through_forward/show/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'through_forward/hide/input.scss',
    data: '@use "sass:meta";\n@use "midstream" as *;\na {@include meta.apply(meta.get-mixin(d))}\n',
  },
  {
    name: 'through_forward/hide/_midstream.scss',
    data: '@forward "upstream" hide c;\n',
  },
  {
    name: 'through_forward/hide/_upstream.scss',
    data: '@mixin d() {b: d}\n',
  },
  {
    name: 'through_forward/hide/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use "other";\na {@include meta.apply(meta.get-mixin($name: "a", $module: "other"), #abcdef)}\n',
  },
  {
    name: 'named/_other.scss',
    data: '@use "sass:color";\n@mixin a($color) {b: color.channel($color, \'red\')}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 171;\n}\n',
  },
]
