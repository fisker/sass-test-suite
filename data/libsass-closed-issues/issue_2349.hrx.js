export default [
  {
    name: 'input.scss',
    data: '$path1: assets/images; // no errors thrown\r\n$path2: /images;       // errors thrown\r\n.test {\r\n  background: url(#{$path1}/image.png);\r\n  background: url(#{$path2}/image.png);\r\n}',
  },
  {
    name: 'output.css',
    data: '.test {\n  background: url(assets/images/image.png);\n  background: url(/images/image.png);\n}\n',
  },
]
