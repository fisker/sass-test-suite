export default [
  {
    name: 'input.scss',
    data: "$key: 'bar';\n$suffix2: '\\\\@#{$key}';\n.test22#{$suffix2} { content: '2.2'; }\n",
  },
  {
    name: 'output.css',
    data: '.test22\\@bar {\n  content: "2.2";\n}\n',
  },
]
