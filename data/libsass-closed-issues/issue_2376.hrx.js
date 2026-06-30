export default [
  {
    name: 'input.scss',
    data: '.test {\r\n\tbackground:url(//img12.360buyimg.com/..);\r\n\t.a{\r\n\t\theight: 100px;\r\n\t}\r\n}',
  },
  {
    name: 'output.css',
    data: '.test {\n  background: url(//img12.360buyimg.com/..);\n}\n.test .a {\n  height: 100px;\n}\n',
  },
]
