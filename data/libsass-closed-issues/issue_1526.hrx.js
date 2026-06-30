export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: (1--em-2--em);\n  baz: (1--em - 2--em);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: 1 --em-2--em;\n  baz: 1 --em-2 --em;\n}\n',
  },
]
