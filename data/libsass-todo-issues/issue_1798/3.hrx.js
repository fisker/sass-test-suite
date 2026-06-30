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
