// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1074.hrx

export default [
  {
    name: 'input.scss',
    data: '$i: 1;\n.foo#{-$i} { a:b }\n.foo-#{$i} { a:b }\n.foo#{-1} { a:b }\n.foo-#{1} { a:b }\n',
  },
  {
    name: 'output.css',
    data: '.foo-1 {\n  a: b;\n}\n\n.foo-1 {\n  a: b;\n}\n\n.foo-1 {\n  a: b;\n}\n\n.foo-1 {\n  a: b;\n}\n',
  },
]
