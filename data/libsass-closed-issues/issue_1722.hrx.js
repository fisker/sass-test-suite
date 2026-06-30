export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n$score: (item-height: 1.12em);\n.test {\n    background-position: 0 -#{map.get($score, item-height)};\n}\n\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  background-position: 0 -1.12em;\n}\n',
  },
]
