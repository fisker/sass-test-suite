export default [
  {
    name: 'input.scss',
    data: '// Function names can be defined and referred to using escapes, which are\n// normalized.\n@function f\\6Fo-bar() {@return 1}\n\na {b: foo-b\\61r()}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
]
