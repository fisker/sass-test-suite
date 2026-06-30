export default [
  {
    name: 'input.scss',
    data: '\n@mixin flex($grow: 1, $shrink: null, $basis: null) {\n  -webkit-box-flex: $grow;\n  -webkit-flex: $grow $shrink $basis;\n  -moz-box-flex: $grow;\n  -moz-flex: $grow $shrink $basis;\n  -ms-flex: $grow $shrink $basis;\n  flex: $grow $shrink $basis;\n}\n\n[flex] {\n  @include flex;\n}\n',
  },
  {
    name: 'output.css',
    data: '[flex] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n',
  },
]
