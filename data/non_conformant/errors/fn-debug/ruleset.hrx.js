// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/fn-debug/ruleset.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\r\n  @debug "debug";\r\n  foo: bar;\r\n}',
  },
  {
    name: 'output.css',
    data: 'a {\n  foo: bar;\n}\n',
  },
  {
    name: 'warning',
    data: 'input.scss:2 DEBUG: debug\n',
  },
]
