export default [
  {
    name: 'stores_local_scope/input.scss',
    data: '@use "sass:meta";\n$add-two-fn: null;\n\n.scope {\n  @function add-two($v) {@return $v + 2}\n\n  // This function reference will still refer to this nested `add-two` function\n  // even when it goes out of scope.\n  $add-two-fn: meta.get-function(add-two) !global;\n}\n\na {b: meta.call($add-two-fn, 10)}\n',
  },
  {
    name: 'stores_local_scope/output.css',
    data: 'a {\n  b: 12;\n}\n',
  },
  {
    name: 'captures_inner_scope/input.scss',
    data: '@use "sass:meta";\n@function add-two($v) {@error "Should not be called"}\n.scope1 {\n  @function add-two($v) {@error "Should not be called"}\n  .scope2 {\n    @function add-two($v) {@error "Should not be called"}\n    .scope3 {\n      @function add-two($v) {@return $v + 2}\n\n      // Like a normal function call, get-function() will always use the\n      // innermost definition of a function.\n      a: meta.call(meta.get-function(add-two), 10);\n    }\n  }\n}\n',
  },
  {
    name: 'captures_inner_scope/output.css',
    data: '.scope1 .scope2 .scope3 {\n  a: 12;\n}\n',
  },
]
