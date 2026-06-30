export default [
  {
    name: 'input.scss',
    data: 'foo bar {\n    &:baz {\n        bam: true;\n    }\n}\n\nfoo + bar {\n    &:baz {\n        bam: true;\n    }\n}\n\nfoo > bar {\n    &:baz {\n        bam: true;\n    }\n}\n\nfoo ~ bar {\n    &:baz {\n        bam: true;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar:baz {\n  bam: true;\n}\n\nfoo + bar:baz {\n  bam: true;\n}\n\nfoo > bar:baz {\n  bam: true;\n}\n\nfoo ~ bar:baz {\n  bam: true;\n}\n',
  },
]
