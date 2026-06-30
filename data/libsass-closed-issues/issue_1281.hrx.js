// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1281.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n$quoted: "green";\n$unquoted: green;\n\n.test {\n  string: meta.type-of($quoted);\n  color: meta.type-of($unquoted);\n  string: meta.type-of("green");\n  color: meta.type-of(green);\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  string: string;\n  color: color;\n  string: string;\n  color: color;\n}\n',
  },
]
