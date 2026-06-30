export default [
  {
    name: 'input.scss',
    data: 'a {\r\n  b: {\r\n    @debug "debug";\r\n    foo: bar;\r\n  }\r\n}',
  },
  {
    name: 'output.css',
    data: 'a {\n  b-foo: bar;\n}\n',
  },
  {
    name: 'warning',
    data: 'spec/errors/fn-debug/property-dart-sass/input.scss:3 DEBUG: debug\n',
  },
]
