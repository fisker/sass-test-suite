// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/space.hrx

export default [
  {
    name: 'var/before/input.scss',
    data: 'a {b: calc(var(--c) 1)}\n',
  },
  {
    name: 'var/before/output.css',
    data: 'a {\n  b: calc(var(--c) 1);\n}\n',
  },
  {
    name: 'var/after/input.scss',
    data: 'a {b: calc(1 var(--c))}\n',
  },
  {
    name: 'var/after/output.css',
    data: 'a {\n  b: calc(1 var(--c));\n}\n',
  },
  {
    name: 'var/between/input.scss',
    data: 'a {b: calc(1 var(--c) 2)}\n',
  },
  {
    name: 'var/between/output.css',
    data: 'a {\n  b: calc(1 var(--c) 2);\n}\n',
  },
  {
    name: 'variable/before/input.scss',
    data: '@use "sass:string";\n$c: string.unquote("1 +");\na {b: calc($c 2)}\n',
  },
  {
    name: 'variable/before/output.css',
    data: 'a {\n  b: calc(1 + 2);\n}\n',
  },
  {
    name: 'variable/after/input.scss',
    data: '@use "sass:string";\n$c: string.unquote("+ 2");\na {b: calc(1 $c)}\n',
  },
  {
    name: 'variable/after/output.css',
    data: 'a {\n  b: calc(1 + 2);\n}\n',
  },
  {
    name: 'variable/between/input.scss',
    data: '@use "sass:string";\n$c: string.unquote("+ 2 +");\na {b: calc(1 $c 3)}\n',
  },
  {
    name: 'variable/between/output.css',
    data: 'a {\n  b: calc(1 + 2 + 3);\n}\n',
  },
  {
    name: 'interpolation/before/input.scss',
    data: 'a {b: calc(#{"1 +"} 2)}\n',
  },
  {
    name: 'interpolation/before/output.css',
    data: 'a {\n  b: calc(1 + 2);\n}\n',
  },
  {
    name: 'interpolation/after/input.scss',
    data: 'a {b: calc(1 #{"+ 2"})}\n',
  },
  {
    name: 'interpolation/after/output.css',
    data: 'a {\n  b: calc(1 + 2);\n}\n',
  },
  {
    name: 'interpolation/between/input.scss',
    data: 'a {b: calc(1 #{"+ 2 +"} 3)}\n',
  },
  {
    name: 'interpolation/between/output.css',
    data: 'a {\n  b: calc(1 + 2 + 3);\n}\n',
  },
]
