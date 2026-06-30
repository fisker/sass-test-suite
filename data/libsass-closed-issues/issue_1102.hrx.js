// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1102.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  display:expression("inline",\n    (this.innerHTML += (this.innerHTML.indexOf(",") == -1 ? ", " : "")),\n    this.runtimeStyle.display = "inline");\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  display: expression("inline", (this.innerHTML += (this.innerHTML.indexOf(",") == -1 ? ", " : "")), this.runtimeStyle.display = "inline");\n}\n',
  },
]
