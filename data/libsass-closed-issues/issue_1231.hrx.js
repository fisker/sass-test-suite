export default [
  {
    name: 'input.scss',
    data: 'div::before {\n  content: #{"\\""+\\e600+"\\""};\n}',
  },
  {
    name: 'output.css',
    data: 'div::before {\n  content: "\\e600";\n}\n',
  },
]
