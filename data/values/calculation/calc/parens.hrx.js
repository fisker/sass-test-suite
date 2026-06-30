export default [
  {
    name: 'number/input.scss',
    data: 'a {b: calc((1px))}\n',
  },
  {
    name: 'number/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'operation/input.scss',
    data: 'a {b: calc((1px + 1%))}\n',
  },
  {
    name: 'operation/output.css',
    data: 'a {\n  b: calc(1px + 1%);\n}\n',
  },
  {
    name: 'calculation/input.scss',
    data: 'a {b: calc((calc(1px + 1%)))}\n',
  },
  {
    name: 'calculation/output.css',
    data: 'a {\n  b: calc(1px + 1%);\n}\n',
  },
  {
    name: 'var/direct/input.scss',
    data: 'a {b: calc((var(--c)))}\n',
  },
  {
    name: 'var/direct/output.css',
    data: 'a {\n  b: calc((var(--c)));\n}\n',
  },
  {
    name: 'var/variable/input.scss',
    data: '$c: var(--d);\na {b: calc(($c))}\n',
  },
  {
    name: 'var/variable/output.css',
    data: 'a {\n  b: calc((var(--d)));\n}\n',
  },
  {
    name: 'variable/input.scss',
    data: '@use "sass:string";\n$c: string.unquote("1 + 2");\na {b: calc(($c))}\n',
  },
  {
    name: 'variable/output.css',
    data: 'a {\n  b: calc((1 + 2));\n}\n',
  },
  {
    name: 'interpolation/input.scss',
    data: 'a {b: calc((#{"1 + 2"}))}\n',
  },
  {
    name: 'interpolation/output.css',
    data: 'a {\n  b: calc((1 + 2));\n}\n',
  },
  {
    name: 'identifier/input.scss',
    data: 'a {b: calc((d))}\n',
  },
  {
    name: 'identifier/output.css',
    data: 'a {\n  b: calc((d));\n}\n',
  },
  {
    name: 'double_preserved/input.scss',
    data: 'a {b: calc(((var(--c))))}\n',
  },
  {
    name: 'double_preserved/output.css',
    data: 'a {\n  b: calc(((var(--c))));\n}\n',
  },
]
