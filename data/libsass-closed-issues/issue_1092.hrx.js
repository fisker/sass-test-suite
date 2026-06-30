// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1092.hrx

export default [
  {
    name: 'input.scss',
    data: '$bar: "";\n$baz: " ";\na { a: foo #{""}; }\nb { b: foo #{" "}; }\nc { c: foo #{$bar}; }\nd { d: foo #{$baz}; }\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  a: foo;\n}\n\nb {\n  b: foo  ;\n}\n\nc {\n  c: foo;\n}\n\nd {\n  d: foo  ;\n}\n',
  },
]
