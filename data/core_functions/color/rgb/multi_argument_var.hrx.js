export default [
  {
    name: '1_of_3/input.scss',
    data: '// var() is substituted before parsing, so it may contain multiple arguments.\na {b: rgb(var(--foo), 3, 0.4)}\n',
  },
  {
    name: '1_of_3/output.css',
    data: 'a {\n  b: rgb(var(--foo), 3, 0.4);\n}\n',
  },
  {
    name: '2_of_3/input.scss',
    data: 'a {b: rgb(1, var(--foo), 0.4)}\n',
  },
  {
    name: '2_of_3/output.css',
    data: 'a {\n  b: rgb(1, var(--foo), 0.4);\n}\n',
  },
  {
    name: '3_of_3/input.scss',
    data: 'a {b: rgb(1, 2, var(--foo))}\n',
  },
  {
    name: '3_of_3/output.css',
    data: 'a {\n  b: rgb(1, 2, var(--foo));\n}\n',
  },
  {
    name: '1_of_2/input.scss',
    data: 'a {b: rgb(var(--foo), 0.4)}\n',
  },
  {
    name: '1_of_2/output.css',
    data: 'a {\n  b: rgb(var(--foo), 0.4);\n}\n',
  },
  {
    name: '2_of_2/input.scss',
    data: 'a {b: rgb(1, var(--foo))}\n',
  },
  {
    name: '2_of_2/output.css',
    data: 'a {\n  b: rgb(1, var(--foo));\n}\n',
  },
  {
    name: '1_of_1/input.scss',
    data: 'a {b: rgb(var(--foo))}\n',
  },
  {
    name: '1_of_1/output.css',
    data: 'a {\n  b: rgb(var(--foo));\n}\n\n',
  },
]
