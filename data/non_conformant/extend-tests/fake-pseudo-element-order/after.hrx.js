// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/fake-pseudo-element-order/after.hrx

export default [
  {
    name: 'input.scss',
    data: '%a:after {x: y}\nb:c {@extend %a}\n',
  },
  {
    name: 'output.css',
    data: 'b:c:after {\n  x: y;\n}\n',
  },
]
