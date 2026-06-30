// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/38_expressions_in_at_directives.hrx

export default [
  {
    name: 'input.scss',
    data: '$x: 1;\n$y: 2;\n\n@foo $x $y, hux {\n  bar {\n    whatever: whatever;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@foo $x $y, hux {\n  bar {\n    whatever: whatever;\n  }\n}\n',
  },
]
