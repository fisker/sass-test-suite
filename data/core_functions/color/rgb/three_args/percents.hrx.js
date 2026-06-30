export default [
  {
    name: 'README.md',
    data: 'Channels may also be specified as percents between 0% and 100%, which may be\nmixed with unitless numbers.\n',
  },
  {
    name: 'all/percent/input.scss',
    data: 'a {b: rgb(7.1%, 20.4%, 33.9%)}\n',
  },
  {
    name: 'all/percent/output.css',
    data: 'a {\n  b: rgb(18.105, 52.02, 86.445);\n}\n',
  },
  {
    name: 'unitless/green/input.scss',
    data: 'a {b: rgb(74.7%, 173, 93%)}\n',
  },
  {
    name: 'unitless/green/output.css',
    data: 'a {\n  b: rgb(190.485, 173, 237.15);\n}\n',
  },
  {
    name: 'percent/green/input.scss',
    data: 'a {b: rgb(190, 68%, 237)}\n',
  },
  {
    name: 'percent/green/output.css',
    data: 'a {\n  b: rgb(190, 173.4, 237);\n}\n',
  },
  {
    name: 'boundaries/input.scss',
    data: 'a {b: rgb(0%, 100%, 50%)}\n',
  },
  {
    name: 'boundaries/output.css',
    data: 'a {\n  b: rgb(0, 255, 127.5);\n}\n',
  },
  {
    name: 'clamped/README.md',
    data: 'Channels that are out of bounds are clamped within bounds.\n',
  },
  {
    name: 'clamped/red/input.scss',
    data: 'a {b: rgb(100.1%, 0, 0)}\n',
  },
  {
    name: 'clamped/red/output.css',
    data: 'a {\n  b: rgb(255, 0, 0);\n}\n',
  },
  {
    name: 'clamped/green/input.scss',
    data: 'a {b: rgb(0, -0.1%, 0)}\n',
  },
  {
    name: 'clamped/green/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'clamped/blue/input.scss',
    data: 'a {b: rgb(0, 0, 200%)}\n',
  },
  {
    name: 'clamped/blue/output.css',
    data: 'a {\n  b: rgb(0, 0, 255);\n}\n',
  },
]
