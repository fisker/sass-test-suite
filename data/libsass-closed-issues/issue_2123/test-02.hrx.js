export default [
  {
    name: 'input.scss',
    data: "@font-face { font-family:'foo';src:url(//foo.bar) format('woff2'); }",
  },
  {
    name: 'output.css',
    data: '@font-face {\n  font-family: "foo";\n  src: url(//foo.bar) format("woff2");\n}\n',
  },
]
