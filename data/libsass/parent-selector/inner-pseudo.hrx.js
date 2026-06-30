// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/parent-selector/inner-pseudo.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n    &:bar baz {\n        bam: true;\n    }\n}\n\nfoo {\n    &:bar + baz {\n        bam: true;\n    }\n}\n\nfoo {\n    &:bar > baz {\n        bam: true;\n    }\n}\n\nfoo {\n    &:bar ~ baz {\n        bam: true;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo:bar baz {\n  bam: true;\n}\n\nfoo:bar + baz {\n  bam: true;\n}\n\nfoo:bar > baz {\n  bam: true;\n}\n\nfoo:bar ~ baz {\n  bam: true;\n}\n',
  },
]
