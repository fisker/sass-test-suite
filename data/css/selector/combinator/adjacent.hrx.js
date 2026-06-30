// https://github.com/sass/sass-spec/blob/HEAD/spec/css/selector/combinator/adjacent.hrx

export default [
  {
    name: 'stylesheet/input.scss',
    data: '[a]b {c: d}\n',
  },
  {
    name: 'stylesheet/output.css',
    data: '[a] b {\n  c: d;\n}\n',
  },
  {
    name: 'stylesheet/warning',
    data: "DEPRECATION WARNING [adjacent-compounds] on line 1, column 1 of input.scss: \nAdjacent compound selectors must be separated by whitespace. This will be an error in Dart Sass 2.0.0. Suggestion:\n\n[a] b\n\nMore info: https://sass-lang.com/d/adjacent-compounds\n  ,\n1 | [a]b {c: d}\n  | ^^^^\n  '\n",
  },
  {
    name: 'function/input.scss',
    data: '@use \'sass:selector\';\n\na {\n  b: selector.parse("[c]d");\n}\n',
  },
  {
    name: 'function/output.css',
    data: 'a {\n  b: [c] d;\n}\n',
  },
  {
    name: 'function/warning',
    data: 'DEPRECATION WARNING [adjacent-compounds]: Adjacent compound selectors must be separated by whitespace. This will be an error in Dart Sass 2.0.0. Suggestion:\n\n[c] d\n\nMore info: https://sass-lang.com/d/adjacent-compounds\n\n  ,\n4 |   b: selector.parse("[c]d");\n  |      ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 4:6  root stylesheet\n',
  },
]
