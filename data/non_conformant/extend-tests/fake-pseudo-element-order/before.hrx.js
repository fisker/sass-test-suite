// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/fake-pseudo-element-order/before.hrx

export default [
  {
    name: 'input.scss',
    data: '%a:before {x: y}\nb:c {@extend %a}\n',
  },
  {
    name: 'output.css',
    data: 'b:c:before {\n  x: y;\n}\n',
  },
]
