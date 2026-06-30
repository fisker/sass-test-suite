export default [
  {
    name: 'input.scss',
    data: '%matches {\n  :matches(oh, no) {\n      x: 1;\n      y: 2;\n  }\n}\nmatches {\n  @extend %matches;\n  @extend oh;\n}\n\n%any {\n  :any(oh, no) {\n      x: 1;\n      y: 2;\n  }\n}\nany {\n  @extend %any;\n  @extend oh;\n}\n',
  },
  {
    name: 'output.css',
    data: 'matches :matches(oh, any, matches, no) {\n  x: 1;\n  y: 2;\n}\n\nany :any(oh, any, matches, no) {\n  x: 1;\n  y: 2;\n}\n',
  },
]
