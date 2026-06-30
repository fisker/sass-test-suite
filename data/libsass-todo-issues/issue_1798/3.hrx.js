// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_1798/3.hrx

export default [
  {
    name: 'input.scss',
    data: 'a  {\n  content: "#{ a /*#{"}*/ }";\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  content: "a";\n}\n',
  },
]
