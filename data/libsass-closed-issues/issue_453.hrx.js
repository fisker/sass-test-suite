export default [
  {
    name: 'input.scss',
    data: 'div {\n    --a: 2px;\n    top: var(--a);\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  --a: 2px;\n  top: var(--a);\n}\n',
  },
]
