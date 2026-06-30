export default [
  {
    name: 'input.scss',
    data: 'input {\n    outline: 5px auto -webkit-focus-ring-color;\n    foo: random -hello-this-is-dog;\n    bar: rando -two-or-more -things-that-start -with-hyphens;\n    baz: foo - bar;\n}',
  },
  {
    name: 'output.css',
    data: 'input {\n  outline: 5px auto -webkit-focus-ring-color;\n  foo: random -hello-this-is-dog;\n  bar: rando -two-or-more -things-that-start -with-hyphens;\n  baz: foo-bar;\n}\n',
  },
]
