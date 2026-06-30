// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/214_test_pseudo_element_superselector.hrx

export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:after {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar, a#bar:after {\n  a: b;\n}\n',
  },
]
