// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/fake-pseudo-element-order/first-line.hrx

export default [
  {
    name: 'input.scss',
    data: '%a:first-line {x: y}\nb:c {@extend %a}\n',
  },
  {
    name: 'output.css',
    data: 'b:c:first-line {\n  x: y;\n}\n',
  },
]
