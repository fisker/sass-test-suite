// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/slice/empty.hrx

export default [
  {
    name: 'start/0/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 0)}\n',
  },
  {
    name: 'start/0/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'start/1/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 1)}\n',
  },
  {
    name: 'start/1/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'start/2/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 2)}\n',
  },
  {
    name: 'start/2/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'start/negative_1/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", -1)}\n',
  },
  {
    name: 'start/negative_1/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'end/0/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 1, 0)}\n',
  },
  {
    name: 'end/0/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'end/1/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 1, 1)}\n',
  },
  {
    name: 'end/1/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'end/2/input.scss',
    data: '@use "sass:string";\na {b: string.slice("", 1, 2)}\n',
  },
  {
    name: 'end/2/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
]
