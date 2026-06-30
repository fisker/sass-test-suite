// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/get_function/equality.hrx

export default [
  {
    name: 'same_value/input.scss',
    data: '@use "sass:meta";\n$lighten-fn: meta.get-function(lighten);\na {b: $lighten-fn == $lighten-fn}\n',
  },
  {
    name: 'same_value/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'built_in/same/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-function(lighten) == meta.get-function(lighten)}\n',
  },
  {
    name: 'built_in/same/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'built_in/different/input.scss',
    data: '@use "sass:meta";\na {b: meta.get-function(lighten) == meta.get-function(darken)}\n',
  },
  {
    name: 'built_in/different/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'user_defined/same/input.scss',
    data: '@use "sass:meta";\n@function user-defined() {@return null}\na {b: meta.get-function(user-defined) == meta.get-function(user-defined)}\n',
  },
  {
    name: 'user_defined/same/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'user_defined/different/input.scss',
    data: '@use "sass:meta";\n@function user-defined-1() {@return null}\n@function user-defined-2() {@return null}\na {b: meta.get-function(user-defined-1) == meta.get-function(user-defined-2)}\n',
  },
  {
    name: 'user_defined/different/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'user_defined/redefined/input.scss',
    data: '@use "sass:meta";\n@function user-defined() {@return null}\n$first-reference: meta.get-function(user-defined);\n\n@function user-defined() {@return null}\n$second-reference: meta.get-function(user-defined);\na {b: $first-reference == $second-reference}\n',
  },
  {
    name: 'user_defined/redefined/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
