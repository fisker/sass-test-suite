export default [
  {
    name: 'input.scss',
    data: '.foo {\n  /*foo*/foo/*foo*/: /*foo*/bar/*foo*/;\n  /*foo*/ foo /*foo*/ : /*foo*/ bar /*foo*/;\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  /*foo*/\n  foo/*foo*/: bar;\n  /*foo*/\n  foo: bar;\n}\n',
  },
]
