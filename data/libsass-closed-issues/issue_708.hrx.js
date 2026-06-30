// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_708.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foobar($x, $y, $z : 3) {\n  @return $x + $y * 2 + $z\n}\n\n.foobar {\n  content: foobar($y:2, $x:4);\n  content: foobar($y: 2, $x: 4);\n  content: foobar($y : 2, $x : 4);\n  content: foobar($y:2px, $x:4);\n  content: foobar($y: 2px, $x: 4);\n  content: foobar($y : 2px, $x : 4);\n}',
  },
  {
    name: 'output.css',
    data: '.foobar {\n  content: 11;\n  content: 11;\n  content: 11;\n  content: 11px;\n  content: 11px;\n  content: 11px;\n}\n',
  },
]
