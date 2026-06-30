export default [
  {
    name: 'input.scss',
    data: '@mixin img-opacity($trans) {\n          filter : alpha(opacity=($trans * 100));\n      -ms-filter : "progid:DXImageTransform.Microsoft.Alpha(Opacity=#{$trans * 100})";\n    -moz-opacity : $trans;\n  -khtml-opacity : $trans;\n         opacity : $trans;\n}\n\nimg {\n  @include img-opacity(.5);\n}',
  },
  {
    name: 'output.css',
    data: 'img {\n  filter: alpha(opacity=50);\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";\n  -moz-opacity: 0.5;\n  -khtml-opacity: 0.5;\n  opacity: 0.5;\n}\n',
  },
]
