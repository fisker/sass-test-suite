export default [
  {
    name: 'positive/0/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 0)}\n',
  },
  {
    name: 'positive/0/output.css',
    data: 'a {\n  b: "cde";\n}\n',
  },
  {
    name: 'positive/1/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1)}\n',
  },
  {
    name: 'positive/1/output.css',
    data: 'a {\n  b: "cde";\n}\n',
  },
  {
    name: 'positive/2/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 2)}\n',
  },
  {
    name: 'positive/2/output.css',
    data: 'a {\n  b: "de";\n}\n',
  },
  {
    name: 'positive/last/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 4)}\n',
  },
  {
    name: 'positive/last/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'positive/after_last/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 100)}\n',
  },
  {
    name: 'positive/after_last/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'positive/after_end/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cdef", 3, 2)}\n',
  },
  {
    name: 'positive/after_end/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'negative/1/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", -1)}\n',
  },
  {
    name: 'negative/1/output.css',
    data: 'a {\n  b: "e";\n}\n',
  },
  {
    name: 'negative/2/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", -2)}\n',
  },
  {
    name: 'negative/2/output.css',
    data: 'a {\n  b: "de";\n}\n',
  },
  {
    name: 'negative/last/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", -3)}\n',
  },
  {
    name: 'negative/last/output.css',
    data: 'a {\n  b: "cde";\n}\n',
  },
  {
    name: 'negative/after_last/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", -100)}\n',
  },
  {
    name: 'negative/after_last/output.css',
    data: 'a {\n  b: "cde";\n}\n',
  },
]
