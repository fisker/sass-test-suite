export default [
  {
    name: 'input.scss',
    data: 'a {\n  b: {\n    @debug test;\n    c: d;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b-c: d;\n}\n',
  },
  {
    name: 'warning',
    data: 'spec/libsass/debug-directive-nested/inline-dart-sass/input.scss:3 DEBUG: test\n',
  },
]
