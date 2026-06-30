// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass/extend.hrx

export default [
  {
    name: 'input.sass',
    data: '.error\r\n  border: 1px #f00\r\n  background-color: #fdd\r\n\r\n.seriousError\r\n  @extend .error\r\n  border-width: 3px\r\n\r\n.criticalError\r\n  @extend .seriousError\r\n  position: fixed\r\n  top: 10%\r\n  bottom: 10%\r\n  left: 10%\r\n  right: 10%\r\n',
  },
  {
    name: 'output.css',
    data: '.error, .seriousError, .criticalError {\n  border: 1px #f00;\n  background-color: #fdd;\n}\n\n.seriousError, .criticalError {\n  border-width: 3px;\n}\n\n.criticalError {\n  position: fixed;\n  top: 10%;\n  bottom: 10%;\n  left: 10%;\n  right: 10%;\n}\n',
  },
]
