export default [
  {
    name: 'input.scss',
    data: '#{bar},\n[foo="#{bar}"],\n[foo="#{bar}"] {\n    content: "foo";\n}\n',
  },
  {
    name: 'output.css',
    data: 'bar,\n[foo=bar],\n[foo=bar] {\n  content: "foo";\n}\n',
  },
]
