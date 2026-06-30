// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/211_test_pseudo_element_superselector.hrx

export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b}\n%y, %y:first-line {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar, a#bar:first-line {\n  a: b;\n}\n',
  },
]
