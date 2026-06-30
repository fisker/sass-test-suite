export default [
  {
    name: 'input.scss',
    data: '$xs-break: 30em;@media ALL AND (max-width: $xs-break) {header {display: none;}}\n',
  },
  {
    name: 'output.css',
    data: '@media ALL and (max-width: 30em) {\n  header {\n    display: none;\n  }\n}\n',
  },
]
