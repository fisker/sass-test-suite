// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_224.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$list: ("a", "b", "c");\n\ntest {\n    content: list.nth($list, -1);\n    content: list.nth($list, -2);\n    content: list.nth($list, -3);\n    content: list.nth($list, -1) == list.nth($list, list.length($list));\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  content: "c";\n  content: "b";\n  content: "a";\n  content: true;\n}\n',
  },
]
