// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/213_test_pseudo_element_superselector.hrx

export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:before {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar, a#bar:before {\n  a: b;\n}\n',
  },
]
