// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass/pseudo.hrx

export default [
  {
    name: 'input.sass',
    data: '::selection\r\n  color: rebeccapurple\r\n::-webkit-selection\r\n  color: rebeccapurple\r\n::-webkit-selection, ::selection\r\n  color: rebeccapurple\r\n\\:-webkit-selection\r\n  color: rebeccapurple\r\n\r\n\\:hover TD\r\n  color: red\r\n\\:color red\r\n  foo: bar\r\n\\:nth-child(2n+1) SPAN\r\n  foo: bar\r\n',
  },
  {
    name: 'output.css',
    data: '::selection {\n  color: rebeccapurple;\n}\n\n::-webkit-selection {\n  color: rebeccapurple;\n}\n\n::-webkit-selection, ::selection {\n  color: rebeccapurple;\n}\n\n:-webkit-selection {\n  color: rebeccapurple;\n}\n\n:hover TD {\n  color: red;\n}\n\n:color red {\n  foo: bar;\n}\n\n:nth-child(2n+1) SPAN {\n  foo: bar;\n}\n',
  },
]
