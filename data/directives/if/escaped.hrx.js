export default [
  {
    name: 'if_only/input.scss',
    data: '// Escapes should be normalized before directives are parsed.\n@\\69 f true {a {b: c}}\n',
  },
  {
    name: 'if_only/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'with_else/input.scss',
    data: '// See sass/dart-sass#1011\n@if false {}\n@\\65lse {a {b: c}}\n',
  },
  {
    name: 'with_else/output.css',
    data: 'a {\n  b: c;\n}\n\n',
  },
]
