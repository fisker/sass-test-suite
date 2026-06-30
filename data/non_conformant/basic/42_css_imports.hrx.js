export default [
  {
    name: 'input.scss',
    data: 'div {\n  color: red;\n}\n\n@import "hux\\ bux.css";\n@import "foo.css";\n\nspan {\n  color: blue;\n}\n\n@import "bar.css";',
  },
  {
    name: 'output.css',
    data: '@import "hux\\ bux.css";\n@import "foo.css";\n@import "bar.css";\ndiv {\n  color: red;\n}\n\nspan {\n  color: blue;\n}\n',
  },
]
