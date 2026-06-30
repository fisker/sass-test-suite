// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1590/quoted-ampersand-does-not-select.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin where($sel: null) {\n    @if ( "&" == $sel ) {\n        h1 { color: white; }\n    } @else {\n        h1 { color: blue; }\n    }\n}\n.hive { @include where(); } \n.bee { @include where(&); } \n.amp { @include where(".amp"); } \n.queen { @include where("&"); } \n',
  },
  {
    name: 'output.css',
    data: '.hive h1 {\n  color: blue;\n}\n\n.bee h1 {\n  color: blue;\n}\n\n.amp h1 {\n  color: blue;\n}\n\n.queen h1 {\n  color: white;\n}\n',
  },
]
