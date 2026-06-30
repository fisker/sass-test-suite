export default [
  {
    name: 'input.scss',
    data: '@function foo() {\n  @return 20150812;\n}\n\nfoo {\n  background-image: url(../test.png);\n}\n\nbar {\n  background-image: url(../test.png?v=20150812);\n}\n\nbaz {\n  background-image: url(../test.png?v=#{test()});\n}\n\nbam {\n  background-image: url("../test.png?v=#{test()}");\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  background-image: url(../test.png);\n}\n\nbar {\n  background-image: url(../test.png?v=20150812);\n}\n\nbaz {\n  background-image: url(../test.png?v=test());\n}\n\nbam {\n  background-image: url("../test.png?v=test()");\n}\n',
  },
]
