// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/sass_script.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:math";\nfoo {\n  a: 1 + 2;\n  b: 1 - 2;\n  c: foo + bar;\n  d: math.floor(12.3px); }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 3;\n  b: -1;\n  c: foobar;\n  d: 12px;\n}\n',
  },
]
