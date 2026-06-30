// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1583.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n@use "sass:string";\n\n$ls: ((foo,));\n\nfoo {\n  baz: list.length($ls);\n  baz: meta.type-of($ls);\n  baz: meta.inspect($ls);\n}\n\nbar {\n  baz: list.length(&);\n  baz: meta.type-of(&);\n  baz: meta.inspect(&);\n}\n\nfoo {\n  string: meta.inspect(&);\n  str-length: string.length(meta.inspect(&));\n  list-length: list.length(&);\n}\n\nfoo, bar {\n  string: meta.inspect(&);\n  str-length: string.length(meta.inspect(&));\n  list-length: list.length(&);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  baz: 1;\n  baz: list;\n  baz: (foo,);\n}\n\nbar {\n  baz: 1;\n  baz: list;\n  baz: (bar,);\n}\n\nfoo {\n  string: (foo,);\n  str-length: 6;\n  list-length: 1;\n}\n\nfoo, bar {\n  string: foo, bar;\n  str-length: 8;\n  list-length: 2;\n}\n',
  },
]
