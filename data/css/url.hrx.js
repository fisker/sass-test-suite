export default [
  {
    name: 'escape/close_paren/input.scss',
    data: 'a {b: url(\\))}\n',
  },
  {
    name: 'escape/close_paren/output.css',
    data: 'a {\n  b: url(\\));\n}\n',
  },
  {
    name: 'escape/interpolation/input.scss',
    data: 'a {b: url(\\#{})}\n',
  },
  {
    name: 'escape/interpolation/output.css',
    data: 'a {\n  b: url(\\#{});\n}\n',
  },
  {
    name: 'escape/ascii/input.scss',
    data: 'a {b: url(\\41)}\n',
  },
  {
    name: 'escape/ascii/output.css',
    data: 'a {\n  b: url(A);\n}\n',
  },
  {
    name: 'escape/non_ascii/input.scss',
    data: 'a {b: url(\\2603)}\n',
  },
  {
    name: 'escape/non_ascii/output.css',
    data: '@charset "UTF-8";\na {\n  b: url(☃);\n}\n',
  },
]
