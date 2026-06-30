export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\nfoo {\n    test: meta.type-of(1--em);\n    test: (1--em-2--em);\n    test: (1--em- 2--em);\n    test: (1--em -2--em);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  test: list;\n  test: 1 --em-2--em;\n  test: 1 --em- 2 --em;\n  test: 1 --em -2 --em;\n}\n',
  },
]
