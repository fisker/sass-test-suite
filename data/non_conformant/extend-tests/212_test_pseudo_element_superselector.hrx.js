// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/212_test_pseudo_element_superselector.hrx

export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:first-letter {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar, a#bar:first-letter {\n  a: b;\n}\n',
  },
]
