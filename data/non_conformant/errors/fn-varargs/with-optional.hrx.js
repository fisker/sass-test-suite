// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/fn-varargs/with-optional.hrx

export default [
  {
    name: 'input.scss',
    data: '@function test($param:"default",$rest...) {}',
  },
  {
    name: 'output.css',
    data: '',
  },
]
