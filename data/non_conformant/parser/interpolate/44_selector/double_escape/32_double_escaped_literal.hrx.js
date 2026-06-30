export default [
  {
    name: 'input.scss',
    data: ".test32#{'\\\\@baz'} { content: '3.2'; }\n",
  },
  {
    name: 'output.css',
    data: '.test32\\@baz {\n  content: "3.2";\n}\n',
  },
]
