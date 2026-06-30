// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/209_test_pseudo_element_superselector.hrx

export default [
  {
    name: 'input.scss',
    data: '%x#bar {a: b} // Add an id to make the results have high specificity\n%y, %y::fblthp {@extend %x}\na {@extend %y}\n',
  },
  {
    name: 'output.css',
    data: 'a#bar, a#bar::fblthp {\n  a: b;\n}\n',
  },
]
