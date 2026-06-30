// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1043.hrx

export default [
  {
    name: 'input.scss',
    data: '.component{\n    color: red;\n    @at-root{\n        #{&}--foo#{&}--bar {\n            color: blue;\n        }\n    }\n}\n\n.test{\n        .selector#{&} {\n            color: blue;\n        }\n}',
  },
  {
    name: 'output.css',
    data: '.component {\n  color: red;\n}\n.component--foo.component--bar {\n  color: blue;\n}\n\n.test .selector.test {\n  color: blue;\n}\n',
  },
]
