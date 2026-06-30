export default [
  {
    name: 'README.md',
    data: 'Regression tests for sass/dart-sass#1104.\n',
  },
  {
    name: 'identifier/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'identifier/plain.css',
    data: 'a {--b: c}\n',
  },
  {
    name: 'identifier/output.css',
    data: 'a {\n  --b: c;\n}\n',
  },
  {
    name: 'color/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'color/plain.css',
    data: 'a {--b: #ff0000}\n',
  },
  {
    name: 'color/output.css',
    data: 'a {\n  --b: #ff0000;\n}\n',
  },
  {
    name: 'nested/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'nested/plain.css',
    data: 'a {--b: {c: d}}\n',
  },
  {
    name: 'nested/output.css',
    data: 'a {\n  --b: {c: d};\n}\n',
  },
  {
    name: 'arbitrary_tokens/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'arbitrary_tokens/plain.css',
    data: 'a {--b: `~@#$%^&*()_-+={[]}|?/><}\n',
  },
  {
    name: 'arbitrary_tokens/output.css',
    data: 'a {\n  --b: `~@#$%^&*()_-+={[]}|?/><;\n}\n',
  },
]
