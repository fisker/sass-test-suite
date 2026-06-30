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
