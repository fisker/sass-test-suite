// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/207_test_optional_extend_succeeds_when_extendee_doesnt_exist.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {@extend .bar !optional}\n',
  },
  {
    name: 'output.css',
    data: '',
  },
]
