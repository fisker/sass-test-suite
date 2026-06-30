// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/fn-debug/simple.hrx

export default [
  {
    name: 'input.scss',
    data: '@debug "debug";',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'input.scss:1 DEBUG: debug\n',
  },
]
