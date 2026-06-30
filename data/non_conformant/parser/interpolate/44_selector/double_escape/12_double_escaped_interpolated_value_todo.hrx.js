export default [
  {
    name: 'input.scss',
    data: "$key: 'bar';\n.test12#{'\\\\@#{$key}'} { content: '1.2'; }\n",
  },
  {
    name: 'output.css',
    data: '.test12\\@bar {\n  content: "1.2";\n}\n',
  },
]
