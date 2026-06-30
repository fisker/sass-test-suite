// https://github.com/sass/sass-spec/blob/HEAD/spec/values/lists/brackets.hrx

export default [
  {
    name: 'empty/input.scss',
    data: 'a {b: []}\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  b: [];\n}\n',
  },
  {
    name: 'whitespace/empty/sass/input.sass',
    data: 'a\n  b: [\n  ]\n',
  },
  {
    name: 'whitespace/empty/sass/output.css',
    data: 'a {\n  b: [];\n}\n',
  },
  {
    name: 'whitespace/single/after_lbracket/sass/input.sass',
    data: 'a\n  b: [\n    c]\n',
  },
  {
    name: 'whitespace/single/after_lbracket/sass/output.css',
    data: 'a {\n  b: [c];\n}\n',
  },
  {
    name: 'whitespace/single/after_val/sass/input.sass',
    data: 'a\n  b: [c\n    ]\n',
  },
  {
    name: 'whitespace/single/after_val/sass/output.css',
    data: 'a {\n  b: [c];\n}\n',
  },
  {
    name: 'whitespace/multiple/after_lbracket/sass/input.sass',
    data: 'a\n  b: [\n    c d]\n',
  },
  {
    name: 'whitespace/multiple/after_lbracket/sass/output.css',
    data: 'a {\n  b: [c d];\n}\n',
  },
  {
    name: 'whitespace/multiple/after_val/sass/input.sass',
    data: 'a\n  b: [c\n    d]\n',
  },
  {
    name: 'whitespace/multiple/after_val/sass/output.css',
    data: 'a {\n  b: [c d];\n}\n',
  },
  {
    name: 'whitespace/multiple/before_rbracket/sass/input.sass',
    data: 'a\n  b: [c d\n    ]\n',
  },
  {
    name: 'whitespace/multiple/before_rbracket/sass/output.css',
    data: 'a {\n  b: [c d];\n}\n',
  },
  {
    name: 'single/input.scss',
    data: 'a {b: [c]}\n',
  },
  {
    name: 'single/output.css',
    data: 'a {\n  b: [c];\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: 'a {b: [c d]}\n',
  },
  {
    name: 'multiple/output.css',
    data: 'a {\n  b: [c d];\n}\n',
  },
  {
    name: 'nested/empty/input.scss',
    data: 'a {b: [[]]}\n',
  },
  {
    name: 'nested/empty/output.css',
    data: 'a {\n  b: [[]];\n}\n',
  },
  {
    name: 'nested/single/input.scss',
    data: 'a {b: [[c]]}\n',
  },
  {
    name: 'nested/single/output.css',
    data: 'a {\n  b: [[c]];\n}\n',
  },
  {
    name: 'nested/multiple/input.scss',
    data: 'a {b: [[c] [d]]}\n',
  },
  {
    name: 'nested/multiple/output.css',
    data: 'a {\n  b: [[c] [d]];\n}\n',
  },
  {
    name: 'nested/unbracketed/empty/input.scss',
    data: 'a {b: [()]}\n',
  },
  {
    name: 'nested/unbracketed/empty/output.css',
    data: 'a {\n  b: [];\n}\n',
  },
  {
    name: 'nested/unbracketed/single/input.scss',
    data: 'a {b: [(c,)]}\n',
  },
  {
    name: 'nested/unbracketed/single/output.css',
    data: 'a {\n  b: [c];\n}\n',
  },
  {
    name: 'nested/unbracketed/multiple/input.scss',
    data: 'a {b: [(c,) (d e)]}\n',
  },
  {
    name: 'nested/unbracketed/multiple/output.css',
    data: 'a {\n  b: [c d e];\n}\n',
  },
]
