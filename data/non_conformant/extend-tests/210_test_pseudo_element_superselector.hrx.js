// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/210_test_pseudo_element_superselector.hrx

export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:fblthp {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar {\n  a: b;\n}\n',
  },
]
