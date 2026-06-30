export default [
  {
    name: 'input.scss',
    data: 'foo bar {\n    baz & {\n        bam: true;\n    }\n}\n\nfoo {\n    bar baz & {\n        bam: true;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: 'baz foo bar {\n  bam: true;\n}\n\nbar baz foo {\n  bam: true;\n}\n',
  },
]
