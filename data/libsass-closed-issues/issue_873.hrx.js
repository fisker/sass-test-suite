// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_873.hrx

export default [
  {
    name: 'input.scss',
    data: '$quoted: "notification";\n$unquoted: notification;\n\n@function func($var) {\n  @return $var;\n}\n\nfoo {\n  foo: func(notification);\n  foo: #{notification};\n  foo: #{$quoted};\n  foo: $quoted;\n  foo: #{$unquoted};\n  foo: $unquoted;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: notification;\n  foo: notification;\n  foo: notification;\n  foo: "notification";\n  foo: notification;\n  foo: notification;\n}\n',
  },
]
