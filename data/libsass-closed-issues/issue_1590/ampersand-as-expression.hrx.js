export default [
  {
    name: 'input.scss',
    data: '@mixin where($sel: null) {\n    @if ( & == $sel ) {\n        h1 { color: white; }\n    } @else {\n        h1 { color: blue; }\n    }\n}\n.hive { @include where(); } \n.bee { @include where(&); } \n.queen { @include where("&"); } \n',
  },
  {
    name: 'output.css',
    data: '.hive h1 {\n  color: blue;\n}\n\n.bee h1 {\n  color: white;\n}\n\n.queen h1 {\n  color: blue;\n}\n',
  },
]
