// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/parent-selector/outer-combinator.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo bar {\n    & baz {\n        bam: true;\n    }\n    baz & {\n        bam: true;\n    }\n}\n\nfoo + bar {\n    & baz {\n        bam: true;\n    }\n    baz & {\n        bam: true;\n    }\n}\n\nfoo > bar {\n    & baz {\n        bam: true;\n    }\n    baz & {\n        bam: true;\n    }\n}\n\nfoo ~ bar {\n    & baz {\n        bam: true;\n    }\n    baz & {\n        bam: true;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar baz {\n  bam: true;\n}\nbaz foo bar {\n  bam: true;\n}\n\nfoo + bar baz {\n  bam: true;\n}\nbaz foo + bar {\n  bam: true;\n}\n\nfoo > bar baz {\n  bam: true;\n}\nbaz foo > bar {\n  bam: true;\n}\n\nfoo ~ bar baz {\n  bam: true;\n}\nbaz foo ~ bar {\n  bam: true;\n}\n',
  },
]
