export default [
  {
    name: 'input.scss',
    data: '@mixin selector-access {\n  mixin-sees: &;\n}\n\n@function function-access() {\n  @return &;\n}\n\n.foo {\n  @include selector-access;\n  function-sees: function-access();\n}\n\n.bar a {\n  @include selector-access;\n  function-sees: function-access();\n}\n\n.bar,\n.baz {\n  @include selector-access;\n  function-sees: function-access();\n}\n\n.qux {\n  &.waldo {\n    .where & {\n      .final {\n        @include selector-access;\n        function-sees: function-access();\n      }\n    }\n  }\n}',
  },
  {
    name: 'output.css',
    data: '.foo {\n  mixin-sees: .foo;\n  function-sees: .foo;\n}\n\n.bar a {\n  mixin-sees: .bar a;\n  function-sees: .bar a;\n}\n\n.bar,\n.baz {\n  mixin-sees: .bar, .baz;\n  function-sees: .bar, .baz;\n}\n\n.where .qux.waldo .final {\n  mixin-sees: .where .qux.waldo .final;\n  function-sees: .where .qux.waldo .final;\n}\n',
  },
]
