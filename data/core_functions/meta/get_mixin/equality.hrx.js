// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/get_mixin/equality.hrx

export default [
  {
    name: 'same_value/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\n$a: meta.get-mixin(a);\na {b: $a == $a}\n',
  },
  {
    name: 'same_value/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'built_in/same/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-mixin(load-css, meta) == meta.get-mixin(load-css, meta)}\n',
  },
  {
    name: 'built_in/same/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'built_in/different/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-mixin(load-css, meta) == meta.get-mixin(apply, meta)}\n',
  },
  {
    name: 'built_in/different/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'user_defined/same/input.scss',
    data: '@use "sass:meta";\n@mixin user-defined() {}\na {b: meta.get-mixin(user-defined) == meta.get-mixin(user-defined)}\n',
  },
  {
    name: 'user_defined/same/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'user_defined/different/input.scss',
    data: '@use "sass:meta";\n@mixin user-defined-1() {}\n@mixin user-defined-2() {}\na {b: meta.get-mixin(user-defined-1) == meta.get-mixin(user-defined-2)}\n',
  },
  {
    name: 'user_defined/different/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'user_defined/redefined/input.scss',
    data: '@use "sass:meta";\n@mixin user-defined() {}\n$first-reference: meta.get-mixin(user-defined);\n\n@mixin user-defined() {}\n$second-reference: meta.get-mixin(user-defined);\na {b: $first-reference == $second-reference}\n',
  },
  {
    name: 'user_defined/redefined/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
