// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/misc/lang-bug.hrx

export default [
  {
    name: 'input.scss',
    data: 'div:lang(nb) {\n  color: red;\n}',
  },
  {
    name: 'output.css',
    data: 'div:lang(nb) {\n  color: red;\n}\n',
  },
]
