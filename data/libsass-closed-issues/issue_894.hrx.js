export default [
  {
    name: 'input.scss',
    data: "a {/**/}\nb {content: 'something so I have a non-empty expected output'}",
  },
  {
    name: 'output.css',
    data: 'a { /**/ }\n\nb {\n  content: "something so I have a non-empty expected output";\n}\n',
  },
]
