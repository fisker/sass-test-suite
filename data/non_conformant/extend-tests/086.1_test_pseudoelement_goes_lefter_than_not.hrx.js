// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/086.1_test_pseudoelement_goes_lefter_than_not.hrx

export default [
  {
    name: 'input.scss',
    data: '%a {\n  x:y;\n}\nb:after:not(:first-child) {\n  @extend %a;\n}\nc:s {\n  @extend %a;  \n}\nd::e {\n  @extend c;\n}',
  },
  {
    name: 'output.css',
    data: 'c:s, d:s::e, b:after:not(:first-child) {\n  x: y;\n}\n',
  },
]
