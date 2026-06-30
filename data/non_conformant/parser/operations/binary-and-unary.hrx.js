export default [
  {
    name: 'input.scss',
    data: 'foo {\n  minus-before-minus: - 1 - 2;\n  minus-after-minus:  1 - - 2;\n  plus-before-minus:  + 1 - 2;\n  plus-after-minus:   1 - + 2;\n  not-before-plus:    not 1 + 2;\n  not-after-plus:     1 + not 2;\n\n  minus-after-comma:  (1, - 2);\n  plus-after-comma:   (1, + 2);\n  slash-after-comma:  (1, / 2);\n  not-after-comma:    (1, not 2);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  minus-before-minus: -3;\n  minus-after-minus: 3;\n  plus-before-minus: -1;\n  plus-after-minus: -1;\n  not-before-plus: false2;\n  not-after-plus: 1false;\n\n  minus-after-comma: 1, -2;\n  plus-after-comma: 1, 2;\n  slash-after-comma: 1, /2;\n  not-after-comma: 1, false;\n}\n',
  },
]
