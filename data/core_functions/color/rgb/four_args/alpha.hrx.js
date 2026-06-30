export default [
  {
    name: 'percent/negative/input.scss',
    data: 'a {b: rgb(0, 0, 0, -10%)}\n',
  },
  {
    name: 'percent/negative/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
  {
    name: 'percent/min/input.scss',
    data: 'a {b: rgb(0, 0, 0, 0%)}\n',
  },
  {
    name: 'percent/min/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
  {
    name: 'percent/positive/input.scss',
    data: 'a {b: rgb(0, 0, 0, 45.6%)}\n',
  },
  {
    name: 'percent/positive/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.456);\n}\n',
  },
  {
    name: 'percent/max/input.scss',
    data: 'a {b: rgb(0, 0, 0, 100%)}\n',
  },
  {
    name: 'percent/max/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'percent/above/max/input.scss',
    data: 'a {b: rgb(0, 0, 0, 250%)}\n',
  },
  {
    name: 'percent/above/max/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'unitless/negative/input.scss',
    data: 'a {b: rgb(0, 0, 0, -10)}\n',
  },
  {
    name: 'unitless/negative/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
  {
    name: 'unitless/min/input.scss',
    data: 'a {b: rgb(0, 0, 0, 0)}\n',
  },
  {
    name: 'unitless/min/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
  {
    name: 'unitless/positive/input.scss',
    data: 'a {b: rgb(0, 0, 0, 0.456)}\n',
  },
  {
    name: 'unitless/positive/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.456);\n}\n',
  },
  {
    name: 'unitless/max/input.scss',
    data: 'a {b: rgb(0, 0, 0, 1)}\n',
  },
  {
    name: 'unitless/max/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'unitless/above/max/input.scss',
    data: 'a {b: rgb(0, 0, 0, 250)}\n',
  },
  {
    name: 'unitless/above/max/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
]
