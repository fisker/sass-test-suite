// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/slice/end.hrx

export default [
  {
    name: 'positive/0/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, 0)}\n',
  },
  {
    name: 'positive/0/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'positive/1/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, 1)}\n',
  },
  {
    name: 'positive/1/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'positive/2/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, 2)}\n',
  },
  {
    name: 'positive/2/output.css',
    data: 'a {\n  b: "cd";\n}\n',
  },
  {
    name: 'positive/last/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, 3)}\n',
  },
  {
    name: 'positive/last/output.css',
    data: 'a {\n  b: "cde";\n}\n',
  },
  {
    name: 'positive/after_last/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, 100)}\n',
  },
  {
    name: 'positive/after_last/output.css',
    data: 'a {\n  b: "cde";\n}\n',
  },
  {
    name: 'positive/after_start/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cdef", 2, 3)}\n',
  },
  {
    name: 'positive/after_start/output.css',
    data: 'a {\n  b: "de";\n}\n',
  },
  {
    name: 'negative/1/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, -1)}\n',
  },
  {
    name: 'negative/1/output.css',
    data: 'a {\n  b: "cde";\n}\n',
  },
  {
    name: 'negative/2/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, -2)}\n',
  },
  {
    name: 'negative/2/output.css',
    data: 'a {\n  b: "cd";\n}\n',
  },
  {
    name: 'negative/last/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, -4)}\n',
  },
  {
    name: 'negative/last/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'negative/after_last/input.scss',
    data: '@use "sass:string";\na {b: string.slice("cde", 1, -100)}\n',
  },
  {
    name: 'negative/after_last/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
]
