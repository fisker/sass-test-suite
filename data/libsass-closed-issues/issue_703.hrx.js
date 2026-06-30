// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_703.hrx

export default [
  {
    name: 'input.scss',
    data: '.test-1 {\n  @for $i from 1 through 3 {\n    content: $i;\n  }\n}\n\n.test-2 {\n  @for $i from 3 through 1 {\n    content: $i;\n  }\n}\n\n.test-3 {\n  @for $i from 1 to 3 {\n    content: $i;\n  }\n}\n\n.test-4 {\n  @for $i from 3 to 1 {\n    content: $i;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.test-1 {\n  content: 1;\n  content: 2;\n  content: 3;\n}\n\n.test-2 {\n  content: 3;\n  content: 2;\n  content: 1;\n}\n\n.test-3 {\n  content: 1;\n  content: 2;\n}\n\n.test-4 {\n  content: 3;\n  content: 2;\n}\n',
  },
]
